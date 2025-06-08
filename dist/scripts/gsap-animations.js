// dist/scripts/gsap-animations.js
window.addEventListener('load', () => {
  // GSAP ScrollTrigger プラグイン登録
  gsap.registerPlugin(ScrollTrigger);

  // .gsap-fadein にフェードインアニメーション適用
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
