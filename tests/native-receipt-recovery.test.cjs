'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const crypto=require('node:crypto').webcrypto;
const original=fs.readFileSync('library-native-form.js','utf8');
new vm.Script(original,{filename:'library-native-form.js'});
const injected=original.replace('  window.NS360_LIBRARY_NATIVE={render};', '  window.__test={parseReceipt,fetchReceipt,anonymousReceipt,verifyReceipt,readPending,rememberPending};\n  window.NS360_LIBRARY_NATIVE={render};');
const endpoint='https://script.google.com/macros/s/TEST_ENDPOINT/exec';
const token='v7-'+'a'.repeat(40);
const results=[];
function environment(options={}){
  const state={mode:options.mode||'saved',scriptMode:options.scriptMode||'network',posts:[],gets:[],grants:0};
  const store=options.store||new Map();
  const field=value=>({value,validation:'',setCustomValidity(message){this.validation=message;}});
  const form={isConnected:true,elements:{name:field(options.empty?'':'Test Reader'),phone:field(options.empty?'':'0000000000'),email:field(''),topic:field('ngo'),website:field('')},reportValidity(){return !this.elements.name.validation&&!this.elements.phone.validation&&!!this.elements.name.value&&!!this.elements.phone.value;},addEventListener(name,handler){this.handler=handler;}};
  const status={textContent:'',className:'',dataset:{}};
  const submit={textContent:'Submit',disabled:false};
  const host={innerHTML:'',querySelector(selector){return selector==='#ns-native-form'?form:selector==='#ns-native-submit'?submit:status;}};
  const win={};
  const context={window:win,URL,URLSearchParams,Uint8Array,crypto,AbortController,Date,console,
    sessionStorage:{getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v),removeItem:k=>store.delete(k)},
    setTimeout(fn,ms){const timer=setTimeout(fn,ms===800?0:ms);if(ms===30000)timer.unref();return timer;},clearTimeout,
    document:{createElement(){return {remove(){},crossOrigin:null,referrerPolicy:null};},head:{appendChild(script){state.lastScript=script;setImmediate(()=>{if(state.scriptMode==='saved'){win[new URL(script.src).searchParams.get('callback')]({ok:true});script.onload?.();}else script.onerror?.();});}}},
    fetch:async(url,init={})=>{
      if(init.method==='POST'){
        state.posts.push({id:init.body.get('requestId'),credentials:init.credentials});
        if(options.postThrows)throw new TypeError('Mock redirect failure');
        return {type:'opaque'};
      }
      const parsed=new URL(url);
      if(parsed.searchParams.get('action')!=='receipt')return {ok:false};
      state.gets.push({credentials:init.credentials,mode:init.mode,id:parsed.searchParams.get('id')});
      if(state.mode==='network')throw new TypeError('Mock network failure');
      if(state.mode==='slow')await new Promise(resolve=>setTimeout(resolve,3900));
      const callback=parsed.searchParams.get('callback');
      const body=state.mode==='malformed'?'<html>unavailable</html>':callback+'('+JSON.stringify({ok:state.mode!=='pending'})+');';
      return {ok:true,text:async()=>body};
    }
  };
  vm.runInNewContext(injected,context);
  function render(){win.NS360_LIBRARY_NATIVE.render(host,'/thu-vien/index.html',{endpoint,source:'test',onSuccess(){state.grants++;}});}
  function send(){return form.handler({preventDefault(){}});}
  return {state,store,context,win,form,status,submit,host,render,send};
}
async function waitFor(predicate){for(let i=0;i<200;i++){if(predicate())return;await new Promise(r=>setTimeout(r,5));}throw Error('Mock async action did not finish');}
async function test(name,fn){await fn();results.push({name,status:'PASS'});console.log('PASS '+name);}
(async()=>{
 await test('strict JSONP parsing rejects HTML, mismatched callback and non-boolean',async()=>{
   const e=environment(),p=e.win.__test.parseReceipt;
   assert.equal(p('CB({"ok":true});','CB').state,'saved');
   assert.equal(p('CB({"ok":false})','CB').state,'pending');
   for(const body of ['<html></html>','OTHER({"ok":true});','CB({"ok":"true"});','CB({"ok":true});alert(1)'])assert.throws(()=>p(body,'CB'));
 });
 await test('receipt fetch omits credentials and parses saved result',async()=>{
   const e=environment();assert.equal((await e.win.__test.fetchReceipt(endpoint,token,12000)).state,'saved');
   assert.equal(e.state.gets[0].credentials,'omit');assert.equal(e.state.gets[0].mode,'cors');
 });
 await test('script fallback is anonymous with no referrer',async()=>{
   const e=environment({scriptMode:'saved'});assert.equal((await e.win.__test.anonymousReceipt(endpoint,token,10000)).state,'saved');
   assert.equal(e.state.lastScript.crossOrigin,'anonymous');assert.equal(e.state.lastScript.referrerPolicy,'no-referrer');
 });
 await test('one POST grants access only after acknowledged saved receipt',async()=>{
   const e=environment();e.render();assert.equal(e.state.grants,0);await e.send();
   assert.equal(e.state.posts.length,1);assert.equal(e.state.grants,1);assert.equal(e.store.size,0);
 });
 await test('opaque POST plus unavailable receipt never grants access',async()=>{
   const e=environment({mode:'network'});e.render();await e.send();
   assert.equal(e.state.posts.length,1);assert.equal(e.state.grants,0);
   assert.equal(e.status.dataset.code,'RCP-NETWORK');assert.equal(e.submit.disabled,false);
   const pending=JSON.parse(e.store.get('ns360-library-pending-v7'));
   assert.deepEqual(Object.keys(pending).sort(),['createdAt','id']);
 });
 await test('check again verifies same ID without a second POST',async()=>{
   const e=environment({mode:'network'});e.render();await e.send();e.state.mode='saved';await e.send();
   assert.equal(e.state.posts.length,1);assert.equal(e.state.grants,1);
   assert(e.state.gets.every(g=>g.id===e.state.posts[0].id));
 });
 await test('reload resumes pending ID even with empty contact fields',async()=>{
   const store=new Map([['ns360-library-pending-v7',JSON.stringify({id:token,createdAt:Date.now()})]]);
   const e=environment({store,empty:true});e.render();await waitFor(()=>e.state.grants===1);
   assert.equal(e.state.posts.length,0);assert(e.state.gets.every(g=>g.id===token));assert.equal(store.size,0);
 });
 await test('valid not-saved reply permits retry with same id',async()=>{
   const e=environment({mode:'pending'});e.render();await e.send();assert.equal(e.state.grants,0);
   assert.equal(e.status.dataset.code,'RCP-PENDING');e.state.mode='saved';await e.send();
   assert.equal(e.state.posts.length,2);assert.equal(e.state.posts[0].id,e.state.posts[1].id);assert.equal(e.state.grants,1);
 });
 await test('3.9 second response exceeds old limit but is accepted',async()=>{
   const e=environment({mode:'slow'});assert.equal((await e.win.__test.fetchReceipt(endpoint,token,12000)).state,'saved');
 });
 await test('POST redirect failure still verifies saved server record',async()=>{
   const e=environment({postThrows:true});e.render();await e.send();assert.equal(e.state.posts.length,1);assert.equal(e.state.grants,1);
 });
 await test('invalid input does not POST and does not grant access',async()=>{
   const e=environment();e.render();e.form.elements.name.value='x';await e.send();assert.equal(e.state.posts.length,0);assert.equal(e.state.grants,0);
 });
 await test('expired pending token is not restored',async()=>{
   const store=new Map([['ns360-library-pending-v7',JSON.stringify({id:token,createdAt:Date.now()-25*60*60*1000})]]);
   const e=environment({store});assert.equal(e.win.__test.readPending(),null);
 });
 assert(!/getCurrentPosition|bigdatacloud|maps\/search/.test(original));
 fs.writeFileSync('RECEIPT_FIX_TESTS_20261114.json',JSON.stringify({mock_only:true,no_network_no_leads:true,tests:results},null,2)+'\n');
})().catch(error=>{console.error(error.stack);process.exitCode=1;});
