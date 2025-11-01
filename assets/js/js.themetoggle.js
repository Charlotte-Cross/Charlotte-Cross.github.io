// === Day/Night Theme Toggle ===
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  // Load saved theme or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  toggle.setAttribute('aria-pressed', savedTheme === 'dark');
  toggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  // Switch theme on click
  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    toggle.setAttribute('aria-pressed', next === 'dark');
    toggle.textContent = next === 'dark' ? '☀️' : '🌙';
  });
});
