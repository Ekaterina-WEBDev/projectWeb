$(function () {

    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
        });

        $('.gallery__items').slick({
            dots:false,
            arrows:true,
            prevArrow:'<button type="button" class="gallery__btn gallery__btn-prev"></button>',
            nextArrow: '<button type="button" class="gallery__btn gallery__btn-next"></button>'
        })
})