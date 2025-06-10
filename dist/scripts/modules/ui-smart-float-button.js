export default function initSmartFloatButton() {
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.buy-now');
    const mv = document.querySelector('.js-mv');
    if (!btn || !mv) return;

    let lastScrollY = window.scrollY;

    // ボタン位置を更新する関数（768px未満はright: 3rem、それ以上は中央）
    function updateButtonPosition() {
      if (window.innerWidth < 768) {
        btn.style.right = '3rem';
        btn.style.marginRight = '';
      } else {
        const btnMarginRight = -mv.offsetWidth / 2 + 20;
        btn.style.right = '50%';
        btn.style.marginRight = `${btnMarginRight}px`;
      }
    }

    // トリガーポイントを算出する関数（1024px未満と以上で分岐）
    function getTriggerPoint() {
      const mvBottom = mv.offsetTop + mv.offsetHeight;
      return window.innerWidth < 1024 ? mvBottom - 90 + 68 : mvBottom - 109;
    }

    // 初期位置調整と表示
    updateButtonPosition();
    setTimeout(() => {
      btn.style.opacity = '1';
    }, 500);

    // スクロール処理
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

    // resize 時の再計算（デバウンス付き）
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateButtonPosition();
      }, 200);
    });
  });
}
