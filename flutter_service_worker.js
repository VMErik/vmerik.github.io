'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5f4ca5579c62fd8d565f52917624aee3",
"assets/AssetManifest.bin.json": "21bfd09eae734918ac56361053fd7988",
"assets/AssetManifest.json": "0e8f894b82d11c1bd4e366c59966fbcd",
"assets/assets/img/profile.jpg": "47288e08e3448b656d1147c207150cbf",
"assets/assets/projects/airbnb.png": "4b53dfcc5483c9022b199ad2194a5779",
"assets/assets/projects/batata.png": "0937d656883bd3e1face4c88ede1f85e",
"assets/assets/projects/blog.png": "5b7bb56869fe9e037ba431d942cc936b",
"assets/assets/projects/card-component.png": "7742826617968fbc3402da90af730c85",
"assets/assets/projects/certeza-tributaria.png": "61458b6f8279ac782525487c2c1d4a6f",
"assets/assets/projects/finance-app.png": "fb442f5290dfeef2f2813ecfb7b75f48",
"assets/assets/projects/groceries-app.png": "57043c4b99a13d70ff69c93c4af2a0a8",
"assets/assets/projects/habit-tracker.png": "c8eb1ca4711153ad293493032db0d8c2",
"assets/assets/projects/landing-page.png": "58f4924da3c67ae6af02803832623563",
"assets/assets/projects/movies-app.png": "f49e3271be15241684385bee53594125",
"assets/assets/projects/netflix.png": "777e20d9b022171c37cc31347619455b",
"assets/assets/projects/nft-component.png": "66ababf674d614827e45b3677065758b",
"assets/assets/projects/product-preview.png": "0d51cc08bbf6829af7bc474e55912860",
"assets/assets/projects/qr-card.png": "3cd2d1ad6fbe99909e3cfd0bbd6af2de",
"assets/assets/projects/raiting-component.png": "569a1337e71e9dfbbd34191a378bfbdd",
"assets/assets/projects/scecle-store.png": "72efb41f46dad9a055fd17b0722ee0a5",
"assets/assets/projects/test-result.png": "ac9dd13ef43530680264e7c25e0c9bdd",
"assets/assets/projects/travel-app.png": "25e3f1eb1ddef5405a588e42d75af9a6",
"assets/assets/projects/wallet-app.png": "b2797f53973aeb8b5318cd56c7560066",
"assets/assets/stack/angular-icon.svg": "48ae79d99d69739a8022593da1ece32f",
"assets/assets/stack/csharp-icon.svg": "6ade407eb3fa356e5507cd9e585c4aa1",
"assets/assets/stack/css-icon.svg": "09e4ec27756a18c936f92f4e2957e822",
"assets/assets/stack/docker-icon.svg": "9e71f02e49e9d3925a22264f66e49952",
"assets/assets/stack/express-icon.svg": "c6bab64b183f96aa47077fd3db37afd0",
"assets/assets/stack/flutter-icon.svg": "749737f954a8acaae1b3d389b3fc857f",
"assets/assets/stack/github.svg": "86913818da4268844e2786ce253672af",
"assets/assets/stack/gmail.svg": "01fa57e5f675bf7020de0d9ad9d619f1",
"assets/assets/stack/html5-icon.svg": "a2d427be56a5448f2788d0e0f68aba0c",
"assets/assets/stack/instagram.svg": "73a21058cf6e54d04e445860824c53a8",
"assets/assets/stack/javascript-icon.svg": "891a71b9a98f1d58491e1b06c4d356a2",
"assets/assets/stack/linkedin.svg": "9419e9f024acae4e057ac247710e7e2f",
"assets/assets/stack/mongo-icon.svg": "c2a864c96dbfc449ec45dd7ac4438628",
"assets/assets/stack/nest-icon.svg": "5c4abe6acda0c2da09285cf03ec25ab0",
"assets/assets/stack/netcore-icon.svg": "dc7ae52d5edfce84dd8fa8a1b0c4c2e2",
"assets/assets/stack/nodejs-icon.svg": "b337a2fb0b1289e6757e632dc766ff6b",
"assets/assets/stack/react-icon.svg": "c3fbd71b12b726e00eec2b59f3c76786",
"assets/assets/stack/tiktok.svg": "c6b44692c31ecf432ecdab20b85d0c45",
"assets/assets/stack/twitter.svg": "f893bc26d86272a2a2dc3918b3ca05b0",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "b9139f8827e0a1e405cb419b40526929",
"assets/NOTICES": "02a2ca8b06a3b09ab4b6c2216a4e1f49",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "f146dc373367d01dc499c85e8fe0bb64",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4adf9d7345627a46b933f8ae98ba3d48",
"/": "4adf9d7345627a46b933f8ae98ba3d48",
"main.dart.js": "f01b2035c0882cb335ad6cbceb93ae3c",
"manifest.json": "ba1190b295ca47a3c63ea649483771ba",
"version.json": "fafadb6335198003a085af673ae764d2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
