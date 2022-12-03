$(function () {
    var mixer = mixitup('.portfolio__works');

    $('.news__items').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"> <img src="img/main/arrow-left.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="img/main/arrow-right.svg" alt="arrow right"></button>',
        responsive: [
            {
                breakpoint: 768.98,
                settings: {
                    arrows: false
                }
            }
        ]
    });


    /* Бургерное меню */
    let menu = document.querySelector('.header__burger');
    let nav = document.querySelector('.header__nav');

    menu.addEventListener('click', function () {
        nav.classList.toggle('header__nav--active');
    })


    /*
        Альтернативная запись кнопки бургера:
        $('.header__burger').on('click', function(){
            $('.header__items').toggleClass('header__burger--active');
        })
    */

})