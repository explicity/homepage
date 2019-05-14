/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/images/bg.jpg",
    "revision": "fffca7c84da292ce2f63ce5e652603ed"
  },
  {
    "url": "assets/images/logo.svg",
    "revision": "302739ba0bb2ea96af5f1dd2399aa9e3"
  },
  {
    "url": "assets/sounds/dracarys.mp3",
    "revision": "3f75c72147477ad91d6fdd8b5e6b6f17"
  },
  {
    "url": "assets/styles/styles.css",
    "revision": "bd34a95d694357e50e52f2025f9945b6"
  },
  {
    "url": "index.html",
    "revision": "288bcc91eda7db3ba74babbe92baa9e4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
