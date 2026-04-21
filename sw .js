// ⬇ Güncelleme yaparken bu versiyonu değiştirin
const CACHE_VERSION = '2026-04-21-v6';
const CACHE_NAME = 'eskimez-yazi-' + CACHE_VERSION;
const SCOPE_PREFIX = '/Ekimez-Yaz-/';

// İlk kurulumda önbelleğe alınacak tüm dosyalar
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

// INSTALL: tüm dosyaları önbelleğe al
self.addEventListener('install', event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      // cache.addAll bir hata durumunda tüm işlemi iptal eder — tek tek ekleyelim ki dirençli olsun
      await Promise.all(STATIC_ASSETS.map(async url => {
        try {
          const req = new Request(url, { cache: 'reload' });
          const res = await fetch(req);
          if (res && res.ok) await cache.put(url, res);
        } catch (e) {
          // tek bir dosya başarısız olursa diğerleri yüklenmeye devam eder
        }
      }));
      await self.skipWaiting();
    })()
  );
});

// ACTIVATE: eski önbellekleri temizle, hemen devral
self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      const oldCaches = keys.filter(k => k !== CACHE_NAME && k.startsWith('eskimez-yazi-'));
      const isUpdate = oldCaches.length > 0;
      await Promise.all(oldCaches.map(k => caches.delete(k)));

      // Navigation Preload'ı etkinleştir (hızlı açılış için)
      if ('navigationPreload' in self.registration) {
        try { await self.registration.navigationPreload.enable(); } catch (e) {}
      }

      await self.clients.claim();

      if (isUpdate) {
        const clients = await self.clients.matchAll({ includeUncontrolled: true, type: 'window' });
        clients.forEach(c => c.postMessage({ type: 'SW_UPDATED', version: CACHE_VERSION }));
      }
    })()
  );
});

// FETCH: cache-first, internet kopsa da çalışsın
self.addEventListener('fetch', event => {
  const req = event.request;

  // GET dışını bypass et
  if (req.method !== 'GET') return;
  // Farklı origin (CDN vb.) isteklerini bypass et
  if (!req.url.startsWith(self.location.origin)) return;

  event.respondWith((async () => {
    // 1. Önce cache'e bak
    const cached = await caches.match(req, { ignoreSearch: true });
    if (cached) return cached;

    // 2. Navigation ise index.html'i fallback olarak hazır tut
    const isNavigate = req.mode === 'navigate' || req.destination === 'document';

    // 3. Cache yok → network
    try {
      const res = await fetch(req);
      if (res && res.status === 200 && res.type !== 'opaque') {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, clone)).catch(() => {});
      }
      return res;
    } catch (e) {
      // Network de yok
      if (isNavigate) {
        // index.html'e düş
        const fallback = await caches.match(SCOPE_PREFIX + 'index.html');
        if (fallback) return fallback;
        const root = await caches.match(SCOPE_PREFIX);
        if (root) return root;
      }
      // Son çare: 503
      return new Response('', { status: 503, statusText: 'Offline' });
    }
  })());
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_VERSION });
  }
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
