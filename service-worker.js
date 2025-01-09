const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
    '/frick/',  // Correct start URL for your PWA
    '/frick/index.html',
    '/frick/index.css',
    '/frick/qr-code.png',
    '/frick/student.png',
    'https://code.jquery.com/jquery-3.6.0.min.js',
    'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap',
    'https://fonts.gstatic.com'
];

// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetch event
self.addEventListener('fetch', event => {
    const requestUrl = new URL(event.request.url);
    if (requestUrl.pathname.startsWith('/frick/')) {
        event.respondWith(
            caches.match(event.request).then(response => {
                return response || fetch(event.request);
            })
        );
    } else {
        const modifiedUrl = new URL('/frick' + requestUrl.pathname, event.request.url);
        event.respondWith(
            caches.match(modifiedUrl).then(response => {
                return response || fetch(modifiedUrl);
            })
        );
    }
});

// Activate event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});
