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



const createModal = ((data) => {
    const modal = document.createElement('dialog');
    modal.className = 'modal' + ' '  + (data.id.toString());
    modal.setAttribute("data-modal", '');
    // card.id = data[occupation][key].id;

    const title = document.createElement('h3');
    title.innerHTML = data.name;

    const img = document.createElement('img');
    img.src = data.img;
    img.classList.add(data.imgClass);
    img.alt = data.name;

    const timeSpan = document.createElement('h5');
    timeSpan.innerHTML = data.yearStart + ' - ' + data.yearEnd;

    const description = document.createElement('p');
    description.className = 'description';
    description.innerHTML = data.description;

    const closeButton = document.createElement('button');
    closeButton.className = 'close material-icons md-36';
    closeButton.setAttribute("data-close-modal", "");
    closeButton.innerHTML = 'close';

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
    

    modal.appendChild(title);
    modal.appendChild(img);
    modal.appendChild(timeSpan);
    modal.appendChild(description);
    modal.appendChild(closeButton);
    return modal;
});


// Cards
const renderCards = ((data) => {
    for(const occupation in data){
        const query = "." + data[occupation][0].type.toString(); // .education or .jobs
        const container = document.querySelector(query);

        for(const key in data[occupation]){
            const card = document.createElement('button');
            card.className = 'card' + ' '  + (data[occupation][key].id.toString());
            card.setAttribute("data-open-modal", '');
            card.addEventListener("click", () => {
                modal.showModal();
                modal.style.display = 'flex';
            })
            // card.id = data[occupation][key].id;
    
            const title = document.createElement('h4');
            title.innerHTML = data[occupation][key].name;
    
            const img = document.createElement('img');
            img.src = data[occupation][key].img;
            img.classList.add(data[occupation][key].imgClass);
            img.alt = data[occupation][key].name;
            console.log(data[occupation][key].id);

            const modal = createModal(data[occupation][key])

            card.appendChild(title);
            card.appendChild(img);
            container.appendChild(card);
            container.appendChild(modal);
        }
    }
})(data);


// Modal customization
// const openButton = document.querySelectorAll("[data-open-modal]")
// const closeButton = document.querySelector("[data-close-modal]");
// const modal = document.querySelector("[data-modal");


// modal.addEventListener("click", e => {
//     const dialogDimensions = modal.getBoundingClientRect();
//     if (
//         e.clientX < dialogDimensions.left ||
//         e.clientX > dialogDimensions.right || 
//         e.clientY < dialogDimensions.top ||
//         e.clientY > dialogDimensions.bottom
//     ) {
//         modal.close();
//         modal.style.display = 'none'
//     }
// })



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
