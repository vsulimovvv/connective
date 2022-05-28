window.addEventListener('DOMContentLoaded', () => {
  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.our-customers__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
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
    const sliderEl = document.querySelector('.services__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: document.querySelector('.services__content .swiper-button-next'),
        prevEl: document.querySelector('.services__content .swiper-button-prev'),
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

  // * ===== Custom select
  (function customSelect() {
    const selects = document.querySelectorAll('.select');
    selects.forEach((el) => {
      const select = new Choices(el, {
        itemSelectText: '',
        searchEnabled: false,
      });
    });
  })();

  // // * ===== Show Menu
  // (function showMenu() {
  //   const menuBtn = document.querySelector('.header__toggle');
  //   const menu = document.querySelector('.mobile-menu');
  //   const menuCloseBtn = document.querySelector('.mobile-menu__close');
  //   const body = document.querySelector('body');
  //   const overlay = document.querySelector('.overlay');
  //   menuBtn.addEventListener('click', (e) => {
  //     menu.classList.toggle('active');
  //     overlay.classList.toggle('active');
  //     body.classList.toggle('no-scroll');
  //   });
  //   overlay.addEventListener('click', (e) => {
  //     menu.classList.remove('active');
  //     overlay.classList.remove('active');
  //     body.classList.remove('no-scroll');
  //   });
  //   menuCloseBtn.addEventListener('click', (e) => {
  //     menu.classList.remove('active');
  //     overlay.classList.remove('active');
  //     body.classList.remove('no-scroll');
  //   });
  // })();
  // // * ===== Accordion
  // const toggleAccordion = (accordionControl, accordionContent, accordion) => {
  //   const filters = document.querySelectorAll(accordionControl);
  //   filters.forEach((el) => {
  //     el.addEventListener('click', (e) => {
  //       const target = e.target.closest(accordion);
  //       const content = target.querySelector(accordionContent);
  //       target.classList.toggle('active');
  //       if (target.classList.contains('active')) {
  //         content.style.maxHeight = content.scrollHeight + 'px';
  //       } else {
  //         content.style.maxHeight = null;
  //       }
  //     });
  //   });
  // };
  // toggleAccordion('.accordion__control', '.accordion__content', '.accordion');

  // * ===== Mixer
  (function mixer() {
    const mixContent = document.querySelector('.events-page');
    if (mixContent) {
      const mixer = mixitup(mixContent);
    }
  })();

  // // * ===== Modal
  // (function modals() {
  //   function bindModal(openBtn, modal, close) {
  //     const openBtnEl = document.querySelectorAll(openBtn);
  //     const modalEl = document.querySelector(modal);
  //     const closeEl = document.querySelectorAll(close);
  //     const body = document.querySelector('body');
  //     if (modalEl) {
  //       openBtnEl.forEach((el) => {
  //         el.addEventListener('click', (e) => {
  //           if (e.target) {
  //             e.preventDefault();
  //           }
  //           modalEl.classList.add('active');
  //           body.classList.add('no-scroll');
  //         });
  //       });
  //       closeEl.forEach((btn) => {
  //         btn.addEventListener('click', (e) => {
  //           modalEl.classList.remove('active');
  //           body.classList.remove('no-scroll');
  //         });
  //       });
  //       modalEl.addEventListener('click', (e) => {
  //         if (e.target === modalEl) {
  //           modalEl.classList.remove('active');
  //           body.classList.remove('no-scroll');
  //         }
  //       });
  //     }
  //   }
  //   bindModal('.download__btn', '.popup--download', '.popup__close');
  //   bindModal('.header__favorite', '.popup--card-object', '.popup__close');
  //   bindModal('.get-presentation', '.popup--get-info', '.popup__close');
  //   bindModal('.presentation__download', '.popup--get-info', '.popup__close');
  // })();
  // // * ===== Toggle Tabs
  // function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
  //   const header = document.querySelectorAll(headerSelector);
  //   const tab = document.querySelectorAll(tabSelector);
  //   const content = document.querySelectorAll(contentSelector);
  //   if (header) {
  //     hideTabContent();
  //     showTabContent();
  //     function hideTabContent() {
  //       content.forEach((item) => {
  //         item.classList.remove('active');
  //       });
  //       tab.forEach((item) => {
  //         item.classList.remove(activeClass);
  //       });
  //     }
  //     function showTabContent(i = 0) {
  //       content[i].classList.add('active');
  //       tab[i].classList.add(activeClass);
  //     }
  //     header.forEach((item) => {
  //       if (item) {
  //         item.addEventListener('click', (e) => {
  //           const target = e.target;
  //           if (target.classList.contains(tabSelector.replace(/\./, ''))) {
  //             tab.forEach((item, i) => {
  //               if (target == item || target.parentNode == item) {
  //                 hideTabContent();
  //                 showTabContent(i);
  //               }
  //             });
  //           }
  //         });
  //       }
  //     });
  //   }
  // }
  // someTabs(
  //   '.planning__content',
  //   '.planning__nav-btn',
  //   '.planning__panel',
  //   'planning__nav-btn--active'
  // );
});
