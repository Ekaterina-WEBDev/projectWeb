$(function () {

    let nav = document.querySelector('.header__nav');
    let menuBtn = document.querySelector('.header__btn-menu');

    menuBtn.addEventListener('click', function () {
        nav.classList.toggle('menu-open');

    })
})