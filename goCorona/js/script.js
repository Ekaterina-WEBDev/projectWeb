document.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.closest('.header__burger')) {
        document.querySelector('.menu__items').classList.toggle('menu__items--active');
    } else {
        document.querySelector('.menu__items').classList.remove('menu__items--active');
    }
});

/*
const header = document.querySelector('.header');
const intro = document.querySelector('.intro');
const up = document.querySelector('.up');

let heightHeader = header.offsetHeight;

document.addEventListener('scroll', () => {
    if (window.pageYOffset > heightHeader) {
        header.classList.add('header--fixed')
        up.classList.add('up--active')
    } else {
        header.classList.remove('header--fixed')
        up.classList.remove('up--active')
    }
})
*/