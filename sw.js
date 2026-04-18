// ⬇ Güncelleme yaparken bu versiyonu değiştirin
const CACHE_VERSION = '2026-04-18-v2';
const CACHE_NAME = 'eskimez-yazi-' + CACHE_VERSION;
const STATIC_ASSETS = [
  '/Ekimez-Yaz-/manifest.json',
  '/Ekimez-Yaz-/icon-192.png',
  '/Ekimez-Yaz-/icon-512.png',
  '/Ekimez-Yaz-/words.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(c => c.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      const oldCaches = keys.filter(k => k !== CACHE_NAME && k.startsWith('eskimez-yazi-'));
      const isUpdate = oldCaches.length > 0;
      await Promise.all(oldCaches.map(k => caches.delete(k)));
      await self.clients.claim();
      if (isUpdate) {
        const clients = await self.clients.matchAll({ includeUncontrolled: true, type: 'window' });
        clients.forEach(client => client.postMessage({ type: 'SW_UPDATED', version: CACHE_VERSION }));
      }
    })()
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const isHTML = url.pathname.endsWith('.html') || url.pathname.endsWith('/');
  if (isHTML) {
    event.respondWith(
      fetch(event.request)
        .then(res => { caches.open(CACHE_NAME).then(c => c.put(event.request, res.clone())); return res; })
        .catch(() => caches.match(event.request))
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(cached =>
        cached || fetch(event.request).then(res => {
          caches.open(CACHE_NAME).then(c => c.put(event.request, res.clone()));
          return res;
        })
      )
    );
  }
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_VERSION });
  }
});
