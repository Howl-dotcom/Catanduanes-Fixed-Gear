
// ── LOADER PERCENT COUNTER ──
const pct = document.getElementById('loaderPct');
let n = 0;

const tick = setInterval(() => {
  n = Math.min(100, n + Math.floor(Math.random() * 8) + 2);
  pct.textContent = n + '%';
  if (n >= 100) {
    clearInterval(tick);
    setTimeout(() => {
      document.getElementById('loader').classList.add('out');
    }, 300);
  }
}, 80);

// ── SMOOTH SCROLL FOR NAV LINKS ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
