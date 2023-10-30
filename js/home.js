(async () => {
    const response = await fetch('https://api.github.com/users/sbwinberg/repos');
    const repoJson = await response.json();
    console.log(repoJson);
})();


//CLICK AND DRAG SCROLL
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