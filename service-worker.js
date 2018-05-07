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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "edcd98644eb4fb79abe149761ecb0c0f"
  },
  {
    "url": "assets/css/1.styles.9b6c593c.css",
    "revision": "bf4c379c41a63a4d8273c6e14959d0e7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.13e4aef7.js",
    "revision": "9a66b0b82dff81a1106ed487dd4252a6"
  },
  {
    "url": "assets/js/app.699b52cd.js",
    "revision": "283f4f7c94804b7ba5f45062a7b30109"
  },
  {
    "url": "index.html",
    "revision": "018437b2cb5ee2be214821cfe616f97e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
