const CACHE_NAME = "mi-app-cache-v1";
const URLS_A_CACHEAR = [
    "/",
    "index.html",
    "Registro.html",
    "/JAVASCRIPT/Registro.js",
    "sw.js"
];

// Instalación y almacenamiento en caché de archivos estáticos
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(URLS_A_CACHEAR);
        })
    );
    self.skipWaiting();
});

// Activación del SW y limpieza de cachés antiguas
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            );
        })
    );
    self.clients.claim();
});

// Intercepción de solicitudes y respuesta desde la caché o red
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
