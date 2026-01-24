let selectElem = document.querySelector('.menu-btn');
let nav = document.querySelector("nav");

document.addEventListener('DOMContentLoaded', hidemenu);
selectElem.addEventListener('click', unhidemenu);


function hidemenu(){
    nav.classList.toggle("hide");
}

function unhidemenu(){
    nav.classList.toggle("hide");
}           
                    