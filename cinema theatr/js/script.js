$(function () {

    const burger = document.querySelector('.header__burger');
    const items = document.querySelector('.header__items');

    burger.addEventListener('click', (event) => {
        event.preventDefault();
        items.classList.toggle('header__items--active')
    })

})