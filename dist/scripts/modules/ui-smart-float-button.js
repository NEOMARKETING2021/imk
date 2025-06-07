export default function initSmartFloatButton() {
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.buy-now');
    const mv = document.querySelector('.js-mv');
    let lastScrollY = window.scrollY;
    // mv の半分の幅
    const btnMraginRight = -mv.offsetWidth / 2 + 20; // 20px は調整用のマージン

    btn.style.right = '50%';
    btn.style.marginRight = `${btnMraginRight}px`;

    // .5秒後に btn.style.opacity = '1';
    setTimeout(() => {
      btn.style.opacity = '1';
    }, 500);

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      const kvBottom = mv.offsetTop + mv.offsetHeight;

      // 「mvの下端 - 100px」をトリガーにする
      const triggerPoint = kvBottom - 100;

      if (currentScrollY > lastScrollY && currentScrollY > triggerPoint) {
        // スクロールダウン、かつトリガーを越えたら fixed にする
        btn.classList.add('fixed');
      } else if (currentScrollY < lastScrollY && currentScrollY <= triggerPoint) {
        // スクロールアップ、かつトリガーより上に戻ったら fixed を外す
        btn.classList.remove('fixed');
      }

      lastScrollY = currentScrollY;
    });
  });
}
