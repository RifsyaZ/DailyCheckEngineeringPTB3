const CACHE='daily-check-v27';
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(['./','./index.html?v=27','./processing.html?v=27','./utility.html?v=27','./styles.css?v=27','./home.css?v=27','./utility.css?v=27','./processing.js?v=27','./utility.js?v=27','./utility-data.js?v=27','./manifest.webmanifest','./prima-top-boga.png'])).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>event.respondWith(caches.open(CACHE).then(cache=>cache.match(event.request,{ignoreSearch:true})).then(cached=>cached||fetch(event.request))));
