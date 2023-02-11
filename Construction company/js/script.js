$(function () {

    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__items');

    burger.addEventListener('click', (event) => {
        menu.classList.toggle('header__items--active');
    });

    const quests = document.querySelectorAll('.questions__name');
    const info = document.querySelectorAll('.questions__item');

    for (let i = 0; i < quests.length; i++) {
        quests[i].addEventListener('click', (event) => {
            event.preventDefault();
            info[i].classList.toggle('questions__info--active');
        });
    }

})



