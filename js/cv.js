import data from "../files/education.json" assert { type: 'json'};


const createModal = ((data) => {
    const modal = document.createElement('dialog');
    modal.className = 'modal' + ' '  + (data.id.toString());
    modal.setAttribute("data-modal", '');

    const title = document.createElement('h3');
    title.innerHTML = data.name;

    const subject = document.createElement('h6');
    subject.innerHTML = data.subject;

const setImg = (location) => {
    const img = document.createElement('img');
    img.src = data.img;
    img.classList.add(data.imgClass);
    img.alt = data.name;

    const link = document.createElement('a');
    link.href = data.href;
    link.target = '_blank';
    link.appendChild(img);

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
    
    modal.appendChild(title);
    modal.appendChild(subject);
    modal.appendChild(link);
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
            card.className = 'card hover-frame';
            card.setAttribute("data-open-modal", '');
            card.addEventListener("click", () => {
                modal.showModal();
                modal.style.display = 'flex';
            })
    
            const title = document.createElement('h4');
            title.innerHTML = data[occupation][key].name;
    
            const img = document.createElement('img');
            img.src = data[occupation][key].img;
            img.classList.add(data[occupation][key].imgClass);
            img.alt = data[occupation][key].name;

            const modal = createModal(data[occupation][key])

            card.appendChild(title);
            card.appendChild(img);
            container.appendChild(card);
            container.appendChild(modal);
        }
    }
})(data);


