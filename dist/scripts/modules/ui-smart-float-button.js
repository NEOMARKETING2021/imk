export default function initSmartFloatButton() {
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.buy-now');
    const mv = document.querySelector('.js-mv');
    if (!btn || !mv) return;

    let lastScrollY = window.scrollY;

    // ✅ ボタン位置調整（スマホファースト）
    if (window.innerWidth < 768) {
      btn.style.right = '3rem';
      btn.style.marginRight = '';
    } else {
      const btnMarginRight = -mv.offsetWidth / 2 + 20; // 20px = 調整マージン
      btn.style.right = '50%';
      btn.style.marginRight = `${btnMarginRight}px`;
    }

    // 0.5秒後に表示
    setTimeout(() => {
      btn.style.opacity = '1';
    }, 500);

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      const mvBottom = mv.offsetTop + mv.offsetHeight;

      // ✅ スマホファーストで 1024px 未満を優先
      const triggerPoint = window.innerWidth < 1024
        ? mvBottom - 90 + 68
        : mvBottom - 109;

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
  });
}
