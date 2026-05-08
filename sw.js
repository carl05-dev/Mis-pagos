const CACHE_NAME = 'mis-pagos-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/app-icon.png'
];

// Instalar y guardar archivos en caché
self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Responder desde el caché cuando no hay red
self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((response) => {
      return response || fetch(evt.request);
    })
  );
});
