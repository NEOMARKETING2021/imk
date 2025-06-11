export default function initStickyNavMenu() {
  document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('navMenu');
    const footer = document.querySelector('.p-footer');
    if (!navMenu || !footer) return;

    let lastScrollY = window.scrollY;

    const updateNavPosition = () => {
      if (window.innerWidth < 1024) {
        navMenu.style.position = '';
        navMenu.style.top = '';
        navMenu.style.bottom = '';
        return;
      }

      const navRect = navMenu.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;

      const footerVisibleHeight = Math.max(
        0,
        Math.min(footerRect.bottom, window.innerHeight) - Math.max(footerRect.top, 0)
      );

      const contactTrigger = navRect.bottom >= (footerRect.top - 90);
      const footerOutOfView = footerRect.top >= window.innerHeight;

      if (isScrollingDown && contactTrigger) {
        navMenu.style.position = 'fixed';
        navMenu.style.top = 'auto';
        navMenu.style.bottom = `${footerVisibleHeight + 90}px`;
      } else if (!isScrollingDown && footerOutOfView) {
        navMenu.style.position = 'fixed';
        navMenu.style.top = '37.8rem';
        navMenu.style.bottom = 'auto';
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateNavPosition);
    window.addEventListener('resize', updateNavPosition);

    updateNavPosition();
  });
}
