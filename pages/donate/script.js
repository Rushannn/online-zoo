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


const donationInputs = document.querySelectorAll('.donation__progress input');
const inputMoney = document.querySelector('.input__money');
const setMoney = function () {
    inputMoney.setAttribute('value', '');
    inputMoney.value = this.id;
};
const removeChecked = function () {
    for (let i = 0; i < donationInputs.length; i++){
        donationInputs[i].checked = false;
    }
}
const writeMoney = function () {
    if (inputMoney.value.length > 4) {
        inputMoney.value = inputMoney.value.slice(0, 4);
    }
    removeChecked();
    for (let i = 0; i < donationInputs.length; i++) {
        if (inputMoney.value === donationInputs[i].id) {
            donationInputs[i].checked = true;
        }
    }
}



for (let i = 0; i < donationInputs.length; i++) {
    donationInputs[i].addEventListener('click', setMoney);
}

inputMoney.addEventListener('input', writeMoney);