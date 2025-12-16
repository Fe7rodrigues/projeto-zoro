const CACHE_NAME = 'pro-gym-v1.5-idb'; // NOME ATUALIZADO PARA FORÇAR REFRESH
const ASSETS = [
    './',
    './index.html',
    './css/style.css',
    './js/script.js',
    './assets/img/icon.png',
    './assets/img/logo.png',
    'https://cdn.tailwindcss.com',
    'https://unpkg.com/lucide@latest'
];

self.addEventListener('install', (e) => {
    self.skipWaiting(); 
    e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key); // Limpa o cache antigo (v1.2)
                    }
                })
            );
        })
    );
    return self.clients.claim(); 
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => res || fetch(e.request))
    );
});