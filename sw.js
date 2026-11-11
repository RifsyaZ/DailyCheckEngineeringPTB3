const CACHE='daily-check-v25';
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(['./','./index.html?v=25','./processing.html?v=25','./utility.html?v=25','./styles.css?v=25','./home.css?v=25','./utility.css?v=25','./processing.js?v=25','./utility.js?v=25','./utility-data.js?v=25','./manifest.webmanifest','./prima-top-boga.png'])).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>event.respondWith(caches.open(CACHE).then(cache=>cache.match(event.request,{ignoreSearch:true})).then(cached=>cached||fetch(event.request))));
