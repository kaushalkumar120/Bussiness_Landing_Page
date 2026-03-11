const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
navLinks.classList.toggle('active');
});


window.addEventListener('scroll', () => {

const navbar = document.querySelector('.navbar');

if (window.scrollY > 50) {
navbar.style.background = "rgba(255,255,255,0.95)";
}
else {
navbar.style.background = "#fff";
}

});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function (e) {

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});

});

});


const form = document.querySelector('.contact-form');

form.addEventListener('submit', function(e){

e.preventDefault();

alert("Message sent successfully!");

form.reset();

});