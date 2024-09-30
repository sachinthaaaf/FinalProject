//  Sachintha Fernando 
//  BSCP|CS|62|113 


let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonials-col');
const dots = document.querySelectorAll('.dot');
let intervalId; 

function updateDots(activeIndex) {
    dots.forEach((dot, index) => {
        if (index === activeIndex || index === (activeIndex + 1)) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function showTestimonials(startIndex) {
    for (let i = 0; i < testimonials.length; i++) {
        if (i === startIndex || i === (startIndex + 1)) {
            testimonials[i].style.display = 'block';
        } else {
            testimonials[i].style.display = 'none';
        }
    }
}

function scrollTestimonials() {
    currentIndex = (currentIndex + 2) % testimonials.length;
    showTestimonials(currentIndex);
    updateDots(currentIndex);
}


showTestimonials(currentIndex);
