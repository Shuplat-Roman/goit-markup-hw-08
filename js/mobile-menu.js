// (() => {
//   const refs = {
//     openMobileBtn: document.querySelector('.btn__menu'),
//     closeMobileBtn: document.querySelector('.btn__mobile-menu'),
//     mobile: document.querySelector('.mobile-menu'),
//   };

//   refs.openMobileBtn.addEventListener('click', toggleMobile);
//   refs.closeMobileBtn.addEventListener('click', toggleMobile);

//   function toggleMobile() {
//     refs.mobile.classList.toggle('is-hidden-mobile');
//   }
// })();

(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-mobile-open]'),
    closeMenuBtn: document.querySelector('[data-mobile-close]'),
    // menu: document.querySelector('.backdrop'),
    menuItem: document.querySelector('[data-mobile]')
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  // refs.menu.addEventListener('click', removeMenu);

   function toggleMenu() {
    refs.menuItem.classList.toggle('is-hidden');
  }
})();