/** Nông Sản 360 — Registration backend for free library, schema v6 (14 columns retained for historical compatibility; IP city only). */
const LIBRARY_CONFIG = Object.freeze({
  allowedParentOrigin: 'https://nmtu1525-art.github.io',
  sheetName: 'Leads',
  privacyVersion: '2026-11-14-v6',
  maxNameLength: 80,
  maxEmailLength: 160,
  maxCityLength: 70
});

function doGet(e) {
  const params = (e && e.parameter) || {};
  const t = HtmlService.createTemplateFromFile('Form');
  const nonce = String(params.nonce || '');
  t.nonce = /^[a-zA-Z0-9_-]{12,80}$/.test(nonce) ? nonce : '';
  t.visitSource = /^[a-zA-Z0-9_-]{2,45}$/.test(String(params.src || '')) ? String(params.src) : 'website-library';
  return t.evaluate().setTitle('Đăng ký đọc thư viện Nông Sản 360')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function safeText(value, limit) {
  return String(value == null ? '' : value).replace(/[\x00-\x1f\x7f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, limit);
}

function safeSheetText(value, limit) {
  const text = safeText(value, limit);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

/** Called through google.script.run after explicit consent in Form.html. */
function registerLead(payload) {
  if (!payload || typeof payload !== 'object') throw new Error('Dữ liệu không hợp lệ.');
  if (payload.website) throw new Error('Yêu cầu không hợp lệ.'); // Honeypot
  if (payload.privacyConsent !== true) throw new Error('Cần đồng ý xử lý dữ liệu để cấp quyền đọc.');

  const name = safeText(payload.name, 90);
  const phone = String(payload.phone || '').replace(/[\s.()\-]/g, '');
  const email = safeText(payload.email, LIBRARY_CONFIG.maxEmailLength).toLowerCase();
  const topic = safeText(payload.topic, 25);
  const source = safeText(payload.source, 45);
  const requestId = safeText(payload.requestId, 80);
  // City only from optional GeoIP lookup. No IP, GPS, ward or Maps URL is stored for new leads.
  const city = safeText(payload.city, LIBRARY_CONFIG.maxCityLength);
  const region = safeText(payload.region, LIBRARY_CONFIG.maxCityLength);
  const cityLabel = city ? [city, region !== city ? region : ''].filter(Boolean).join(', ') : '';

  if (name.length < 2 || name.length > LIBRARY_CONFIG.maxNameLength) throw new Error('Họ tên cần từ 2 đến 80 ký tự.');
  if (!/^(?:0[0-9]{9,10}|\+84[0-9]{9,10})$/.test(phone)) throw new Error('Vui lòng kiểm tra số điện thoại Việt Nam.');
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Email không đúng định dạng.');
  if (!['ca-phe', 'ngo', 'lua-mi', 'phai-sinh', 'tong-hop'].includes(topic)) throw new Error('Chọn lĩnh vực quan tâm.');
  if (!/^[a-zA-Z0-9_-]{12,80}$/.test(requestId)) throw new Error('Mã đăng ký không hợp lệ. Vui lòng tải lại trang.');

  const id = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  if (!id) throw new Error('Hệ thống chưa được kết nối nơi lưu dữ liệu.');
  const doc = SpreadsheetApp.openById(id);
  const sheet = doc.getSheetByName(LIBRARY_CONFIG.sheetName);
  if (!sheet) throw new Error('Không tìm thấy bảng dữ liệu đăng ký.');
  const header = sheet.getRange(1, 1, 1, 14).getDisplayValues()[0];
  if (header[0] !== 'ThoiGianDangKy' || header[2] !== 'SoDienThoai' || header[8] !== 'RequestID' ||
      header[9] !== 'TrangThai' || header[10] !== 'ThanhPhoUocTinh' || header[11] !== 'GoogleMapsUocTinh' ||
      header[12] !== 'PhuongXaUocTinh' || header[13] !== 'NguonDinhVi') {
    throw new Error('Cấu trúc bảng dữ liệu không chính xác.');
  }

  const lock = LockService.getScriptLock();
  if (!lock.tryLock(15000)) throw new Error('Đường truyền đang bận. Xin thử lại.');
  try {
    const duplicate = sheet.getRange(2, 9, Math.max(sheet.getLastRow() - 1, 1), 1)
      .createTextFinder(requestId).matchEntireCell(true).findNext();
    if (duplicate) return { ok: true, alreadySaved: true };
    const stamp = Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'yyyy-MM-dd HH:mm:ss');
    sheet.appendRow([
      stamp, safeSheetText(name, 80), safeSheetText(phone, 20), safeSheetText(email, 160),
      safeSheetText(topic, 25), safeSheetText(source, 45),
      LIBRARY_CONFIG.privacyVersion, stamp, safeSheetText(requestId, 80), 'ACTIVE',
      safeSheetText(cityLabel, 145), '', '', ''
    ]);
    SpreadsheetApp.flush();
    return { ok: true };
  } finally {
    lock.releaseLock();
  }
}
