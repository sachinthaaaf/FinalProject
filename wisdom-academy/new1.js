// Sachintha Fernando 
// BSCP|CS|62|113 

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const elements = document.querySelectorAll('.scroll-fade-in');
    elements.forEach((element) => {
        if (isInViewport(element) && !element.classList.contains('scroll-fade-in-show')) {
            element.classList.add('scroll-fade-in-show');
        }
    });
}

window.addEventListener("scroll", handleScroll);

const scrollButton = document.getElementById("scrollUpButton");


// Show the scroll button when the user scrolls down a certain distance
window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        scrollButton.classList.add("visible");
    } else {
        scrollButton.classList.remove("visible");
    }
});

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


const chatIcon = document.getElementById("chatIcon");
const chatBox = document.getElementById("chatBox");

function toggleChatBox() {
    chatBox.classList.toggle("active");
}

function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const messageText = messageInput.value;
    
    if (messageText) {
        const chatMessages = document.getElementById("chatMessages");
        const newMessage = document.createElement("div");
        newMessage.textContent = messageText;
        newMessage.classList.add("chat-message", "sent");
        chatMessages.appendChild(newMessage);
        
        messageInput.value = "";
    }
}

// Function to check if the chat icon 
function checkChatVisibility() {
    if (window.scrollY > 300) { // Adjust the scroll position as needed
        chatIcon.classList.add("visible");
    } else {
        chatIcon.classList.remove("visible");
    }
}



window.addEventListener("scroll", checkChatVisibility);

// Initially check the chat visibility
checkChatVisibility();


