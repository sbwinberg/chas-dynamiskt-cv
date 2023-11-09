// SINGLE RESPONSIBILITY FUNCTIONS FOR CARD CREATION
const setTitle = (location) => {
    const title = document.createElement('h2');
    title.innerText = location.name;
    return title;
}
const createCard = (location) => {
    const card = document.createElement('a');
    card.href = location.html_url;
    card.className = 'card media-element';
    card.target = '_blank';
    return card
}
const createCardContent = () => {
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    return cardContent;
}
const createCardBg = () => {
    const bgContainer = document.createElement('div');
    bgContainer.className = 'card-bg'
    return bgContainer
}
// RENDER COMPLETE CARDS
const renderCards = (projects) => {
    const container = document.querySelector('.project-cards');
    for(const project in projects){
        // CREATE ELEMENTS
        const card = createCard(projects[project]);
        const cardContent = createCardContent();
        const title = setTitle(projects[project]);
        const bg = createCardBg();
        // APPEND
        cardContent.appendChild(title);
        card.appendChild(bg);
        card.appendChild(cardContent);
        container.appendChild(card);
    }
}
// ASYNC FUNCTION FOR GITHUB API AND CARD RENDER
(async () => {
    const response = await fetch('https://api.github.com/users/sbwinberg/repos');
    const projects = await response.json();
    renderCards(projects);
})();

//CLICK AND DRAG SCROLL
// INSPIRATION från Kevin Powell https://codepen.io/kevinpowell/pen/ExbKBQa
const slider = document.querySelector('.media-scroller');
let isActive = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
    e.preventDefault();
    isActive = true;
    prevPageX = e.pageX;
    prevScrollLeft = slider.scrollLeft;
    slider.classList.add('active');
}
const dragStop = () =>{
    isActive = false;
    slider.classList.remove('active');
}
const dragging = (e) => {
    if(!isActive) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff;
}
const leave = () => {
    slider.classList.remove('active');
    isActive = false;
}

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mouseup", dragStop);
slider.addEventListener("mouseleave", leave);
slider.addEventListener("mousemove", dragging);


// const setBgImg = () => {
//     const cards = document.querySelectorAll('.card');
//     for(let i = 0; i < cards.length; i++) {
//         const bgContainer = document.createElement('div');
//         if(i <= 10){
//             let bgImg = `url('https://source.unsplash.com/featured/400x50${i}')`;
//             bgContainer.style.background = `${bgImg}`;
//         } else {
//             let bgImg = `url('https://source.unsplash.com/featured/400x5${i}')`;
//             bgContainer.style.background = `${bgImg}`;
//         }
//     }
// }

// function renderGalleryItem(randomNumber){
//     const imageWidth = 450;    //image width in pixels
//     const imageHeight = 500;   //image height in pixels
//     const collectionID = 928423  //Beach & Coastal, the collection ID from the original url

//     fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`)
//       .then((response) => {
//         let galleryItem = document.createElement('span');
//         galleryItem.classList.add('gallery-item');
//         galleryItem.innerHTML = `
//           <img class="gallery-image" src="${response.url}" alt="gallery image"/>
//           `
//         galleryContainer.append(galleryItem);
//     })
// }

// const renderBG = (cards) => {
//     const cards = document.querySelectorAll('.card-bg');
//     const numImagesAvailable = 988  //how many photos are total in the collection
//     const numItemsToGenerate = cards.length; //how many photos you want to display

//     for(let i=0; i < numItemsToGenerate; i++){
//         let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
//         renderGalleryItem(randomImageIndex);
//     }
// }