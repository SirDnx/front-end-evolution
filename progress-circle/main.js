const btn = document.querySelector('#btn');

btn.addEventListener("click", function(){
    var circle = document.querySelector('#circleProgress');
    var numberPercent = document.querySelector('#numberPercent').value;
    document.querySelector('.number').innerHTML = numberPercent + '%';
    circle.style.strokeDashoffset = 440 - (440 * numberPercent) / 100;
})