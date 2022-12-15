$(function () {

    /*
    Плавный скролл до элемента
    */

    $(".header__items a, .footer__btn").on("click", function (event) {
        event.preventDefault();
        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
    });


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
    let nav = document.querySelector('.header__nav');

    document.addEventListener('click', (event) => {
        if (event.target.closest('.header__burger') || event.target.closest('.header__item')) {
            nav.classList.toggle('header__nav--active');
        }
    })




})