
document.addEventListener("DOMContentLoaded", () => {
const links = document.querySelectorAll(".nav .menu ul li a");

links.forEach(link => {
if (link.href === window.location.href) {
    link.classList.add("active");
}
});
});
document.addEventListener("DOMContentLoaded", () => {
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav .menu");

menuToggle.addEventListener("click", () => {
menu.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.classList.remove("active");
}
});
});
document.addEventListener("DOMContentLoaded", () => {
const carousel = document.querySelector(".second-section");
const items = document.querySelectorAll(".second-section div");
const prevButton = document.querySelector(".prev-arrow");
const nextButton = document.querySelector(".next-arrow");

let index = 0;
const totalSlides = items.length - 3; 
let autoScroll;

function updateCarousel() {
const container = document.querySelector(".second-section-container");
const itemWidth = container.offsetWidth; 
carousel.style.transform = `translateX(-${index * itemWidth}px)`;

prevButton.style.display = index === 0 ? "none" : "block";
nextButton.style.display = index >= totalSlides ? "none" : "block";
}

function nextSlide() {
if (index < totalSlides) {
    index++;
} else {
    index = 0; 
}
updateCarousel();
}

function startAutoScroll() {
if (window.innerWidth <= 1024) { // Only auto-scroll if screen width is <= 1024px
    clearInterval(autoScroll);
    autoScroll = setInterval(nextSlide, 5000);
} else {
    clearInterval(autoScroll); // Stop auto-scroll on larger screens
}
}

nextButton.addEventListener("click", () => {
clearInterval(autoScroll);
nextSlide();
startAutoScroll(); 
});

prevButton.addEventListener("click", () => {
clearInterval(autoScroll);
if (index > 0) {
    index--;
} else {
    index = totalSlides;
}
updateCarousel();
startAutoScroll();
});

window.addEventListener("resize", startAutoScroll); 

updateCarousel(); 
startAutoScroll(); 
});

document.addEventListener("DOMContentLoaded", () => {
const observerOptions = {
threshold: 0.1, // Trigger when 10% visible
rootMargin: "0px 0px -50px 0px" // Adjust root margin
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('active');
}
});
}, observerOptions);

// Observe all elements with .fade-up class
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});
