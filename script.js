AOS.init();
document.addEventListener('aos:in', function(e) {
  if ((e.detail && e.detail.id === 'logo-dex') || (e.target && e.target.id === 'logo-dex')) {
    document.getElementById('logo-dex').classList.add('pulse');
  }
});
window.addEventListener('scroll', function() {
    const arrow = document.querySelector('.arrow-down');
    if (window.scrollY > 10) {
      arrow.style.opacity = '1';
      arrow.style.pointerEvents = 'auto';
    } else {
      arrow.style.opacity = '0';
      arrow.style.pointerEvents = 'none';
    }
});
// Registra o service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
  document.addEventListener('contextmenu', event => event.preventDefault());
  document.addEventListener('selectstart', event => event.preventDefault());
  document.addEventListener('dragstart', event => event.preventDefault());
  document.addEventListener('copy', event => event.preventDefault());