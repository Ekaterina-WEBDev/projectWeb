$(function () {
    var mixer = mixitup('.portfolio__works');

    $('.news__items').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"> <img src="img/main/arrow-left.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="img/main/arrow-right.svg" alt="arrow right"></button>'
    });

})