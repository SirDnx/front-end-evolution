const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "black", "blue", "purple", "gray", "brown", "#f0f", "#f745b1"];
const btn = document.querySelector('#btn');
const color = document.querySelector('#color')


btn.addEventListener("click", () => {
    //get randow number between 0 and color array length

    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}