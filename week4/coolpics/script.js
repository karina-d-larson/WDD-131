let selectElem = document.querySelector('.menu-btn');
let nav = document.querySelector("nav");
const gallery = document.querySelector('.photoContent');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
// const Figure


// Menu functionality 
document.addEventListener('DOMContentLoaded', hidemenu);
selectElem.addEventListener('click', unhidemenu);

function hidemenu(){
    nav.classList.toggle("hide");
}

function unhidemenu(){
    nav.classList.toggle("hide");
}           

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
// Code to show modal  - Use event parameter 'e'   
    if(e.target.tagName != 'IMG'){
        // console.log('SKIP')
        return
    }
    else{
        modalImage.src = e.target.src.replace("sm","full");
        modal.showModal();
    }
}

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        modal.close()
    }
});
