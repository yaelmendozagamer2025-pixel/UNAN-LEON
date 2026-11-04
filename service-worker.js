const CACHE='gestion-academica-v3-3.0.2';
const ASSETS=['./','./index.html','./styles-v3.css?v=3.0.2','./app-v3.js?v=3.0.2','./assets/crest_unan.png','./manifest.webmanifest'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('gestion-academica-v3-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
  event.respondWith(fetch(event.request).then(resp=>{
    if(resp.ok){const clone=resp.clone();event.waitUntil(caches.open(CACHE).then(c=>c.put(event.request,clone)));}
    return resp;
  }).catch(async()=>{
    const stored=await caches.match(event.request);
    if(stored)return stored;
    // Solo las navegaciones pueden recibir la portada como alternativa offline.
    if(event.request.mode==='navigate')return caches.match('./index.html');
    return Response.error();
  }));
});
