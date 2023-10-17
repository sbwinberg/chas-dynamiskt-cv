import data from "../files/education.json" assert { type: 'json'};
const education = data['educations'];
const jobs = data['jobs'];
const menu = document.querySelector('.menu');
const cards = document.querySelectorAll('.card');
const menuItems = document.querySelectorAll('.menu-item');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
const overlay = document.querySelector('.overlay');

// Menu
function toggleMenu() {
    if(menu.classList.contains('showMenu')) {
        menu.classList.remove('showMenu');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    } else {
        menu.classList.add('showMenu');
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    }
}
hamburger.addEventListener('click', toggleMenu);

// Render education-/job-cards
function renderCards(occupation) {
    var query = "." + occupation[0].type.toString();
    var container = document.querySelector(query);
    
    for(var i = 0; i < occupation.length; i++){

        var card = document.createElement('div');
        card.className = 'card';
        card.id = occupation[i].id;

        var title = document.createElement('h4');
        title.innerHTML = occupation[i].name;

        var img = document.createElement('img');
        img.src = occupation[i].img;
        img.classList.add(occupation[i].imgClass);
        img.alt = occupation[i].name;

        var a = document.createElement('a');
        a.href = occupation[i].href;
        a.setAttribute('data-toggle', 'modal');
        a.target= "_blank"
        a.appendChild(img);

        card.appendChild(title);
        card.appendChild(a)
        container.appendChild(card);
    }
}
renderCards(education);
renderCards(jobs);
cards.forEach(btn => {
    btn.addEventListener('click', toggleModal)
})


function renderModals(education, jobs) {
    for(var i = 0; i < (education.length + jobs.length); i++){
        
    }
    var modalCard = document.createElement('div');
    modalCard.className = 'modalCard hidden';
    modalCard.id = card.id;

    var modalTitle = document.createElement('h3');
    modalTitle.textContent = 'Modal Title';

    var modalContent = document.createElement('div');
    modalContent.className = 'modalContent';

    modalCard.appendChild(modalTitle);
    modalCard.appendChild(modalContent);
    card.appendChild(modalCard);
}

function toggleModal(e) {
    if(e.target.classList.contains('hidden')){
        e.target.classList.remove('hidden');
        overlay.classList.remove('hidden');
    } else {
        e.target.classList.add('hidden');
        overlay.classList.add('hidden');
    }
};











// (async () => {
//     const response = await fetch('https://api.github.com/users/sbwinberg/repos');
//     const repoJson = await response.json();
//     console.log(repoJson);
// })();
