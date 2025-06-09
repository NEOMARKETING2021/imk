export default function toggleCtaLinkDisabled(isDisabled) {
  const links = document.querySelectorAll('.c-button-cta');
  const releaseDates = document.querySelectorAll('.p-cta__release-date');

  links.forEach(link => {
    if (isDisabled) {
      link.classList.add('js-disabled-link');
      link.setAttribute('aria-disabled', 'true');
      link.removeEventListener('click', handleDisabledClick);
      link.addEventListener('click', handleDisabledClick);
    } else {
      link.classList.remove('js-disabled-link');
      link.removeAttribute('aria-disabled');
      link.removeEventListener('click', handleDisabledClick);
    }
  });

  // 各 release-date に対して Coming Soon の挿入/削除を実行
  releaseDates.forEach(releaseDate => {
    const existingComingSoon = releaseDate.parentNode.querySelector('.p-cta__coming-soon');

    if (isDisabled) {
      if (!existingComingSoon) {
        const comingSoon = document.createElement('p');
        comingSoon.className = 'p-cta__coming-soon';
        comingSoon.textContent = 'Coming Soon';
        releaseDate.parentNode.insertBefore(comingSoon, releaseDate);
      }
    } else {
      if (existingComingSoon) {
        existingComingSoon.remove();
      }
    }
  });

  function handleDisabledClick(e) {
    if (e.currentTarget.classList.contains('js-disabled-link')) {
      e.preventDefault();
    }
  }
}
