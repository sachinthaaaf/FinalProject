//  Sachintha Fernando 
//  BSCP|CS|62|113 

new Vue({
    el: '#counter',
    methods: {
        countValue: function (endValue) {
            const duration = 5000; // Total duration for counting in milliseconds
            let startValue = 0;
            let totalSteps = Math.abs(endValue - startValue);
            let increment = Math.ceil(endValue / (duration / 1000));
            let stepDuration = duration / totalSteps;

            let counter = setInterval(() => {
                startValue += increment;
                if (startValue >= endValue) {
                    startValue = endValue; // Ensure the final value is exact
                    clearInterval(counter);
                }
            }, stepDuration);

            return startValue;
        }
    }
});

const counterSection = document.querySelector('#counter');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, 
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            startCounterAnimation();
            observer.unobserve(entry.target);
        }
    });
}, options);


observer.observe(counterSection);



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

    // Trigger the animation
    targetElement.classList.add('increase');
    updateCounter();
}

// Initialize Intersection Observer
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

new Vue({
    el: '#trainer',
    data() {
        return {
            currentTrainerIndex: 0,
            trainers: [],
        };
    },
    methods: {
        fadeOut() {
            this.currentTrainerIndex = (this.currentTrainerIndex + 1) % this.trainers.length;
        },
    },
    computed: {
        currentTrainer() {
            return this.trainers[this.currentTrainerIndex];
        },
    },
});

