import data from "../files/education.json" assert { type: 'json'};
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');


function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if(e.target.matches(selector)) callback(e);
    })
}
// Buttons and menu


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


// Cards
const renderCards = ((data) => {
    for(const occupation in data){
        var query = "." + data[occupation][0].type.toString();
        var container = document.querySelector(query);

        for(const key in data[occupation]){
            var card = document.createElement('button');
            card.className = 'card' + ' '  + (data[occupation][key].id.toString());
            card.setAttribute("data-open-modal", '');
            // card.id = data[occupation][key].id;
    
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


// Modal customization
const openButton = document.querySelectorAll("[data-open-modal]")
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal");

openButton.forEach((btn) => {
    btn.addEventListener("click", () => {
        modal.showModal();
        modal.style.display = 'flex';
    })
})

closeButton.addEventListener("click", () => {
    modal.close();
    modal.style.display = 'none'
})

modal.addEventListener("click", e => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right || 
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        modal.close();
        modal.style.display = 'none'
    }
})



// const renderModals = ((data) => {
//     for(const occupation in data){
//         const modals = document.querySelector('.modals');
//         for(const key in data[occupation]){
//             var modal = document.createElement('dialog');
//             // modalCard.className = 'modal hidden' + ' ' + (key.toString());
//             // modalCard.id = 'modal' + key;
//             modal.setAttribute('data-modal');


//             var modalTitle = document.createElement('h3');
//             modalTitle.innerText = data[occupation][key].name;

//             var modalLogo = document.createElement('img');
//             modalLogo.src = data[occupation][key].img;
//             modalLogo.classList.add(data[occupation][key].imgClass);
//             modalLogo.alt = data[occupation][key].name;

//             var modalContent = document.createElement('div');
//             // modalContent.innerText = data[occupation][key].description;
//             modalContent.innerText = 'Heyheyhey!';

//             modalCard.appendChild(modalTitle);
//             modalCard.appendChild(modalLogo);
//             modalCard.appendChild(modalContent);
//             modals.appendChild(modal);
//         }
//     }
// })(data);




// const toggleModal = (e) => {
//     if(e.target.classList.contains('hidden')){
//         e.target.classList.remove('hidden');
//         overlay.classList.remove('hidden');
//     } else {
//         e.target.classList.add('hidden');
//         overlay.classList.add('hidden');
//     }
// };
// addGlobalEventListener('click', 'card', toggleModal);


// (async () => {
//     const response = await fetch('https://api.github.com/users/sbwinberg/repos');
//     const repoJson = await response.json();
//     console.log(repoJson);
// })();
