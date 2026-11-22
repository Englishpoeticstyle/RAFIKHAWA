// Learning Studio - offline service worker (v5)
// Pages and content files (index.html, db.js, i18n.js) check the network first,
// so every update reaches the children. Fonts, icons and pictures load from the
// saved copy, which keeps the site fast. The site still opens with no internet.

const VERSION = "v5";
const STATIC_CACHE = `studio-static-${VERSION}`;
const RUNTIME_CACHE = `studio-runtime-${VERSION}`;
const RUNTIME_MAX = 200; // keep the saved extras from growing forever

const CORE = ["./", "./index.html", "./db.js", "./i18n.js", "./manifest.json", "./icon.svg"];
// Files that change often: always try the network first.
const FRESH = new Set(["index.html", "db.js", "i18n.js"]);

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(STATIC_CACHE);
    // Save each file on its own, so one missing file cannot block the install.
    await Promise.allSettled(CORE.map(url => cache.add(url)));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keep = [STATIC_CACHE, RUNTIME_CACHE];
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => !keep.includes(k)).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener("message", event => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});

function isFresh(url) {
  if (url.origin !== self.location.origin) return false;
  const name = url.pathname.split("/").pop() || "index.html";
  return name === "" || FRESH.has(name);
}

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (!url.protocol.startsWith("http")) return;

  if (req.mode === "navigate") {
    event.respondWith(networkFirst(req, STATIC_CACHE, "./index.html"));
    return;
  }
  if (isFresh(url)) {
    event.respondWith(networkFirst(req, STATIC_CACHE));
    return;
  }
  event.respondWith(staleWhileRevalidate(req));
});

// Try the network. If it fails (offline), use the saved copy.
async function networkFirst(req, cacheName, fallbackUrl) {
  const cache = await caches.open(cacheName);
  try {
    const res = await fetch(req);
    if (res && res.ok) cache.put(req, res.clone()).catch(() => {});
    return res;
  } catch (err) {
    const hit = (await caches.match(req)) || (fallbackUrl && (await caches.match(fallbackUrl)));
    if (hit) return hit;
    throw err;
  }
}

// Answer at once from the saved copy, and refresh the copy in the background.
async function staleWhileRevalidate(req) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(req);
  const refresh = fetch(req)
    .then(res => {
      if (res && (res.ok || res.type === "opaque")) {
        cache.put(req, res.clone()).then(() => trim(cache, RUNTIME_MAX)).catch(() => {});
      }
      return res;
    })
    .catch(() => null);
  return cached || (await refresh) || Response.error();
}

async function trim(cache, max) {
  const keys = await cache.keys();
  if (keys.length <= max) return;
  await cache.delete(keys[0]);
  return trim(cache, max);
}
