const CACHE_NAME = 'mws-restaurant-stage-cache-001';

// List of files stored in cache

let filesToCache = [
    '/',
    '/styles/main.css',
    '/images/logo.png',
    '/scripts/main.js'
];

self.addEventListener('install', function (evt) {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(filesToCache);
        }).catch(function (err) {
            
        })
    );
});

self.addEventListener('fetch', function (evt) {
    // Snooze logs...
    // console.log('Start ' + CACHE_NAME + '/n' + evt.request.url);
    evt.respondWith(
        // Firstly, send request..
        fetch(evt.request).catch(function () {
            // When request failed, return file from cache...
            return caches.match(evt.request);
        })
    );
});