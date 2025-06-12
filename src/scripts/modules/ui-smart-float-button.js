export default function initSmartFloatButton() {
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.buy-now');
    const mv = document.querySelector('.js-mv');
    if (!btn || !mv) return;

    // 1024px 未満は何もしない
    if (window.innerWidth < 1024) return;

    let lastScrollY = window.scrollY;

    function updateButtonPosition() {
      const btnMarginRight = -mv.offsetWidth / 2 + 20;
      btn.style.right = '50%';
      btn.style.marginRight = `${btnMarginRight}px`;
      btn.style.opacity = '1';
    }

    function getTriggerPoint() {
      const mvBottom = mv.offsetTop + mv.offsetHeight;
      return mvBottom - 109;
    }

    // 初期位置調整と表示
    updateButtonPosition();
    setTimeout(() => {
      btn.style.opacity = '1';
    }, 500);

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      const triggerPoint = getTriggerPoint();

      const isScrollingDown = currentScrollY > lastScrollY;
      const isPastTrigger = currentScrollY > triggerPoint;
      const isAboveTrigger = currentScrollY <= triggerPoint;

      if (isScrollingDown && isPastTrigger) {
        btn.classList.add('fixed');
      } else if (!isScrollingDown && isAboveTrigger) {
        btn.classList.remove('fixed');
      }

      lastScrollY = currentScrollY;
    });

    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (window.innerWidth >= 1024) {
          updateButtonPosition();
        } else {
          // 小さい画面になった場合は初期化
          btn.classList.remove('fixed');
          btn.style.right = '';
          btn.style.marginRight = '';
          btn.style.opacity = '';
        }
      }, 200);
    });
  });
}
