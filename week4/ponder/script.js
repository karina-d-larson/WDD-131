let selectElem = document.querySelector('.menu-btn');
let nav = document.querySelector("nav");
let button = document.querySelector("button");

selectElem.addEventListener('click', unhidemenu);


function unhidemenu(){
    nav.classList.toggle("active");
    button.classList.toggle("active");
}           
                    