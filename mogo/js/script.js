$(function () {
    $('.quote__items').slick({
        arrows:true, 
        dots:false,
        prevArrow: '<button type="button" class="quote__btn quote__btn-prev"><img src="images/main/whatwedo/leftarrow.svg"></button>',
        nextArrow: '<button type="button" class="quote__btn quote__btn-next"><img src="images/main/whatwedo/leftarrow.svg"></button>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                arrows: false
              }
            }
          ]
    })

    const btn = document.querySelectorAll('.whatwedo__name');
const description = document.querySelectorAll('.whatwedo__description');

for(let i = 0; i<btn.length; i++){
    btn[i].addEventListener('click', ()=>{
        btn[i].classList.toggle('whatwedo__name--active');
        description[i].classList.toggle('whatwedo__description--active');
    }) 
}


const links = document.querySelectorAll('a[href*="#"]')

for (let link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = link.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};

    const burger = document.querySelector('.header__burger');
    const item = document.querySelector('.header__items');

    burger.addEventListener('click', (event)=>{
        item.classList.toggle('header__items--active');
    });
})

