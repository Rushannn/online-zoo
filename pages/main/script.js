//Burger start

const headerBtn = document.querySelector(".header__burger-btn");
const burgerMenu = document.querySelector(".burger__menu");
const popupBurger = document.querySelector(".popup__burger");

const addMenu = function () {
    burgerMenu.classList.toggle("active");
    headerBtn.classList.toggle("active")
    popupBurger.classList.toggle("active")

};

headerBtn.addEventListener("click", addMenu);
popupBurger.addEventListener("click", addMenu);

//Carousel Pet start

let items = document.querySelectorAll('.carousel-item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('active', direction);
        this.classList.add('deactive');
    })
}
function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('next', direction);
        this.classList.add('active');
        this.classList.remove('deactive')
        isEnabled = true;
    })
    animalsCards.render();
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}
function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

document.querySelector('.pet__arrow-left').addEventListener('click', function () {
    if (isEnabled) {
        previousItem(currentItem);
    }
});
document.querySelector('.pet__arrow-right').addEventListener('click', function () {
    if (isEnabled) {
        nextItem(currentItem);
    }
});

//Carousel Pet end


//Carousel Testimonials start

const elem = document.querySelector('.testimonial__scroll');
const testimonialsContayner = document.querySelector('.testimonials__cards-conteyner');

const contaynerShift = function () {
    let newValue = elem.value;
    let shiftDistance = 298;
    if (matchMedia("(max-width: 1440px)").matches) {
        shiftDistance = 318;
    }
    let shiftValue = shiftDistance * newValue
    testimonialsContayner.style.transform = `translateX(-${shiftValue}px)`
}

elem.addEventListener('input', contaynerShift)

//Carousel Testimonials end
animalsCards.render();
testimonials.render();

//PopUP testimonials start


const testimonialsArr = document.querySelectorAll('.testimonials__card');
const testimonialsPopup = document.querySelector('.testimonials__popup');
const popupCloser = document.querySelector('.testimonials__popup-close');
let testimonialsPopupCard = document.querySelector('.testimonials__popup-card');
const setPopup = function() {
    testimonialsPopup.style.display = 'block';
    testimonialsPopupCard.appendChild(this.cloneNode(true));
    console.log(this)
};
const removePopup = function() {
    testimonialsPopup.style.display = 'none';
    testimonialsPopupCard.innerHTML = '';
};

for (let i = 0; i < 3; i++) {
    if (matchMedia("(max-width: 980px)").matches) {
        testimonialsArr[i].addEventListener('click', setPopup);
    }
};

testimonialsPopup.addEventListener('click', removePopup );
popupCloser.addEventListener('click', removePopup);



//PopUP testimonials end

