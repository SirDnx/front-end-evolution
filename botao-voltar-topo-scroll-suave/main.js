const botao = document.querySelector("#btntopo");

botao.addEventListener("click", function(){
    window.scrollTo(0,0);
});

window.addEventListener("scroll", function(){
    let scroll = botao;
    scroll.classList.toggle("active", window.scrollY > 450)
});
