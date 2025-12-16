const CACHE_NAME = 'pro-gym-v1.2'; // Versão atualizada
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
    // Força o SW a ativar imediatamente após instalar, sem esperar o usuário fechar a aba
    self.skipWaiting(); 
    e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('activate', (e) => {
    // Limpeza automática de caches antigos para evitar conflitos com versões anteriores
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    // Torna o SW ativo na página imediatamente
    return self.clients.claim(); 
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => res || fetch(e.request))
    );
});