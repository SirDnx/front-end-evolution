const btnToggle = document.querySelector('#btnToggle');
const bodyElement = document.querySelector('body');

btnToggle.addEventListener("click", () => {
    bodyElement.classList.toggle('active');
});