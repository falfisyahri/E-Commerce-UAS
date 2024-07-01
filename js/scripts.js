let slideIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.slides .slide');
    if (index >= slides.length) {
        slideIndex = 0;
    }
    if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === slideIndex) {
            slide.classList.add('active');
        }
    });
}

function slideNext() {
    slideIndex++;
    showSlides(slideIndex);
}

function slidePrev() {
    slideIndex--;
    showSlides(slideIndex);
}

document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    setInterval(() => {
        slideNext();
    }, 3000); // Change slide every 3 seconds
});
