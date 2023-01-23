const form = document.querySelector('#form');
const changeColorBtn = document.querySelectorAll('[data-button]');
const btnEnter = document.querySelector('#btnEnter');
const title = document.querySelector('#title');

console.log(changeColorBtn);

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    console.log(evento.target.elements.user.value);

    evento.target.elements.user.value = '';
    evento.target.elements.password.value = '';
});

changeColorBtn.forEach((item) => {
    item.addEventListener("click", () => {
        changeColor(item.getAttribute('data-button'))
    })
});

function changeColor(color){
    document.body.style.background = color;
    btnEnter.style.background = color;
    title.style.borderColor = color;

    changeColorBtn.forEach(function(item){
        item.classList.remove('active') 
    });
    event.target.classList.add('active');
}