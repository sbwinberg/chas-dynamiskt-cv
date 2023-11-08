import data from "../files/education.json" assert { type: 'json'};

const setImg = (location) => {
    const img = document.createElement('img');
    img.src = location.img;
    img.classList.add(location.imgClass);
    img.alt = location.name;
    return img;
}
const setTitle = (location) => {
    const title = document.createElement('h2');
    title.innerText = location.name;
    return title;
}
const setSubject = (location) => {
    const subject = document.createElement('h5');
    subject.innerHTML = location.subject;
    return subject;
}
const setLink = (location, img) => {
    const link = document.createElement('a');
    link.href = location.href;
    link.target = '_blank';
    link.appendChild(img);
    return link;
}
const setTimespan = (location) => {
    const timeSpan = document.createElement('h5');
    timeSpan.innerHTML = location.yearStart + ' - ' + location.yearEnd;
    return timeSpan;
}
const setDescription = (location) => {
    const description = document.createElement('p');
    description.className = 'description';
    description.innerHTML = location.description;
    return description;
}
const addCloseButton = (modal) => {
    const closeButton = document.createElement('button');
    closeButton.className = 'close material-icons md-36';
    closeButton.setAttribute("data-close-modal", "");
    closeButton.innerHTML = 'close';
    closeButton.addEventListener("click", () => {
        modal.close();
        modal.style.display = 'none'
    });
    return closeButton;
}

const createModal = ((data) => {
    const modal = document.createElement('dialog');
    modal.setAttribute("data-modal", '');
    const title = setTitle(data)
    const subject = setSubject(data);
    const img = setImg(data)
    const link = setLink(data, img);
    const timeSpan = setTimespan(data);
    const description = setDescription(data);
    const closeButton = addCloseButton(modal);
    modal.appendChild(title);
    modal.appendChild(subject);
    modal.appendChild(link);
    modal.appendChild(timeSpan);
    modal.appendChild(description);
    modal.appendChild(closeButton);
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
    });
    return modal;
});


// Cards
const renderCards = ((data) => {
    for(const occupation in data){
        const query = "." + data[occupation][0].type.toString(); // .education or .jobs
        const container = document.querySelector(query);

        for(const key in data[occupation]){
            const card = document.createElement('button');
            card.className = 'card hover-frame';
            card.setAttribute("data-open-modal", '');
            card.addEventListener("click", () => {
                modal.showModal();
                modal.style.display = 'flex';
            })

            const title = setTitle(data[occupation][key])
            const img = setImg(data[occupation][key]);
            const modal = createModal(data[occupation][key])
            card.appendChild(title);
            card.appendChild(img);
            container.appendChild(card);
            container.appendChild(modal);
        }
    }
})(data);

