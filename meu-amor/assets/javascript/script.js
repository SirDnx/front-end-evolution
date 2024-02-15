function scape(){
    var noButton = document.getElementById("no")

    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var maxX = windowWidth - noButton.offsetWidth;
    var maxY = windowHeight - noButton.offsetHeight;

    var randomX = Math.floor(Math.random() * (maxX - 400));
    var randomY = Math.floor(Math.random() * (maxY - 400));

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}