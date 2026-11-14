/* Nông Sản 360 native registration: anonymous receipt and resumable confirmation.
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

  // Receipts must use the same anonymous identity as the POST; no Google cookies.
  const PENDING_KEY='ns360-library-pending-v7';
  const PENDING_TTL=24*60*60*1000;
  function readPending(){
    try{
      const value=JSON.parse(sessionStorage.getItem(PENDING_KEY)||'null');
      return value && /^v7-[a-f0-9]{40}$/.test(value.id) &&
        Number.isFinite(value.createdAt) && value.createdAt<=Date.now() &&
        Date.now()-value.createdAt<PENDING_TTL ? value : null;
    }catch(_){return null;}
  }
  function rememberPending(id){
    try{sessionStorage.setItem(PENDING_KEY,JSON.stringify({id,createdAt:Date.now()}));}catch(_){}
  }
  function forgetPending(){try{sessionStorage.removeItem(PENDING_KEY);}catch(_){}}
  function receiptRequest(endpoint,requestId){
    const bytes=new Uint8Array(12);crypto.getRandomValues(bytes);
    const callback='NS360_RC_'+Array.from(bytes,v=>v.toString(16).padStart(2,'0')).join('');
    const url=new URL(endpoint);
    url.searchParams.set('action','receipt');url.searchParams.set('id',requestId);
    url.searchParams.set('callback',callback);
    return {url:url.href,callback};
  }
  function parseReceipt(text,callback){
    // Parse only the expected wrapper and a JSON boolean. Never eval remote code.
    const value=String(text).trim();const prefix=callback+'(';
    if(value.length>2048||!value.startsWith(prefix))throw new Error('RECEIPT_PROTOCOL');
    const suffix=value.endsWith(');')?2:value.endsWith(')')?1:0;
    if(!suffix)throw new Error('RECEIPT_PROTOCOL');
    const data=JSON.parse(value.slice(prefix.length,-suffix));
    if(!data||typeof data.ok!=='boolean')throw new Error('RECEIPT_PROTOCOL');
    return {state:data.ok?'saved':'pending',code:data.ok?'ACK':'PENDING'};
  }
  async function fetchReceipt(endpoint,requestId,timeoutMs){
    const req=receiptRequest(endpoint,requestId);const ctrl=new AbortController();
    const timer=setTimeout(()=>ctrl.abort(),timeoutMs);
    try{
      const res=await fetch(req.url,{method:'GET',mode:'cors',credentials:'omit',
        cache:'no-store',redirect:'follow',signal:ctrl.signal,referrerPolicy:'no-referrer'});
      if(!res.ok)return {state:'unreachable',code:'HTTP'};
      try{return parseReceipt(await res.text(),req.callback);}
      catch(_){return {state:'unreachable',code:'PROTOCOL'};}
    }catch(e){return {state:'unreachable',code:e.name==='AbortError'?'TIMEOUT':'NETWORK'};}
    finally{clearTimeout(timer);}
  }
  function anonymousReceipt(endpoint,requestId,timeoutMs){
    return new Promise(resolve=>{
      const req=receiptRequest(endpoint,requestId);const script=document.createElement('script');
      let complete=false,timer;
      const finish=result=>{
        if(complete)return;complete=true;clearTimeout(timer);script.remove();
        // Ignore late replies after cancellation instead of throwing globally.
        window[req.callback]=()=>{};
        setTimeout(()=>{try{delete window[req.callback];}catch(_){}},30000);
        resolve(result);
      };
      window[req.callback]=data=>finish(data&&typeof data.ok==='boolean'
        ?{state:data.ok?'saved':'pending',code:data.ok?'ACK':'PENDING'}
        :{state:'unreachable',code:'PROTOCOL'});
      script.crossOrigin='anonymous';script.referrerPolicy='no-referrer';
      script.onerror=()=>finish({state:'unreachable',code:'NETWORK'});
      script.onload=()=>{if(!complete)finish({state:'unreachable',code:'PROTOCOL'});};
      timer=setTimeout(()=>finish({state:'unreachable',code:'TIMEOUT'}),timeoutMs);
      script.src=req.url;document.head.appendChild(script);
    });
  }
  async function verifyReceipt(endpoint,requestId){
    const deadline=Date.now()+40000;let last={state:'unreachable',code:'NETWORK'};
    for(let attempt=0;attempt<3 && Date.now()<deadline;attempt++){
      last=await fetchReceipt(endpoint,requestId,Math.min(12000,Math.max(1,deadline-Date.now())));
      if(last.state==='saved')return last;
      if(last.state==='unreachable' && Date.now()<deadline){
        last=await anonymousReceipt(endpoint,requestId,Math.min(10000,Math.max(1,deadline-Date.now())));
        if(last.state==='saved')return last;
      }
      if(attempt<2 && Date.now()+800<deadline)await new Promise(resolve=>setTimeout(resolve,800));
    }
    return last;
  }

  function render(host,route,opts){
    const endpoint=opts.endpoint;
    const source=opts.source;
    const onSuccess=opts.onSuccess;
    const storedRequest=readPending();
    const requestId=storedRequest?storedRequest.id:newRequestId();
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
    form.noValidate=true; // Check-only retries must also work after reload with empty inputs.
    const submit=host.querySelector('#ns-native-submit');
    const status=host.querySelector('#ns-native-status');
    let pending=false;
    let sent=!!storedRequest;
    let completed=false;
    function show(message,code){
      status.textContent=message;
      status.className=code==='ACK'?'ns-native-success':code?'ns-native-failure':'';
      status.dataset.code=code||'';
    }
    async function checkAndFinish(){
      const receipt=await verifyReceipt(endpoint,requestId);
      if(form.isConnected===false)return;
      if(receipt.state==='saved'){
        completed=true;
        forgetPending();
        show('Đã đăng ký thành công. Đang mở thư viện…','ACK');
        onSuccess();
        return;
      }
      if(receipt.state==='pending'){
        sent=false;
        submit.textContent='Gửi lại đăng ký';
        show('Máy chủ chưa xác nhận có bản đăng ký này. Anh/chị kiểm tra thông tin rồi gửi lại.','RCP-PENDING');
      }else{
        sent=true;
        submit.textContent='Kiểm tra lại đăng ký';
        show('Chưa nhận được phản hồi xác nhận. Không cần nhập lại; bấm “Kiểm tra lại đăng ký”. Mã: RCP-'+receipt.code,'RCP-'+receipt.code);
      }
    }
    async function run(checkOnly){
      if(pending||completed)return;
      if(!checkOnly){
        const name=form.elements.name.value.trim();
        const phone=form.elements.phone.value.replace(/[\s.()\-]/g,'');
        form.elements.name.setCustomValidity(name.length<2?'Vui lòng nhập họ tên từ 2 ký tự.':'');
        form.elements.phone.setCustomValidity(/^(?:0[0-9]{9,10}|\+84[0-9]{9,10})$/.test(phone)?'':'Vui lòng kiểm tra số điện thoại.');
        if(!form.reportValidity())return;
      }
      pending=true;submit.disabled=true;
      show(checkOnly?'Đang kiểm tra đăng ký đã gửi…':'Đang ghi nhận đăng ký…','');
      try{
        if(!checkOnly){
          const geo=await optionalCity().catch(()=>({}));
          const values=new URLSearchParams({
            name:form.elements.name.value,phone:form.elements.phone.value,
            email:form.elements.email.value,topic:form.elements.topic.value,
            website:form.elements.website.value,privacyConsent:'true',source,requestId,
            city:geo.city||'',region:geo.region||'',country:geo.country||''
          });
          // Store only a random receipt token; never persist contact details.
          rememberPending(requestId);sent=true;
          const ctrl=new AbortController();const timer=setTimeout(()=>ctrl.abort(),20000);
          try{
            await fetch(endpoint,{method:'POST',mode:'no-cors',credentials:'omit',
              body:values,referrerPolicy:'no-referrer',redirect:'follow',signal:ctrl.signal});
          }catch(_){/* A response failure can happen after the server saved; verify before retrying. */}
          finally{clearTimeout(timer);}
        }
        await checkAndFinish();
      }catch(_){
        if(form.isConnected!==false){
          submit.textContent=sent?'Kiểm tra lại đăng ký':'Thử gửi lại';
          show('Chưa nhận được xác nhận. Bấm nút để kiểm tra lại; không cần tải lại trang. Mã: RCP-CLIENT','RCP-CLIENT');
        }
      }finally{
        pending=false;
        if(!completed)submit.disabled=false;
      }
    }
    form.addEventListener('submit',event=>{
      event.preventDefault();
      return run(sent);
    });
    // Resume saved-but-unconfirmed registration in this tab; never repost on reload.
    if(storedRequest)run(true);
  }
  window.NS360_LIBRARY_NATIVE={render};
})();