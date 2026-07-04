/**
 * ChiaTech Summer Bootcamp — Service Worker
 * Cache-first strategy for offline PWA
 * v1.0.0
 */

const CACHE_NAME  = "bootcamp-v1.0.0";
const DATA_CACHE  = "bootcamp-data-v1.0.0";

/* All files that must be cached on install (app shell) */
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/styles.css",
  "./js/curriculum-data.js",
  "./js/offline-db.js",
  "./js/sheet-api.js",
  "./js/pwa.js",
  "./js/app.js",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/logo.png"
];

/* Google Fonts are cached on first fetch — list the families we use */
const FONT_ORIGINS = ["fonts.googleapis.com", "fonts.gstatic.com"];

/* ─── INSTALL: pre-cache app shell ─── */
self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.allSettled(
        APP_SHELL.map(url => cache.add(url).catch(() => null))
      );
    })
  );
});

/* ─── ACTIVATE: clear old caches ─── */
self.addEventListener("activate", event => {
  const CURRENT = [CACHE_NAME, DATA_CACHE];
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => !CURRENT.includes(k)).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/* ─── FETCH: route requests ─── */
self.addEventListener("fetch", event => {
  const { request } = event;
  const url = new URL(request.url);

  // Let Google Apps Script calls go straight to network (POST from sheet-api.js)
  if (url.hostname.includes("script.google.com")) {
    event.respondWith(
      fetch(request).catch(() =>
        new Response(JSON.stringify({ ok: false, message: "Offline — request queued." }), {
          headers: { "Content-Type": "application/json" }
        })
      )
    );
    return;
  }

  // Google Fonts — cache then network
  if (FONT_ORIGINS.some(o => url.hostname.includes(o))) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match(request).then(cached => {
          if (cached) return cached;
          return fetch(request).then(resp => {
            cache.put(request, resp.clone());
            return resp;
          }).catch(() => cached || new Response("", { status: 503 }));
        })
      )
    );
    return;
  }

  // App shell and static assets — cache-first
  if (request.method === "GET") {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match(request, { ignoreSearch: true }).then(cached => {
          if (cached) {
            // Refresh cache in background (stale-while-revalidate)
            fetch(request).then(resp => {
              if (resp && resp.status === 200) cache.put(request, resp.clone());
            }).catch(() => {});
            return cached;
          }
          return fetch(request).then(resp => {
            if (resp && resp.status === 200) cache.put(request, resp.clone());
            return resp;
          }).catch(() =>
            // Return cached index.html for navigation requests (SPA fallback)
            request.mode === "navigate"
              ? cache.match("./index.html")
              : new Response("", { status: 503 })
          );
        })
      )
    );
    return;
  }
});

/* ─── Background sync flush (when online) ─── */
self.addEventListener("sync", event => {
  if (event.tag === "bootcamp-outbox-sync") {
    event.waitUntil(notifyClientToFlush());
  }
});

self.addEventListener("online", () => notifyClientToFlush());

function notifyClientToFlush() {
  return self.clients.matchAll({ type: "window" }).then(clients => {
    clients.forEach(c => c.postMessage({ type: "BOOTCAMP_FLUSH_OUTBOX" }));
  });
}

/* ─── Skip waiting on demand ─── */
self.addEventListener("message", event => {
  if (event.data && event.data.action === "skipWaiting") self.skipWaiting();
});
