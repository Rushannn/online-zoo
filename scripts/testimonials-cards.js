class Testimonials {
    render() {
        let htmlTestimonials = '';
        const testimonialsContayner = document.querySelector('.testimonials__cards-conteyner');
        TESTIMONIALS.forEach(({ id, name, imageLink, location, date, text }, index) => {
            htmlTestimonials += `<div class="testimonials__card" data-id="${id}">
                                    <div class="author__info">
                                        <img src="${imageLink}" alt="face1" class="author__image">
                                        <div class="author__description">
                                            <p class="author__name"> ${name}
                                                <p class="author__location">${location} • ${date}</p>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="testimonial__text">
                                        <p>${text}
                                        </p>
                                    </div>
                                    <div class ="testimonials__popup-close">X</div>
                                </div>`
        })
        testimonialsContayner.innerHTML ='';
        testimonialsContayner.innerHTML = htmlTestimonials;
    }
}
const testimonials = new Testimonials();