// const VERSION = 'v1';
// function log(message) {
//     console.log(VERSION, message);
// }
// log('Installing Service Worker')


self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          return response; // Data is in the cache, return it
        }
  
        // Data is not in the cache, fetch it from Firestore and store it in the cache
        return fetch(event.request).then(function(networkResponse) {
          return caches.open('firestore-cache').then(function(cache) {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  });
  