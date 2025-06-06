window.addEventListener('load', () => {
  // プラグインを定義
  gsap.registerPlugin(ScrollTrigger);

  const area = document.querySelector('.js-area');
  const wrap = document.querySelector('.js-wrap');
  const items = document.querySelectorAll('.js-item');
  const num = items.length;

  // 横幅を指定
  gsap.set(wrap, { width: `${num * 100}%` });
  gsap.set(items, { width: `${60 / num}%` });

  // 初期位置を最初のアイテムが中央になるよう調整
  const initialOffset = 20 / num; // 最初のアイテムを中央に配置
  gsap.set(wrap, { xPercent: initialOffset });

  // アニメーション
  gsap.to(wrap, {
    xPercent: -40 + initialOffset, // 最後のアイテムを中央に配置
    ease: 'none',
    scrollTrigger: {
      trigger: area, // トリガー
      start: 'top top', // 開始位置
      end: '+=1000', // 終了位置 (スクロール量の調整)
      pin: true, // ピン留め
      scrub: true, // スクロール量に応じて動かす
      // markers: true,
    },
  });

  // すべての gsap-fadein クラスを持つ要素に適用
  document.querySelectorAll('.gsap-fadein').forEach((element) => {
    gsap.fromTo(
      element,
      {
        y: 32, // アニメーション開始前の縦位置
        autoAlpha: 0, // アニメーション開始前は透明
      },
      {
        y: 0, // アニメーション後の縦位置
        autoAlpha: 1, // アニメーション後に出現
        scrollTrigger: {
          trigger: element, // アニメーションが始まるトリガーを個別の要素に
          toggleActions: 'play none none reverse', // 上スクロールで戻る
          start: 'top 80%', // 画面下部でアニメーション開始
          // markers: true, // デバッグ用マーカー表示（必要に応じて削除）
        },
      }
    );
  });
});
