export default function initHamburgerMenu() {

  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');

      hamburger.classList.toggle('open'); // ← ハンバーガーの見た目変更
      navMenu.classList.toggle('open', isOpen); // ← メニューの表示切替

      document.body.classList.toggle('no-scroll', isOpen);
    });
  });
}
