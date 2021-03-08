const cacheName = 'cache_v1';
const urlList = ['/main.min.js', '/vendor.min.js', '/sprite.svg', '/'];

/**
 * Привязать событие.
 * @param {*} el Елемент.
 * @param {*} event Событие.
 * @param {*} handler Обработчик.
 */
function attachEvent(el, event, handler) {
    el.removeEventListener(event, handler);
    el.addEventListener(event, handler);
}

attachEvent(self, 'install', onInstall);
attachEvent(self, 'fetch', onFetch);

/**
 * Обработать установку сервис-воркера.
 * @param {*} e Событие
 */
function onInstall(e) {
    caches.open(cacheName).then(function (cache) {
        cache.addAll(urlList);
    });
}

/**
 * Обработать отправку запроса.
 * @param {*} event Событие
 */
function onFetch(event) {
    event.respondWith(
        new Promise(function (resolve) {
            fetch(event.request)
                .then(function (response) {
                    const responseClone = response.clone();

                    caches.open(cacheName).then(function (cache) {
                        cache.put(event.request, responseClone);
                    });

                    resolve(response);
                })
                .catch(function (e) {
                    caches.match(event.request).then(function (response) {
                        if (response) {
                            resolve(response);
                        }

                        resolve(caches.match('/'));
                    });
                });
        })
    );
}
