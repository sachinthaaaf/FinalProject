// Sachintha Fernando 
// BSCP|CS|62|113 

// Course Boxes

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const boxes = document.querySelectorAll('.box');

function handleScrollForCourseBoxes() {
    boxes.forEach((box) => {
        if (isInViewport(box) && box.style.opacity !== '1') {
            box.style.opacity = '1'; // Make the course box visible
        }
    });
}

window.addEventListener('scroll', handleScrollForCourseBoxes);

handleScrollForCourseBoxes();

// Hero Section

const homeSection = document.querySelector('.home');
homeSection.classList.add('show-h1');

// Footer
// Function to check if the footer is in the viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollForFooter() {
    const footer = document.querySelector("footer");

    if (isElementInViewport(footer) && !footer.classList.contains("visible")) {
        footer.classList.add("visible");
    }
}

window.addEventListener("scroll", handleScrollForFooter);
