"use strict";var precacheConfig=[["/pbtc7-project1/index.html","379bdc5425af559498bcefaddeae9a6a"],["/pbtc7-project1/static/css/main.c3e1b639.css","1d4cf775f4c8c279769df544366149d5"],["/pbtc7-project1/static/js/main.b272916c.js","c2e4773d906e98ecd7bfa41d04e0b392"],["/pbtc7-project1/static/media/bg2.cee0a6fc.png","cee0a6fca0cfc7c906eb24ea47912447"],["/pbtc7-project1/static/media/click.97793a15.wav","97793a15e18da37ca200181620511610"],["/pbtc7-project1/static/media/draw.9f3e7faf.wav","9f3e7faf2a25dac2b67b027a59d86d41"],["/pbtc7-project1/static/media/drop.cda24e90.wav","cda24e9048eebf14cf00c2923c192a67"],["/pbtc7-project1/static/media/fire_burning.82fa2e95.wav","82fa2e95104743222f39c7d9da6be8d2"],["/pbtc7-project1/static/media/grass_rustling.e17a0709.mp3","e17a0709fdbeabb0dd4dda0b82bdc411"],["/pbtc7-project1/static/media/growth_help.038681b4.png","038681b46cd38a7779030790f81d88ca"],["/pbtc7-project1/static/media/ice_effect.95e83315.mp3","95e83315af9319f2ea70d6d432007fa6"],["/pbtc7-project1/static/media/ice_help.083f0ded.png","083f0dedc6a85632421e672932526e3f"],["/pbtc7-project1/static/media/question.493592b1.png","493592b12783af5d7003d1664027bcf8"],["/pbtc7-project1/static/media/thunder_cracking.afcdbf72.wav","afcdbf72097e306a79d3286812b86df7"],["/pbtc7-project1/static/media/win.8397272c.wav","8397272cb1bd4b8b3382a4e8268fe9ed"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/pbtc7-project1/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});