export default function initStickyNavMenu() {
  document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('navMenu');
    const footer = document.querySelector('.p-footer');
    if (!navMenu || !footer) return;

    // 常に固定
    navMenu.style.top = '37.8rem'; // 初期位置

    // CSSトランジションを追加（必要なら）
    navMenu.style.transition = 'top 0.3s ease';

    let lastScrollY = window.scrollY;

    const updateNavTop = () => {
      if (window.innerWidth < 1024) {
        // 初期化
        navMenu.style.top = '';
        return;
      }

      const navHeight = navMenu.offsetHeight;
      const footerRect = footer.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;

      const contactTrigger = (navMenu.getBoundingClientRect().bottom >= footerRect.top - 90);
      const footerOutOfView = (footerRect.top >= window.innerHeight);

      if (isScrollingDown && contactTrigger) {
        // フッターと接触したら navMenu の top を調整（固定したまま下へ）
        const newTop = footerRect.top - navHeight - 90;
        navMenu.style.top = `${newTop}px`;
      } else if (!isScrollingDown && footerOutOfView) {
        // フッターが見えなくなったら元の top に戻す
        navMenu.style.top = '37.8rem';
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateNavTop);
    window.addEventListener('resize', updateNavTop);
    updateNavTop();
  });
}
