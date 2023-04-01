// 1 ) найти высоту блока header (offsetHeight)
// 2 ) проверить если прокрученная область больше высоты то сделать фиксированную шапку (добавить класс fixed в котором будет display:fixed)


const header = document.querySelector('.header');
const intro = document.querySelector('.intro');
const up = document.querySelector('.up');

let heightHeader = header.offsetHeight;


document.addEventListener('scroll', ()=>{
    if(window.pageYOffset > heightHeader){
    header.classList.add('header--fixed')
    up.classList.add('up--active')
} else {
    header.classList.remove('header--fixed')
    up.classList.remove('up--active')
}
})

document.addEventListener('click', (event)=>{
    if(event.target.closest('.header__burger')){
        document.querySelector('.header__items').classList.toggle('header__items--active');
    } else{
        document.querySelector('.header__items').classList.remove('header__items--active');
    }
})


/*
let mainEl = document.documentElement; //находить элемент html
let mainElWidth = mainEl.clientWidth; //доступная ширина элемента html
let mainElHeight = mainEl.clientHeight; //доступная высота элемента html

console.log(mainEl);
console.log(mainElWidth);
console.log(mainElHeight);
*/

/*
let windowWidth = window.innerWidth; // ширина окна бра зера  с полосой прокрутки
let windowHeight = window.innerHeight; // высота окна браузера с полосой прокрутки

console.log(windowWidth);
console.log(windowHeight);
*/

/*
let allWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
); //ширина всего документа, включая поркрученнную часть ( вместе с горизонтаьным скроллом)

let allHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
); //высота всего документа, включая поркрученнную часть ( вместе с вертикальным скроллом)

console.log(allWidth);
console.log(allHeight);
*/

/*
let scrollTop = window.pageYOffset; //  количество прокрученных пикселей сверху-вниз
let scrollLeft = window.pageXOffset; //  количество прокрученных пикселей влево

console.log(scrollTop);
console.log(scrollLeft);
*/


/*
const header = document.querySelector('.header__logo');

header.addEventListener('click', (event)=>{
    event.preventDefault();
    window.scrollBy(0, 50); //прокручивает страницу вниз на указанное количество пиксей. (0 - по горизонтали, 50 - по вертикали)
});
*/

/*
const btn = document.querySelector('.trip__title');
btn.addEventListener('click', (event) => {
    event.preventDefault();
   window.scrollTo(0, 50)  //прокручивает страницу  наверх на указанное количество пиксей. (0 - по горизонтали, 50 - по вертикали)
});
*/

/*

const footer = document.querySelector('.footer__logo');

footer.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
        top:100, // на сколько вврерх поднять пикселей
        left:0 , // на сколько влево подвинуть пикселей
        behavior: "smooth" //плавность перехода
    }); 
});
*/

/*
const btn = document.querySelector('.trip__title');
const block = document.querySelector('.info__title');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    block.scrollIntoView(true); 
    //при нажатии на btn происходит прокрутка до блока block. 
    //Если в параметре указать true - то страница будет прокручен, чтобы элемент появился в верхней части окна. 
    //Если же значение flase - то страница будет прокручена, чтобы элемент появился внизу окна. 
});
*/

/*
const btn = document.querySelector('.trip__title');
const block = document.querySelector('.info__title');

btn.addEventListener('click', () => {
    block.scrollIntoView({
        block: "center", 
        inline: "nearest", 
        behavior: "smooth"
    }); 
    
    //при нажатии на btn происходит прокрутка до блока block, + дополнительные опции:
    //1)  block = start, end, center (по-умолчанию), nearest - прокрутка по вертикали
    //2) inline = start, end, center, nearest (по-умолчанию) - прокрутка по горизонтали
    //3) behavior = smooth - плавность перехода

    //start = блок будет в начале окна
    //end = блок будет в конце окна
    //center = блок будет по середине окна
    //nearest = ближайший
});
*/ 


/*
const btn = document.querySelector('.trip__title');

let firstParentElement = btn.offsetParent; //возвращает родительский элемент относительно которого поцизионирован наш объект btn

// это будет ближайший предок, которые удовлетворяет следующим условиям:
// 1. есть позиционирование (position)
// 2. у родителя тег td, th или  table
// 3. если 1 и 2 не подходит, то вернет body

console.log(firstParentElement);
*/

/*
const btn = document.querySelector('.trip__title');

let leftPositionElement = btn.offsetLeft; //возвращает положение слева от родительский элемент относительно которого поцизионирован наш объект btn
let topPositionElement = btn.offsetTop; //возвращает положение сверху от родительский элемент относительно которого поцизионирован наш объект btn

console.log(leftPositionElement);
console.log(topPositionElement);
*/


/*
//Ширина и высота объекта - включает в себя и рамку, и внутренний отступ и полосу прокрутки
// если у объекта стоит display:none, то ширина и высота будут равны 0.

const btn = document.querySelector('.trip__title');

let widthElement = btn.offsetWidth; // ширина объекта btn
let heightElement = btn.offsetHeight; // высота объекта btn

console.log(widthElement);
console.log(heightElement);
*/


/*
//Отступы внутренней части объекта от внешней его части

const btn = document.querySelector('.trip__title');

let borderLeftElement = btn.clientLeft; // ширина рамки + скролла у элемента btn
let borderTopElement = btn.clientTop; // высота рамки + скролла у элемента btn
console.log(borderLeftElement);
console.log(borderTopElement);
*/



/*
//Ширина и высота элемента БЕЗ рамки и полосы прокрутки

const btn = document.querySelector('.trip__title');

let borderWidthElement = btn.clientWidth; 
let borderHeightElement = btn.clientHeight; 

console.log(borderWidthElement);
console.log(borderHeightElement);
*/



/*
//Ширина и высота элемента  + прокрученная часть 

const btn = document.querySelector('.intro');

let scrollWidthElement = btn.scrollWidth; 
let scrollrHeightElement = btn.scrollHeight;

console.log(scrollWidthElement);
console.log(scrollrHeightElement);
*/



/*
// НЕ СОВСЕМ ПОНЯЛА ПРО ЭТИ СВОЙСТВА
//Размер прокрученной области сверху и слева

const btn = document.querySelector('.trip__title');

let scrollLeftElement = btn.scrollLeft; 
let scrollTopElement = btn.scrollTop; 

console.log(scrollLeftElement);
console.log(scrollTopElement);
*/


// Координаты
// 1 ) относительно кна браузера (как position: fixed;  - т.е. отсчет идет от верхнего левого угла окна clientX/clientY)
// 2 ) относительно документа (как position: absolute; относительно body - т.е. отсчет идет от верхнего левого угла документа pageX/psgeY)




// Получить координаты относительно окна браузера
/*
const btn = document.querySelector('.trip__title');
let coordinat = btn.getBoundingClientRect();
console.log(coordinat);
*/

// Результат
// bottom: 1828.9375 - сумма значений top и height - координата нижнего края объекта относительно верхнего края окна браузера
// height: 50 - высота объекта
// left: 238  - положение левого края объекта относительно левого края окна браузера
// right: 1067.953125 - положение правого края объекта относительно левого края окна браузера
// top: 1778.9375 - положение верхнего края объекта относительно верхнего края окна браузера
// width: 829.953125 - ширина объекта
// x: 238 - равен значению x
// y: 1778.9375 - равен значению top

/*
// Вывести конкретную координату:
const btn = document.querySelector('.trip__title');
let coordinat = btn.getBoundingClientRect().top; // выведет положение верхнего края объекта относительно верхнего края окна браузера
console.log(coordinat);
*/
/*
// Получить координаты относительно документа
const btn = document.querySelector('.trip__title');
let coordinat = btn.getBoundingClientRect().top; 
let coordinatDocument = coordinat + window.pageYOffset;

console.log(coordinat); // выведет положение верхнего края объекта относительно верхнего края окна браузера
console.log(window.pageYOffset); // выведет количество прокрученных символов
console.log(coordinatDocument); //положение верхнего края объекта относительно верхнего края окна браузера + количество прокрученных символов
*/

/*
// Найти объект по заданным координатам относительно окна браузера

let elem = document.elementFromPoint(100, 300); // 100 - координата по X, 300 - координата по Y
console.log(elem);
*/  
