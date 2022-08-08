window.addEventListener('DOMContentLoaded', () => {
  // * ===== Mask input
  $('input[type="tel"]').mask('+7 (999) 999-99-99');

  // * ===== Custom select
  $('select').niceSelect();

  $(function () {
    $('#datepicker').datepicker();
  });

  //* Change Background Header
  function scrollHeader() {
    const nav = document.querySelector('header');
    if (this.scrollY >= 150) {
      nav.classList.add('scroll-header');
    } else {
      nav.classList.remove('scroll-header');
    }
  }

  window.addEventListener('scroll', scrollHeader);

  // ! Change
  const header = document.querySelector('header');
  if (window.pageYOffset >= 150) {
    header.classList.add('scroll-header');
  }

  // * ==== Dropdown
  document.addEventListener('click', (e) => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null)
      return;

    let currentDropdown;
    if (isDropdownButton) {
      currentDropdown = e.target.closest('[data-dropdown]');
      currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove('active');
    });
  });

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.our-customers__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 'auto',
      spaceBetween: 70,
      breakpoints: {
        991: {
          spaceBetween: 70,
        },
        768: {
          spaceBetween: 50,
        },
        576: {
          spaceBetween: 30,
        },
        319: {
          spaceBetween: 20,
        },
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.hero__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 1,
      navigation: {
        nextEl: document.querySelector('.hero__slider .swiper-button-next'),
        prevEl: document.querySelector('.hero__slider .swiper-button-prev'),
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.cases__slider');
    new Swiper(sliderEl, {
      navigation: {
        nextEl: document.querySelector('.cases__slider .swiper-button-next'),
        prevEl: document.querySelector('.cases__slider .swiper-button-prev'),
      },
      slidesPerView: 1,
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.events__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: document.querySelector('.events__content .swiper-button-next'),
        prevEl: document.querySelector('.events__content .swiper-button-prev'),
      },
      spaceBetween: 20,
      slidesPerView: 'auto',
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.slider__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: document.querySelector('.slider__content .swiper-button-next'),
        prevEl: document.querySelector('.slider__content .swiper-button-prev'),
      },
      grabCursor: true,
      freeMode: true,
      loop: true,
      spaceBetween: 20,
      slidesPerView: 'auto',
    });
  })();

  (function slider() {
    const sliderEl = document.querySelector('.descr-adv__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      spaceBetween: 20,
      slidesPerView: 4,

      breakpoints: {
        991: {
          slidesPerView: 4,
        },

        576: {
          slidesPerView: 3,
        },

        319: {
          slidesPerView: 2,
        },
      },
    });
  })();
  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.our-cases__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: document.querySelector(
          '.our-cases__content .swiper-button-next'
        ),
        prevEl: document.querySelector(
          '.our-cases__content .swiper-button-prev'
        ),
      },
      spaceBetween: 20,
      slidesPerView: 'auto',
    });
  })();
  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.services__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: document.querySelector(
          '.services__content .swiper-button-next'
        ),
        prevEl: document.querySelector(
          '.services__content .swiper-button-prev'
        ),
      },
      spaceBetween: 20,
      slidesPerView: 'auto',
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.introduction__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: document.querySelector(
          '.introduction__content .swiper-button-next'
        ),
        prevEl: document.querySelector(
          '.introduction__content .swiper-button-prev'
        ),
      },
      spaceBetween: 20,
      slidesPerView: 'auto',
    });
  })();
  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.services-package__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: document.querySelector(
          '.services-package__content .swiper-button-next'
        ),
        prevEl: document.querySelector(
          '.services-package__content .swiper-button-prev'
        ),
      },
      spaceBetween: 20,
      slidesPerView: 'auto',
    });
  })();
  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.reviews__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: document.querySelector('.reviews__content .swiper-button-next'),
        prevEl: document.querySelector('.reviews__content .swiper-button-prev'),
      },
      spaceBetween: 50,
      slidesPerView: 'auto',

      breakpoints: {
        991: {
          spaceBetween: 50,
        },
        319: {
          spaceBetween: 20,
        },
      },
    });
  })();
  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.teaching-team__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: document.querySelector(
          '.teaching-team__slider .swiper-button-next'
        ),
        prevEl: document.querySelector(
          '.teaching-team__slider .swiper-button-prev'
        ),
      },
      spaceBetween: 15,
      slidesPerView: 'auto',
    });
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ===== Accordion
  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = e.target.closest(accordion);
        const content = target.querySelector(accordionContent);
        target.classList.toggle('active');
        if (target.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  };
  toggleAccordion('.accordion__control', '.accordion__content', '.accordion');

  // * ===== Mixer
  (function mixer() {
    const mixContent = document.querySelector('.events-page');
    if (mixContent) {
      const mixer = mixitup(mixContent);
    }
  })();

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.btn-consultation', '.popup--consultation', '.popup__close');
    bindModal('.btn-call', '.popup--call', '.popup__close');
    bindModal('.btn-support', '.popup--support', '.popup__close');
  })();

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);
    if (header) {
      hideTabContent();
      showTabContent();
      function hideTabContent() {
        content.forEach((item) => {
          item.classList.remove('active');
        });
        tab.forEach((item) => {
          item.classList.remove(activeClass);
        });
      }
      function showTabContent(i = 0) {
        content[i].classList.add('active');
        tab[i].classList.add(activeClass);
      }
      header.forEach((item) => {
        if (item) {
          item.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains(tabSelector.replace(/\./, ''))) {
              tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                  hideTabContent();
                  showTabContent(i);
                }
              });
            }
          });
        }
      });
    }
  }
  someTabs('.tabs', '.tabs-btn', '.tabs-content', 'tabs-btn--active');
});
