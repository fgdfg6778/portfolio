document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('home-scroll-btn');
  if (btn) {
    btn.addEventListener('click', function () {
      window.scrollBy({ top: window.innerHeight - 88, left: 0, behavior: 'smooth' });
    });
  }
});