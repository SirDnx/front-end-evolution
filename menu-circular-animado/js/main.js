let toggle = document.querySelector('.menu__toggle');
let menu = document.querySelector('.menu');

toggle.addEventListener("click", function(){
    menu.classList.toggle('active');
})