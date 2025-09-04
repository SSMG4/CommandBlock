// ---- Logo Randomization ----

const logoImages = [
  'assets/base.png',
  'assets/chain.png',
  'assets/repeater.png'
];

function setLogo() {
  // Check if user is opening the page for the first time this session
  if (!sessionStorage.getItem('logoInitialized')) {
    // Always show base.png on first load
    document.getElementById('logo').src = logoImages[0];
    sessionStorage.setItem('logoInitialized', 'true');
  } else {
    // Randomly choose a logo (chain or repeater, never base on refresh)
    const randomIdx = Math.floor(Math.random() * (logoImages.length - 1)) + 1;
    document.getElementById('logo').src = logoImages[randomIdx];
  }
}
window.addEventListener('DOMContentLoaded', setLogo);

// ---- Theme Switching ----

function setTheme(theme) {
  document.body.className = 'theme-' + theme;
  localStorage.setItem('theme', theme);
}

const themeSwitcher = document.getElementById('theme-switcher');
if (themeSwitcher) {
  // Load saved theme or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  themeSwitcher.value = savedTheme;
  setTheme(savedTheme);

  themeSwitcher.addEventListener('change', (e) => {
    setTheme(e.target.value);
  });
}

// ---- Language Switching (Scaffolding) ----

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  // TODO: Add translation logic here for page content
}

const langSwitcher = document.getElementById('lang-switcher');
if (langSwitcher) {
  const savedLang = localStorage.getItem('lang') || 'en';
  langSwitcher.value = savedLang;
  setLanguage(savedLang);

  langSwitcher.addEventListener('change', (e) => {
    setLanguage(e.target.value);
    // TODO: Apply language changes to the page
  });
}

// ---- Navigation Highlight (Optional) ----

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  if (window.location.pathname.endsWith(link.getAttribute('href'))) {
    link.style.fontWeight = 'bold';
    link.style.textDecoration = 'underline';
  }
});
