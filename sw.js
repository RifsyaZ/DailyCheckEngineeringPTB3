const CACHE='daily-check-v24';
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(['./','./index.html?v=24','./processing.html?v=24','./utility.html?v=24','./styles.css?v=24','./home.css?v=24','./utility.css?v=24','./processing.js?v=24','./utility.js?v=24','./utility-data.js?v=24','./manifest.webmanifest','./prima-top-boga.png'])).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>event.respondWith(caches.open(CACHE).then(cache=>cache.match(event.request,{ignoreSearch:true})).then(cached=>cached||fetch(event.request))));
