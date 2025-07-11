export default function initDetailsAccordion() {

  document.addEventListener('DOMContentLoaded', () => {
    const details = document.querySelectorAll('.js-details');

    if (!details || details.length === 0) {
      return;
    }

    details.forEach((element) => {
      const summary = element.querySelector('.js-details__summary');
      const content = element.querySelector('.js-details__content');

      if (!summary || !content) {
        return;
      }

      summary.addEventListener('click', (e) => {
        e.preventDefault();

        // 他の open 状態をすべて閉じる
        // details.forEach((otherElement) => {
        //   if (otherElement !== element && otherElement.hasAttribute('open')) {
        //     const otherContent = otherElement.querySelector('.js-details__content');
        //     if (!otherContent) return;
        //     const closeAnimation = otherContent.animate(
        //       {
        //         opacity: [1, 0],
        //         height: [`${otherContent.offsetHeight}px`, 0],
        //       },
        //       {
        //         duration: 360,
        //         easing: 'ease-out',
        //       }
        //     );
        //     closeAnimation.onfinish = () => {
        //       otherElement.removeAttribute('open');
        //     };
        //   }
        // });

        // 現在の element の開閉を切り替える
        if (element.open) {
          const closeAnimation = content.animate(
            {
              opacity: [1, 0],
              height: [`${content.offsetHeight}px`, 0],
            },
            {
              duration: 360,
              easing: 'ease-out',
            }
          );
          closeAnimation.onfinish = () => {
            element.removeAttribute('open');
          };
        } else {
          element.setAttribute('open', 'true');
          content.animate(
            {
              opacity: [0, 1],
              height: [0, `${content.offsetHeight}px`],
            },
            {
              duration: 360,
              easing: 'ease-out',
            }
          );
        }
      });
    });
  });

}
