"""Apply a bounded repair to the inspected native form, retaining its existing markup."""
import hashlib
import re
from pathlib import Path

path = Path('library-native-form.js')
original = path.read_text(encoding='utf-8')
raw = original.encode('utf-8')
blob = hashlib.sha1(b'blob ' + str(len(raw)).encode() + b'\0' + raw).hexdigest()
assert blob == '7e90947afdd6d49cc75d1cb431d35a7c295eb0a7', 'Native source changed; stop and reconcile.'
start = original.index('  function oneReceipt(')
end = original.index('  function render(', start)
helpers = Path('automation/native-receipt-helpers.js').read_text(encoding='utf-8')
source = original[:start] + helpers + '\n' + original[end:]
source = source.replace('/* Nông Sản 360 native registration (staged; activated only after backend E2E test).', '/* Nông Sản 360 native registration: anonymous receipt and resumable confirmation.')
source = source.replace('    const requestId=newRequestId();', '    const storedRequest=readPending();\n    const requestId=storedRequest?storedRequest.id:newRequestId();')
source = source.replace("    const form=host.querySelector('#ns-native-form');", "    const form=host.querySelector('#ns-native-form');\n    form.noValidate=true; // Check-only retries must also work after reload with empty inputs.")
start = source.index('    let pending=false;')
end = source.index('\n  }\n  window.NS360_LIBRARY_NATIVE', start)
handler = r'''    let pending=false;
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
    if(storedRequest)run(true);'''
source = source[:start] + handler + source[end:]
assert 'const saved=await verifyReceipt' not in source
assert source.count('onSuccess();') == 1
assert "credentials:'omit'" in source and "script.crossOrigin='anonymous'" in source
assert not re.search(r'getCurrentPosition|bigdatacloud|maps/search', source)
path.write_text(source, encoding='utf-8')
index_path = Path('index.html')
index = index_path.read_text(encoding='utf-8')
old_links = index.count('href="pdf/')
for asset in ['library-native-form.js','library-gate.js','library-gate.css']:
    index,n = re.subn(re.escape(asset)+r'\?v=[^"<>]+',asset+'?v=20261114-receipt-fix-2',index)
    assert n == 1, 'Expected exactly one versioned reference for '+asset
assert old_links == index.count('href="pdf/') == 42
index_path.write_text(index, encoding='utf-8')
print('Prepared native receipt fix; tests must pass before commit.')
