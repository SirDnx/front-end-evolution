const search = document.querySelector('.search');
const icon = document.querySelector('.icon');
const clearButton = document.querySelector('#clearButton');

icon.addEventListener("click", () => {
    search.classList.toggle('active');
});

clearButton.addEventListener("click", () => {
    const mySearch = document.querySelector('#mySearch').value = '';
    

});