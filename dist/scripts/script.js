// src/scripts/modules/initStickyNavMenu.js
function initStickyNavMenu() {
  document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('navMenu');
    const footer = document.querySelector('.p-footer');
    if (!navMenu || !footer) return;
    navMenu.style.top = '37.8rem';
    navMenu.style.transition = 'top 0.3s ease';
    let lastScrollY = window.scrollY;
    const updateNavTop = () => {
      if (window.innerWidth < 1024) {
        navMenu.style.top = '';
        return;
      }
      const navHeight = navMenu.offsetHeight;
      const footerRect = footer.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      const contactTrigger = navMenu.getBoundingClientRect().bottom >= footerRect.top - 90;
      const footerOutOfView = footerRect.top >= window.innerHeight;
      if (isScrollingDown && contactTrigger) {
        const newTop = footerRect.top - navHeight - 90;
        navMenu.style.top = `${newTop}px`;
      } else if (!isScrollingDown && footerOutOfView) {
        navMenu.style.top = '37.8rem';
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', updateNavTop);
    window.addEventListener('resize', updateNavTop);
    updateNavTop();
  });
}

// src/scripts/modules/smoothScrollWithoutHash.js
function initSmoothScrollWithoutHash() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('href').substring(1);
      const target = document.getElementById(id);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// src/scripts/modules/ui-hamburger.js
function initHamburgerMenu() {
  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    if (!hamburger || !navMenu) return;
    hamburger.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      document.body.classList.toggle('no-scroll', isOpen);
    });
    document.querySelectorAll('.nav-menu__anchor').forEach((anchor) => {
      anchor.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          hamburger.classList.remove('open');
          document.body.classList.remove('no-scroll');
        }
      });
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        navMenu.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.classList.remove('no-scroll');
      }
    });
  });
}

// src/scripts/modules/ui-smart-float-button.js
function initSmartFloatButton() {
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.buy-now');
    const mv = document.querySelector('.js-mv');
    if (!btn || !mv) return;
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
          btn.classList.remove('fixed');
          btn.style.right = '';
          btn.style.marginRight = '';
          btn.style.opacity = '';
        }
      }, 200);
    });
  });
}

// src/scripts/modules/toggleCtaLinkDisabled.js
function toggleCtaLinkDisabled(isDisabled) {
  const links = document.querySelectorAll('.c-button-cta');
  const releaseDates = document.querySelectorAll('.p-cta__release-date');
  links.forEach((link) => {
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
  releaseDates.forEach((releaseDate) => {
    const existingComingSoon = releaseDate.parentNode.querySelector('.p-cta__coming-soon');
    if (isDisabled) {
      if (!existingComingSoon) {
        const comingSoon = document.createElement('p');
        comingSoon.className = 'p-cta__coming-soon';
        comingSoon.textContent = 'Coming Soon';
        releaseDate.parentNode.insertBefore(comingSoon, releaseDate);
      }
    } else if (existingComingSoon) {
      existingComingSoon.remove();
    }
  });
  function handleDisabledClick(e) {
    if (e.currentTarget.classList.contains('js-disabled-link')) {
      e.preventDefault();
    }
  }
}

// src/scripts/script.js
initStickyNavMenu();
initSmoothScrollWithoutHash();
initHamburgerMenu();
initSmartFloatButton();
toggleCtaLinkDisabled(true);
