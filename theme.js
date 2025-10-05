// Apply saved preference on load
(() => {
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;

  if (!toggle) return; // graceful if a page ever omits the button

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggle.textContent = '☀️';
  } else {
    toggle.textContent = '🌙';
  }

  toggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    toggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
})();
// Highlight active nav link
(() => {
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    const target = a.getAttribute('href') || '';
    if ((here === '' && target === 'index.html') || here === target) a.classList.add('active');
    if (here === '' && target === 'index.html') a.classList.add('active');
  });
})();
