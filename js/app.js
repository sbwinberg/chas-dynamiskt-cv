import data from "../files/education.json" assert { type: 'json'};
const menu = document.querySelector('.menu');
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

const renderCards = ((data) => {
    for(const occupation in data){
        var query = "." + data[occupation][0].type.toString();
        var container = document.querySelector(query);

        for(const key in data[occupation]){
            var card = document.createElement('div');
            card.className = 'card';
            card.id = data[occupation][key].id;
    
            var title = document.createElement('h4');
            title.innerHTML = data[occupation][key].name;
    
            var img = document.createElement('img');
            img.src = data[occupation][key].img;
            img.classList.add(data[occupation][key].imgClass);
            img.alt = data[occupation][key].name;
    
            card.appendChild(title);
            card.appendChild(img);
            container.appendChild(card);
        }
    }
})(data);

const renderModals = ((data) => {
    for(var occupation in data){
        console.log(occupation);
        const modals = document.querySelector('.modals');

        for(var key in data[occupation]){
            var modalCard = document.createElement('div');
            modalCard.className = 'modalCard hidden';
            modalCard.id = key;

            var modalTitle = document.createElement('h3');
            modalTitle.innerText = data[occupation][key].name;

            var modalLogo = document.createElement('img');
            modalLogo.src = data[occupation][key].img;
            modalLogo.classList.add(data[occupation][key].imgClass);
            modalLogo.alt = data[occupation][key].name;

            var modalContent = document.createElement('div');
            // modalContent.innerText = data[occupation][key].description;
            modalContent.innerText = 'Heyheyhey!';

            modalCard.appendChild(modalTitle);
            console.log(modalTitle);

            modalCard.appendChild(modalLogo);
            console.log(modalLogo);

            modalCard.appendChild(modalContent);
            console.log(modalContent);

            modals.appendChild(modalCard);
        }
    }
})(data);





// function toggleModal(e) {
//     if(e.target.classList.contains('hidden')){
//         e.target.classList.remove('hidden');
//         overlay.classList.remove('hidden');
//     } else {
//         e.target.classList.add('hidden');
//         overlay.classList.add('hidden');
//     }
// };


// (async () => {
//     const response = await fetch('https://api.github.com/users/sbwinberg/repos');
//     const repoJson = await response.json();
//     console.log(repoJson);
// })();
