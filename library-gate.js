/* Nông Sản 360 — one-time library reader registration.
 * IMPORTANT: This feature stays OFF until a tested Apps Script /exec URL is configured.
 * No PII is stored in the browser; only a non-sensitive access marker.
 */
(function(){
  'use strict';
  const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwOanbih1xPmM07lBtMdfkll3_8JNYRRKzW0x7qFGuWsVqjHDuYf5YmA9JNonthV5EWyQ/exec'; // After Apps Script deployment: paste verified https://script.google.com/macros/s/.../exec URL.
  const STORAGE_KEY = 'ns360-library-reader-v1';
  const isConfigured = /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec(?:\?.*)?$/.test(WEB_APP_URL);
  // Stage the live Google Apps Script connection for owner testing before public launch.
  // Once one signup is verified in the private Google Sheet, change LIVE_ENABLED to true.
  const LIVE_ENABLED = false;
  const OWNER_TEST_MODE = new URLSearchParams(location.search).get('ns360_signup_test') === '1';
  const isEnabled = isConfigured && (LIVE_ENABLED || OWNER_TEST_MODE);
  const protectedRoute = route => /^\/giao-trinh\/(?:cf|ng|lm|ps)-\d{2}\.html$/.test(route);
  let accessThisSession = false;
  let activeMessageHandler = null;

  function hasAccess(){
    if(accessThisSession)return true;
    try{return localStorage.getItem(STORAGE_KEY) === 'granted-2026-11-14';}
    catch(_){return false;}
  }
  function saveAccess(){
    accessThisSession=true;
    try{localStorage.setItem(STORAGE_KEY,'granted-2026-11-14');}catch(_){/* private mode: keep this session */}
  }
  function randomNonce(){
    try{
      const bytes=new Uint8Array(18);
      crypto.getRandomValues(bytes);
      return Array.from(bytes,b=>b.toString(16).padStart(2,'0')).join('');
    }catch(_){return Date.now().toString(36)+'_'+Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2);}
  }
  function sourceName(){
    const s=(new URLSearchParams(location.search).get('utm_source')||'').toLowerCase();
    if(/^(facebook|fb|messenger|metricool)$/.test(s))return s;
    if(/facebook|fb\.com|m\.me/i.test(document.referrer))return 'facebook';
    return 'website-library';
  }
  function isTrustedGoogleOrigin(origin){
    try{const u=new URL(origin);return u.protocol==='https:' && (u.hostname==='script.google.com'||u.hostname==='script.googleusercontent.com'||u.hostname.endsWith('.googleusercontent.com'));}
    catch(_){return false;}
  }
  function renderGate(host,route){
    if(activeMessageHandler){window.removeEventListener('message',activeMessageHandler);activeMessageHandler=null;}
    const nonce=randomNonce();
    const url=new URL(WEB_APP_URL);
    url.searchParams.set('nonce',nonce);
    url.searchParams.set('src',sourceName());
    host.innerHTML='\n      <main class="ns-libgate-screen">\n        <nav class="ns-libgate-breadcrumb"><a href="#/">Trang chủ</a> / <a href="#/thu-vien/index.html">Thư viện</a> / Đăng ký đọc</nav>\n        <div class="ns-libgate-columns">\n          <section class="ns-libgate-description"><span class="ns-libgate-label">THƯ VIỆN NÔNG SẢN 360</span>\n            <h1>Mở quyền đọc miễn phí một lần</h1>\n            <p>Đăng ký một lần trên trình duyệt này để đọc <strong>21 giáo trình</strong> về cà phê, ngô, lúa mì và hàng hóa phái sinh.</p>\n            <ul><li>Đọc các giáo trình không cần mở tài khoản giao dịch.</li><li>Chuyển qua lại giữa các tài liệu mà không nhập lại thông tin.</li><li>Chỉ nhận tin thị trường khi bạn tự chọn đồng ý.</li></ul>\n            <p class="ns-libgate-small">Chúng tôi chỉ lưu trên trình duyệt dấu hiệu đã đăng ký, không lưu họ tên, điện thoại hoặc email tại đây.</p>\n            <a class="ns-libgate-back" href="#/thu-vien/index.html">← Quay lại danh mục tài liệu</a>\n          </section>\n          <section class="ns-libgate-card" aria-label="Biểu mẫu đăng ký đọc tài liệu">\n            <h2>Đăng ký đọc thư viện</h2>\n            <p>Miễn phí · Một lần trên trình duyệt này</p>\n            <iframe id="ns-libgate-frame" title="Form đăng ký đọc thư viện Nông Sản 360" loading="eager" referrerpolicy="no-referrer"></iframe>\n            <div id="ns-libgate-error" class="ns-libgate-error" hidden>Chưa thể mở biểu mẫu. Hãy thử tải lại trang hoặc liên hệ <a href="tel:0985272776">0985 272 776</a>.</div>\n          </section>\n        </div>\n      </main>';
    const iframe=host.querySelector('#ns-libgate-frame');
    iframe.src=url.href;
    activeMessageHandler=function(event){
      if(!isTrustedGoogleOrigin(event.origin))return;
      if(!event.data||event.data.type!=='NS360_LIBRARY_REGISTERED'||event.data.version!==1||event.data.nonce!==nonce)return;
      saveAccess();
      window.removeEventListener('message',activeMessageHandler);
      activeMessageHandler=null;
      window.dispatchEvent(new Event('hashchange'));
    };
    window.addEventListener('message',activeMessageHandler);
  }
  window.NS360_LIBRARY_GATE={
    enabled:isEnabled,
    shouldBlock:route=>isEnabled && protectedRoute(route) && !hasAccess(),
    render:renderGate,
    hasAccess:hasAccess
  };
})();
