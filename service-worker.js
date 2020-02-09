var cacheName = 'v1';
var cacheFiles = [
    '../Coursework2/',
    '../Coursework2/enteruser',
    '../Coursework2/app.js ',
    '../Coursework2/service-worker.js',
    '../Coursework2/manifest.json',
    '../Coursework2/search.html',
    '../Coursework2/node.js',
    '../Coursework2/sign_up.html',
    '../Coursework2/user_success.html'
]


self.addEventListener('fetch', function(e){
    e.respondWith(
        caches.match(e.request).then(cacheRes => {
            return cacheRes || fetch(e.request);
        })
    );
    // console.log("[ServiceWorker] Fetching", e.request.url);

    // e.respondWith(
    //     caches.match(e.request).then(function(response) {
    //         if ( response) {
    //             console.log("[ServiceWorker] Found in cache", e.request.url);
    //             return response;
    //         }

    //         return fetch(e.request);
    //     })
    // )
});