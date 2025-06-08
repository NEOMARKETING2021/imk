export default function initHamburgerMenu() {
  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');

      hamburger.classList.toggle('open', isOpen);
      document.body.classList.toggle('no-scroll', isOpen);
    });

    // ✅ アンカークリック時にメニューを閉じる
    document.querySelectorAll('.nav-menu__anchor').forEach(anchor => {
      anchor.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          hamburger.classList.remove('open');
          document.body.classList.remove('no-scroll');
        }
      });
    });
  });
}
