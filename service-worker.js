self.addEventListener('install', function(event) {
  self.skipWaiting();
});
self.addEventListener('fetch', function(event) {
  // PWA básico: apenas responde normalmente
});