const button = document.querySelector("#btntop");

button.addEventListener("click", function(){
    window.scrollTo(0,0);
});

window.addEventListener("scroll", function(){
    let scroll = button;
    scroll.classList.toggle("active", window.scrollY > 450)
});
