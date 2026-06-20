const cacheName = 'cache_v2';
const urlList = ['/', '/sprite.svg'];

function attachEvent(el, event, handler) {
  el.removeEventListener(event, handler);
  el.addEventListener(event, handler);
}

function onInstall(event) {
  event.waitUntil(
    caches
      .open(cacheName)
      .then(function (cache) {
        return cache.addAll(urlList);
      })
      .then(function () {
        return self.skipWaiting();
      }),
  );
}

function onActivate(event) {
  event.waitUntil(
    caches
      .keys()
      .then(function (cacheNames) {
        return Promise.all(
          cacheNames.map(function (cacheKey) {
            if (cacheKey !== cacheName) {
              return caches.delete(cacheKey);
            }

            return Promise.resolve(false);
          }),
        );
      })
      .then(function () {
        return self.clients.claim();
      }),
  );
}

function cacheLite(request) {
  return new Promise(function (resolve) {
    fetch(request)
      .then(function (response) {
        if (!response || !response.ok) {
          resolve(response);

          return;
        }

        caches.open(cacheName).then(function (cache) {
          cache.put(request, response);
        });

        resolve(response.clone());
      })
      .catch(function () {
        caches.match(request).then(function (response) {
          if (response) {
            resolve(response);
          } else {
            resolve(caches.match('/'));
          }
        });
      });
  });
}

function onFetch(event) {
  const { request } = event;
  const url = new URL(request.url);

  if ('GET' !== request.method) {
    return;
  }

  if (url.origin === location.origin && '/sw.js' !== url.pathname) {
    event.respondWith(cacheLite(request));
  }
}

attachEvent(self, 'install', onInstall);
attachEvent(self, 'activate', onActivate);
attachEvent(self, 'fetch', onFetch);
