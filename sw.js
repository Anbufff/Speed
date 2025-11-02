const CACHE_NAME = 'video-screenshot-v1';
const urlsToCache = [
  './', 
  './index.html', // உங்கள் HTML கோப்பின் பெயரை உறுதிப்படுத்தவும்
  './manifest.webmanifest',
  'https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Montserrat:wght@400;700&display=swap',
  './lib/jszip.min.js',
  './icons/icon-192.png', 
  // Cache செய்யப்பட வேண்டிய பிற கோப்புகளையும் இங்கு சேர்க்கவும்
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
