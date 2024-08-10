const cacheName = 'cache_v1';
const urlList = ['/main.min.js', '/vendor.min.js', '/sprite.svg', '/'];

function attachEvent(el, event, handler) {
  el.removeEventListener(event, handler);
  el.addEventListener(event, handler);
}

function onInstall(e) {
  caches.open(cacheName).then(function (cache) {
    cache.addAll(urlList);
  });
}

function cacheLite(request) {
  return new Promise(function (resolve) {
    fetch(request)
      .then(function (response) {
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
  const {request} = event;
  const url = new URL(request.url);

  if (url.origin === location.origin) {
    event.respondWith(cacheLite(request));
  }
}

attachEvent(self, 'install', onInstall);
attachEvent(self, 'fetch', onFetch);
