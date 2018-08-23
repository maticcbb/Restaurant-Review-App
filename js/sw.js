const CACHE_NAME = 'mws-restaurant-cache-001';

// List of files stored in cache

var filesToCache = [
    './',
    './css/styles.css',
    './data/restaurants.json',
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpp',
    './img/10.jpg',
    './js/dbhelper.js',
    './js/restaurant_info.js',
    './js/main.js',
    './index.html',
    './restaurant.html',
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(staticCacheName)
        .then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        filesToCache.match(event.request, {
            ignoreSearch: true
        }).then(response => {
            return response || fetch(event.request);
        }).catch(err => console.log(err))
    );
});