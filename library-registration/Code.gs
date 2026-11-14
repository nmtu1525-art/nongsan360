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
  if (String(params.action || '') === 'receipt') {
    // Public endpoint returns ONLY whether a high-entropy request ID is saved.
    // No name, phone, email, or any other private sheet information is exposed.
    const callback = String(params.callback || '');
    const requestId = String(params.id || '');
    if (!/^NS360_RC_[a-zA-Z0-9_]{8,48}$/.test(callback) ||
        !/^v7-[a-zA-Z0-9_-]{18,70}$/.test(requestId)) {
      return ContentService.createTextOutput('/* invalid receipt request */')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    const found = findActiveLeadByRequestId_(requestId);
    return ContentService.createTextOutput(callback + '(' + JSON.stringify({ok:found}) + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  const t = HtmlService.createTemplateFromFile('Form');
  const nonce = String(params.nonce || '');
  t.nonce = /^[a-zA-Z0-9_-]{12,80}$/.test(nonce) ? nonce : '';
  t.visitSource = /^[a-zA-Z0-9_-]{2,45}$/.test(String(params.src || '')) ? String(params.src) : 'website-library';
  return t.evaluate().setTitle('Đăng ký đọc thư viện Nông Sản 360')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * First-party GitHub Pages native form submits as application/x-www-form-urlencoded.
 * Cross-origin no-cors HTTP responses are opaque: browser MUST verify via receipt
 * before granting library access. This handler never returns personal data.
 */
function doPost(e) {
  const p = (e && e.parameter) || {};
  const body = {
    name: p.name, phone: p.phone, email: p.email, topic: p.topic,
    website: p.website, privacyConsent: p.privacyConsent === 'true',
    source: p.source, requestId: p.requestId,
    city: p.city, region: p.region, country: p.country
  };
  const result = registerLead(body);
  return ContentService.createTextOutput(result && result.ok ? 'ACCEPTED' : 'ERROR')
    .setMimeType(ContentService.MimeType.TEXT);
}

function findActiveLeadByRequestId_(requestId) {
  const id = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  if (!id) return false;
  const sheet = SpreadsheetApp.openById(id).getSheetByName(LIBRARY_CONFIG.sheetName);
  if (!sheet || sheet.getLastRow() < 2) return false;
  const hit = sheet.getRange(2, 9, sheet.getLastRow() - 1, 1)
    .createTextFinder(requestId).matchEntireCell(true).findNext();
  return !!hit && String(sheet.getRange(hit.getRow(), 10).getDisplayValue()) === 'ACTIVE';
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
