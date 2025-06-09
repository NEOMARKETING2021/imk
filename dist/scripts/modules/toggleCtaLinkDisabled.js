export default function toggleCtaLinkDisabled(isDisabled) {
  const links = document.querySelectorAll('.c-button-cta');

  links.forEach(link => {
    // 無効化する場合
    if (isDisabled) {
      link.classList.add('js-disabled-link');
      link.setAttribute('aria-disabled', 'true');

      // preventDefault を設定（重複を避けるため一度削除してから追加）
      link.removeEventListener('click', handleDisabledClick);
      link.addEventListener('click', handleDisabledClick);
    }
    // 有効化する場合
    else {
      link.classList.remove('js-disabled-link');
      link.removeAttribute('aria-disabled');

      // イベント解除
      link.removeEventListener('click', handleDisabledClick);
    }
  });

  function handleDisabledClick(e) {
    if (e.currentTarget.classList.contains('js-disabled-link')) {
      e.preventDefault();
    }
  }
}
