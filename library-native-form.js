/* Nông Sản 360 native registration (staged; activated only after backend E2E test).
 * First-party page renders form; Apps Script receives POST and verifies high-entropy
 * RequestID via JSONP receipt. Never mark access from an opaque HTTP response.
 */
(function(){
  'use strict';
  const POLICY_URL='https://nmtu1525-art.github.io/nongsan360/chinh-sach-du-lieu.html';
  const MESSENGER_URL='https://m.me/1388965107640064';

  function newRequestId(){
    const bytes=new Uint8Array(20);
    crypto.getRandomValues(bytes);
    return 'v7-'+Array.from(bytes,v=>v.toString(16).padStart(2,'0')).join('');
  }
  async function lookupProvider(url,isIpWho){
    const ctrl=new AbortController();
    const timer=setTimeout(()=>ctrl.abort(),2200);
    try{
      const res=await fetch(url,{signal:ctrl.signal,mode:'cors',cache:'no-store',referrerPolicy:'no-referrer'});
      if(!res.ok)return null;
      const data=await res.json();
      if(!data || (isIpWho && data.success!==true))return null;
      const txt=v=>typeof v==='string'?v.trim().slice(0,70):'';
      const city=txt(data.city)||txt(data.region);
      if(!city)return null;
      return {city:city,region:txt(data.region),country:txt(data.country)};
    }catch(_){return null;}
    finally{clearTimeout(timer);}
  }
  async function optionalCity(){
    return (await lookupProvider('https://get.geojs.io/v1/ip/geo.json',false))||
      (await lookupProvider('https://ipwho.is/?fields=success,city,region,country',true))||{};
  }

  function oneReceipt(endpoint,requestId){
    return new Promise(resolve=>{
      const random=new Uint8Array(12);
      crypto.getRandomValues(random);
      const callback='NS360_RC_'+Array.from(random,v=>v.toString(16).padStart(2,'0')).join('');
      let completed=false,timeout;
      const script=document.createElement('script');
      const finish=ok=>{
        if(completed)return;
        completed=true;
        clearTimeout(timeout);
        try{delete window[callback];}catch(_){window[callback]=undefined;}
        script.remove();
        resolve(ok===true);
      };
      window[callback]=result=>finish(!!(result && result.ok===true));
      script.onerror=()=>finish(false);
      const url=new URL(endpoint);
      url.searchParams.set('action','receipt');
      url.searchParams.set('id',requestId);
      url.searchParams.set('callback',callback);
      timeout=setTimeout(()=>finish(false),3600);
      script.src=url.href;
      document.head.appendChild(script);
    });
  }
  async function verifyReceipt(endpoint,requestId){
    for(let attempt=0;attempt<3;attempt++){
      if(await oneReceipt(endpoint,requestId))return true;
      if(attempt<2)await new Promise(resolve=>setTimeout(resolve,650));
    }
    return false;
  }

  function render(host,route,opts){
    const endpoint=opts.endpoint;
    const source=opts.source;
    const onSuccess=opts.onSuccess;
    const requestId=newRequestId();
    host.innerHTML=`<main class="ns-libgate-screen">
        <nav class="ns-libgate-breadcrumb"><a href="#/">Trang chủ</a> / <a href="#/thu-vien/index.html">Thư viện</a> / Đăng ký đọc</nav>
        <div class="ns-libgate-columns">
          <section class="ns-libgate-description"><span class="ns-libgate-label">THƯ VIỆN NÔNG SẢN 360</span>
            <h1>Đọc miễn phí 21 giáo trình</h1>
            <p>Đăng ký một lần để đọc tài liệu về cà phê, ngô, lúa mì và thị trường hàng hóa phái sinh.</p>
            <ul><li>Đọc miễn phí, không yêu cầu mở tài khoản giao dịch.</li><li>Đọc tiếp trên cùng trình duyệt không cần nhập lại.</li></ul>
          </section>
          <section class="ns-libgate-card ns-native-card">
            <h2>Đăng ký đọc thư viện</h2><p>Miễn phí · Chỉ cần đăng ký một lần</p>
            <form id="ns-native-form">
              <label>Họ và tên <span aria-hidden="true">*</span><input name="name" autocomplete="name" maxlength="80" required placeholder="Nguyễn Văn A"></label>
              <label>Số điện thoại <span aria-hidden="true">*</span><input name="phone" type="tel" autocomplete="tel" inputmode="tel" maxlength="17" required placeholder="09xxxxxxxx"></label>
              <label>Email <small>(không bắt buộc)</small><input name="email" type="email" autocomplete="email" maxlength="160" placeholder="email@vidu.vn"></label>
              <label>Chủ đề quan tâm<select name="topic"><option value="tong-hop">Tổng quan thư viện</option><option value="ca-phe">Cà phê</option><option value="ngo">Ngô</option><option value="lua-mi">Lúa mì</option><option value="phai-sinh">Hàng hóa phái sinh</option></select></label>
              <div class="ns-native-honeypot" aria-hidden="true"><input name="website" tabindex="-1" autocomplete="off"></div>
              <button type="submit" id="ns-native-submit">Đồng ý và mở thư viện miễn phí</button>
              <p id="ns-native-status" role="status" aria-live="polite"></p>
              <small>Thông tin được xử lý theo <a target="_blank" rel="noopener noreferrer" href="https://nmtu1525-art.github.io/nongsan360/chinh-sach-du-lieu.html">Chính sách dữ liệu cá nhân</a>. Không cần cung cấp OTP.</small>
              <p class="ns-native-support">Gặp lỗi? <a href="https://m.me/1388965107640064" target="_blank" rel="noopener noreferrer">Nhắn Fanpage để được hỗ trợ đăng ký</a>.</p>
            </form>
          </section>
        </div>
      </main>`;
    const form=host.querySelector('#ns-native-form');
    const submit=host.querySelector('#ns-native-submit');
    const status=host.querySelector('#ns-native-status');
    let pending=false;
    form.addEventListener('submit',async event=>{
      event.preventDefault();
      if(pending||!form.reportValidity())return;
      pending=true;
      submit.disabled=true;
      status.textContent='Đang ghi nhận đăng ký…';
      status.className='';
      const geo=await optionalCity();
      const values=new URLSearchParams({
        name:form.elements.name.value,
        phone:form.elements.phone.value,
        email:form.elements.email.value,
        topic:form.elements.topic.value,
        website:form.elements.website.value,
        privacyConsent:'true',source,requestId,
        city:geo.city||'',region:geo.region||'',country:geo.country||''
      });
      try{
        // Keep simple cross-origin POST; an opaque response is NOT proof of saving.
        await fetch(endpoint,{method:'POST',mode:'no-cors',credentials:'omit',
          body:values,referrerPolicy:'no-referrer',redirect:'follow'});
      }catch(_){
        // A redirect may fail even after Apps Script saved the POST. Check receipt.
      }
      const saved=await verifyReceipt(endpoint,requestId);
      if(saved){
        status.className='ns-native-success';
        status.textContent='Đã đăng ký thành công. Đang mở thư viện…';
        onSuccess();
        return;
      }
      status.className='ns-native-failure';
      status.textContent='Chưa xác nhận được đăng ký. Anh/chị có thể thử gửi lại hoặc liên hệ Fanpage để được hỗ trợ.';
      submit.disabled=false;
      pending=false;
    });
  }
  window.NS360_LIBRARY_NATIVE={render};
})();