const CACHE_NAME = "budget"
const urlsToCache = ['/static/js/bundle.js',
    '/static/js/vendors-main.chunk.js',
    '/static/js/main.chunk.js',
    '/manifest.json',
    '/logo512.png',
    '/logo192.png',
    '/favicon.ico',
    '/default.png',
    '/',
    '/fonts.gstatic.com/',
    '/fonts.googleapis.com/',];

const self = this;

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    )
});
self.addEventListener('fetch', (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((response) => {
                return response || fetch(event.request).then((response) => {
                    caches.put(event.request, response.clone());
                    return response
                })

            })
        )
    }

});
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);
    event.waitUntil(caches.keys().then((cacheNames) =>
        Promise.all(cacheNames.map((cacheName) => {
            if (!cacheWhitelist.includes(cacheName)) {
                return caches.delete(cacheName)
            }
        }))))
});