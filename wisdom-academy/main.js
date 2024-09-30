//  Sachintha Fernando 
//   BSCP|CS|62|113


document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const mobileNavbar = document.querySelector('.mobile-navbar');

    menuIcon.addEventListener('click', function () {
        mobileNavbar.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });
});


// Courses Toggle
document.addEventListener("DOMContentLoaded", function () {
    showSection(1);
});

function showSection(sectionNumber) {
    var sections = document.querySelectorAll('.section');
    var links = document.querySelectorAll('.text-left a');

    sections.forEach(function (section) {
        section.style.display = 'none';
    });

    links.forEach(function (link) {
        link.classList.remove('active');
    });

    var selectedSection = document.querySelector('.section:nth-of-type(' + sectionNumber + ')');
    var selectedLink = document.querySelector('.text-left a:nth-of-type(' + sectionNumber + ')');

    if (selectedSection && selectedLink) {
        selectedSection.style.display = 'block';
        selectedLink.classList.add('active');
    }
}

// Login
document.addEventListener("DOMContentLoaded", function () {
    // Find the form
    const loginForm = document.querySelector("form");


    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        window.location.href = "successful.html";
    });
});


// Countdown In Successful page 
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.endsWith("successful.html")) {
        setTimeout(function () {
            window.location.href = "index.html";
        }, 5000); 

        let countdownElement = document.getElementById("countdown");
        let countdownTime = 5; 

        let countdownInterval = setInterval(function () {
            countdownTime--;
            countdownElement.textContent = countdownTime;

            if (countdownTime === 0) {
                clearInterval(countdownInterval);
            }
        }, 1000); 
    }
});


// Function to handle the intersection callback
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            
            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    root: null, 
    rootMargin: '0px',
    threshold: 0.3, 
});


const aboutSection = document.getElementById("about-section");
observer.observe(aboutSection);


// Counter

function animateCounter(targetElement) {
    const finalValue = parseInt(targetElement.dataset.val);
    const duration = 2000; // 2 seconds
    const step = Math.ceil(finalValue / (duration / 16));

    let currentValue = 0;

    const updateCounter = () => {
        if (currentValue < finalValue) {
            currentValue += step;
            targetElement.textContent = currentValue.toString().padStart(3, '0');
            requestAnimationFrame(updateCounter);
        } else {
            targetElement.textContent = finalValue.toString().padStart(3, '0');
            targetElement.classList.remove('increase');
        }
    };

    targetElement.classList.add('increase');
    updateCounter();
}

const observe = new IntersectionObserver((entries, observe) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const counterElements = entry.target.querySelectorAll('.num');
            counterElements.forEach((element) => {
                animateCounter(element);
            });
            observe.unobserve(entry.target);
        }
    });
});

const counterSections = document.querySelectorAll(".counter");

counterSections.forEach((section) => {
    observe.observe(section);
});
