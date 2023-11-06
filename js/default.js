// Dropdown-menu 
//INSPIRATION FRÅN https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0
const trigger = document.querySelector('.trigger');
const nav = document.querySelector('.full-screen-nav');
const backdrop = document.querySelector('.backdrop');
trigger.addEventListener('click', () => nav.classList.add('open-nav'));
backdrop.addEventListener('click', () => nav.classList.remove('open-nav')); 


// Email-button functionality
// const mailLink = document.getElementById('email');
// function sendEmail() {
//     window.location = "mailto:emil.winberg@chasacademy.se";
// }
// mailLink.addEventListener('click', sendEmail);