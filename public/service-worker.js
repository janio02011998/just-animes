const CACHE_NAME = "version-01";
const urlsToCache = ['index.html', 'offline.html'];
var ASSETS = ['/icons/youareoffline.html'];

const self = this;

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(urlsToCache);
            })
    )
});

self.oninstall = function (evt) {
  evt.waitUntil(caches.open('offline-cache-name').then(function (cache) {
    return cache.addAll(ASSETS);
  }))
};

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(() => {
        return fetch(event.request)
          .catch(() => caches.match('offline.html'));
      })
  )
});

self.addEventListener('activate', (event) => {

    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cachesNames) => Promise.all(
            cachesNames.map((cacheName) => {
                if (!cacheWhiteList.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
    )
});