"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/my-project.github.io/index.html","cbe1fa27e468b584fd08a060eb50ab04"],["/my-project.github.io/static/css/main.f76f53e0.css","0f286e7a6e8a2e94c1b9075ce7c2ee21"],["/my-project.github.io/static/js/main.275ee520.js","2297bb2303e355d927e7da9434c1f2c5"],["/my-project.github.io/static/media/ACaslonPro-Regular.07c51e08.otf","07c51e088dd888466d2688c5658a6d33"],["/my-project.github.io/static/media/Springville-Regular3.47a715e6.otf","47a715e624d7411ee8969fe1712d19b1"],["/my-project.github.io/static/media/hero_1.55315669.jpg","55315669889d534cf727c96746169923"],["/my-project.github.io/static/media/hero_2.e29404d6.jpg","e29404d633164e2dded8bc4972de6ff8"],["/my-project.github.io/static/media/hero_3.dafd78d8.jpg","dafd78d84a1c1bd6449b99bc4f1dc24f"],["/my-project.github.io/static/media/masonry_1.03a7df6e.jpg","03a7df6e67ffb1dd7939ae306d9d6e4b"],["/my-project.github.io/static/media/masonry_2.bb4831ab.jpg","bb4831ab6bed7c12f6a4719608d261fe"],["/my-project.github.io/static/media/masonry_3.70f8e497.jpg","70f8e4972c3309a21049cb0461c95341"],["/my-project.github.io/static/media/masonry_4.41da40c8.jpg","41da40c8707c265137acc0568ca7a664"],["/my-project.github.io/static/media/masonry_5.4daefa17.jpg","4daefa1735e6f51289761bc9a8cc8ffd"],["/my-project.github.io/static/media/masonry_6.6ee6a63d.jpg","6ee6a63de7d58eea932d0b9fad0360c3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,r,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,t){var r=new URL(e);return r.hash="",r.search=r.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),r.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,r,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(r){if(!t.has(r)){var a=new Request(r,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+r+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(r,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(r){return Promise.all(r.map(function(r){if(!t.has(r.url))return e.delete(r)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,r=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,"index.html"),t=urlsToCacheKeys.has(r));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(r=new URL("/my-project.github.io/index.html",self.location).toString(),t=urlsToCacheKeys.has(r)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});