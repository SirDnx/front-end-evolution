const openBtn = document.querySelector('#open-btn');
const overScreen = document.querySelector('#overScreen');
const closeBtn = document.querySelector('#close-btn');

openBtn.addEventListener("click", () => {
    overScreen.style.display = 'block';
});

closeBtn.addEventListener("click", () =>
{
    overScreen.style.display = 'none';
});