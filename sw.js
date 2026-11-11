const CACHE='daily-check-v26';
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(['./','./index.html?v=26','./processing.html?v=26','./utility.html?v=26','./styles.css?v=26','./home.css?v=26','./utility.css?v=26','./processing.js?v=26','./utility.js?v=26','./utility-data.js?v=26','./manifest.webmanifest','./prima-top-boga.png'])).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>event.respondWith(caches.open(CACHE).then(cache=>cache.match(event.request,{ignoreSearch:true})).then(cached=>cached||fetch(event.request))));
