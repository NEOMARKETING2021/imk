document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  const closeBtn = document.getElementById('closeMenu');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  }
});
