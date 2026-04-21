// ⬇ Güncelleme yaparken bu versiyonu değiştirin
const CACHE_VERSION = '2026-04-21-v5';
const CACHE_NAME = 'eskimez-yazi-' + CACHE_VERSION;
const SCOPE_PREFIX = '/Ekimez-Yaz-/';

const STATIC_ASSETS = [
  SCOPE_PREFIX,
  SCOPE_PREFIX + 'index.html',
  SCOPE_PREFIX + 'words.js',
  SCOPE_PREFIX + 'yer_isimleri.js',
  SCOPE_PREFIX + 'manifest.json',
  SCOPE_PREFIX + 'icon-192.png',
  SCOPE_PREFIX + 'icon-512.png',
  SCOPE_PREFIX + 'ScheherazadeRegOT.ttf',
  SCOPE_PREFIX + 'maArifRika-Regular__1_.otf',
  SCOPE_PREFIX + 'alfont_com_Sultan-Ruqah-Loop-1.ttf',
  SCOPE_PREFIX + 'Ahruf_Rika.ttf',
  SCOPE_PREFIX + 'alfont_com_AlFont_com_hawi_t_Diwany-1.ttf',
  SCOPE_PREFIX + 'BFantezy.ttf',
];

// INSTALL: tüm dosyaları önbelleğe al (cache:'reload' ile her zaman tazeden)
self.addEventListener('install', event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await Promise.all(STATIC_ASSETS.map(async url => {
        try {
          const res = await fetch(url, { cache: 'reload' });
          if (res && res.ok) await cache.put(url, res);
        } catch (e) {}
      }));
      // Hemen devreye gir — eski SW'yi bekleme
      await self.skipWaiting();
    })()
  );
});

// ACTIVATE: eski önbellekleri temizle, sayfaları devral, güncelleme bildirimi gönder
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
        clients.forEach(c => c.postMessage({ type: 'SW_UPDATED', version: CACHE_VERSION }));
      }
    })()
  );
});

// FETCH: cache-first — internet olmasa da çalışır
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  if (!req.url.startsWith(self.location.origin)) return;

  event.respondWith((async () => {
    const cached = await caches.match(req, { ignoreSearch: true });
    if (cached) return cached;

    const isNavigate = req.mode === 'navigate' || req.destination === 'document';
    try {
      const res = await fetch(req);
      if (res && res.status === 200 && res.type !== 'opaque') {
        caches.open(CACHE_NAME).then(c => c.put(req, res.clone())).catch(() => {});
      }
      return res;
    } catch (e) {
      if (isNavigate) {
        return (await caches.match(SCOPE_PREFIX + 'index.html'))
            || (await caches.match(SCOPE_PREFIX))
            || new Response('', { status: 503 });
      }
      return new Response('', { status: 503 });
    }
  })());
});

self.addEventListener('message', event => {
  if (event.data?.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_VERSION });
  }
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
