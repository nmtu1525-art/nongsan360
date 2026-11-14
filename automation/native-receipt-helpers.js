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
