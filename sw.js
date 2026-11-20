// 앱 설치용 최소 서비스워커: 아무것도 저장하지 않고 항상 인터넷에서 새로 받아옴
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request));
});
