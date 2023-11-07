// GITHUB REPO API
const setTitle = (location) => {
    const title = document.createElement('h2');
    title.innerText = location.name;
    return title;
}
const setLink = (location) => {
    const link = document.createElement('a');
    link.href = location.html_url;
    link.target = '_blank';
    // link.appendChild(img);
    return link;
}

(async () => {
    const response = await fetch('https://api.github.com/users/sbwinberg/repos');
    const projects = await response.json();
    const container = document.querySelector('.project-cards');
    for(const project in projects){
        const card = document.createElement('div');
        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';
        card.className = 'card media-element';

        //  hover-frame till senare
        const title = setTitle(projects[project]);
        const link = setLink(projects[project])

        cardContent.appendChild(title);
        cardContent.appendChild(link);
        card.appendChild(cardContent);
        container.appendChild(card);
    }

    const cards = document.querySelectorAll('.card');
    for(let i = 0; i < cards.length; i++) {
        console.log(`https://unsplash.com/collections/592563/${i}`)
        if(i <= 10){
            let bgImg = `url('https://source.unsplash.com/featured/400x50${i}')`;
            cards[i].style.background = `${bgImg}`;

        } else {
            let bgImg = `url('https://source.unsplash.com/featured/400x5${i}')`;
            cards[i].style.background = `${bgImg}`;
        }
        cards[i].style.opacity = 1;
        cards[i].style.backgroundRepeat = 'no-repeat';
        cards[i].style.backgroundSize = 'cover';
        cards[i].style.backgroundPosition = 'center';
    }
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

// PROJECT CARDS
