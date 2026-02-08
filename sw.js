const cacheName = 'kerupuk-v1';
const assets = [
  './',
  './index.html',
  './manifest.json'
];

// Pasang Cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// Ambil data dari cache kalo offline
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
