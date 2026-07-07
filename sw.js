/**
 * ChiaTech Summer Bootcamp - Service Worker
 * Cache-first app shell with safe network handling.
 * v1.1.0
 */

const CACHE_NAME = "bootcamp-v1.1.0";
const DATA_CACHE = "bootcamp-data-v1.0.1";
const ASSET_VERSION = "v=20260707-1";

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/styles.css?" + ASSET_VERSION,
  "./js/console-guard.js?" + ASSET_VERSION,
  "./js/curriculum-data.js?" + ASSET_VERSION,
  "./js/offline-db.js?" + ASSET_VERSION,
  "./js/sheet-api.js?" + ASSET_VERSION,
  "./js/pwa.js?" + ASSET_VERSION,
  "./js/app.js?" + ASSET_VERSION,
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./chiatech-logo.png",
  "./assets/hero.PNG",
  "./assets/jambwaecneconabteb.PNG"
];

const FONT_ORIGINS = ["fonts.googleapis.com", "fonts.gstatic.com"];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.allSettled(APP_SHELL.map(url => cache.add(url).catch(() => null)))
    )
  );
});

self.addEventListener("activate", event => {
  const currentCaches = [CACHE_NAME, DATA_CACHE];
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => !currentCaches.includes(key)).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const { request } = event;
  const url = new URL(request.url);

  if (!isHttpRequest(url)) return;

  if (url.pathname === "/api/portal" || url.pathname === "/.netlify/functions/portal-api") {
    event.respondWith(fetch(request));
    return;
  }

  if (FONT_ORIGINS.some(origin => url.hostname.includes(origin))) {
    event.respondWith(cacheFirst(request, true));
    return;
  }

  if (request.method === "GET" && url.origin === self.location.origin) {
    event.respondWith(cacheFirst(request, false));
  }
});

function cacheFirst(request, allowOpaque) {
  return caches.open(CACHE_NAME).then(cache =>
    cache.match(request).then(cached => {
      if (cached) {
        fetch(request)
          .then(response => safeCachePut(cache, request, response, allowOpaque))
          .catch(() => undefined);
        return cached;
      }

      return fetch(request)
        .then(response => {
          safeCachePut(cache, request, response, allowOpaque);
          return response;
        })
        .catch(() => request.mode === "navigate" ? cache.match("./index.html") : new Response("", { status: 503 }));
    })
  );
}

function isHttpRequest(url) {
  return url.protocol === "http:" || url.protocol === "https:";
}

function isCacheable(request, response, allowOpaque) {
  if (!request || !response || request.method !== "GET") return false;
  const url = new URL(request.url);
  if (!isHttpRequest(url)) return false;
  if (url.origin !== self.location.origin && !FONT_ORIGINS.some(origin => url.hostname.includes(origin))) return false;
  if (response.status === 200) return true;
  return allowOpaque && response.type === "opaque";
}

function safeCachePut(cache, request, response, allowOpaque) {
  if (!isCacheable(request, response, allowOpaque)) return Promise.resolve();
  return cache.put(request, response.clone()).catch(() => undefined);
}

self.addEventListener("sync", event => {
  if (event.tag === "bootcamp-outbox-sync") {
    event.waitUntil(notifyClientToFlush());
  }
});

self.addEventListener("online", () => notifyClientToFlush());

function notifyClientToFlush() {
  return self.clients.matchAll({ type: "window" }).then(clients => {
    clients.forEach(client => client.postMessage({ type: "BOOTCAMP_FLUSH_OUTBOX" }));
  });
}

self.addEventListener("message", event => {
  if (event.data && event.data.action === "skipWaiting") self.skipWaiting();
});
