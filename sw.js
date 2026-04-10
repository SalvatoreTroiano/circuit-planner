// Circuit Planner Service Worker
// Versione cache — incrementa per forzare l'aggiornamento
const CACHE_NAME = 'circuit-planner-v1';

// File da mettere in cache per l'uso offline
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  // CDN libraries — vengono cachate al primo caricamento
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'
];

// ── INSTALL: precache degli asset principali ──
self.addEventListener('install', event => {
  console.log('[SW] Installing Circuit Planner Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Cache locale garantita
      return cache.addAll(['./', './index.html', './manifest.json'])
        .then(() => {
          // CDN in best-effort (non blocca l'installazione)
          return Promise.allSettled([
            cache.add('https://cdn.tailwindcss.com'),
            cache.add('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js')
          ]);
        });
    }).then(() => {
      console.log('[SW] Installation complete.');
      // Non chiamiamo skipWaiting() qui: aspettiamo SKIP_WAITING dall'app
      // così il pulsante "Aggiorna App" può essere mostrato all'utente
    })
  );
});

// ── ACTIVATE: pulizia delle cache vecchie ──
self.addEventListener('activate', event => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// ── FETCH: strategia Cache First, poi Network ──
self.addEventListener('fetch', event => {
  // Solo richieste GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Serve dalla cache, aggiorna in background
        const fetchPromise = fetch(event.request)
          .then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              const cloned = networkResponse.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(event.request, cloned));
            }
            return networkResponse;
          })
          .catch(() => cachedResponse);

        return cachedResponse; // Risposta immediata dalla cache
      }

      // Non in cache: fetch dalla rete
      return fetch(event.request)
        .then(networkResponse => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
            return networkResponse;
          }
          const cloned = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, cloned));
          return networkResponse;
        })
        .catch(() => {
          // Offline fallback per navigazione
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
    })
  );
});

// ── MESSAGE: forza aggiornamento da UI ──
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
