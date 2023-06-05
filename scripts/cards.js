class Cards {
    render() {
        let htmlCardsContayner = '';
        const deactiveCarouselItem = document.querySelector('.deactive');
        const activeCarouselCards = document.querySelector('.carousel-item.active').children;
        let invisAnimals = [];
        const setAnimals = function () {
            for (let i = 0; i < ANIMALS.length; i++) {
                let checker = true;
                for (let j = 0; j < activeCarouselCards.length; j++) {
                    if (ANIMALS[i].id == activeCarouselCards[j].dataset.id) {
                        checker = false;
                    }
                }
                if (checker) {
                    invisAnimals.push(ANIMALS[i]);
                }
            }
        }
        setAnimals();
        let n = 6;
        if (matchMedia("(max-width: 980px)").matches) {
            n = 4;
        }
        invisAnimals = invisAnimals.sort(() => Math.random() - 0.5)
        invisAnimals.forEach(({ id, name, location, imageLink, food }, index) => {
            if (n > index) {
                htmlCardsContayner += `<div class="card" data-id="${id}">
                                                <div class="photo__card"><img src="${imageLink}"
                                                alt="#"></div>
                                                <div class="animal__item">
                                                    <div class="animals__description">
                                                        <p class="animal__title">${name}</p>
                                                        <p class="animal__location">${location}</p>
                                                    </div>
                                                    <img src="${food}" alt="#"
                                                    class="animal__food">
                                                </div>
                                        </div>`;
            }
        })
        deactiveCarouselItem.innerHTML = '';
        deactiveCarouselItem.innerHTML = htmlCardsContayner;
    }
}

const animalsCards = new Cards();