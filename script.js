// Animações com AOS
if (typeof AOS !== 'undefined' && typeof AOS.init === 'function') {
  AOS.init({
    duration: 1000,
    once: true
  });
} else {
  console.warn('AOS library is not loaded.');
}
