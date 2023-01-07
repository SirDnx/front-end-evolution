let stars = document.querySelector('#stars');
let moon = document.querySelector('#moon');
let mountainsBehind = document.querySelector('#mountains_behind');
let textTitle = document.querySelector('#text');
let buttonExplore = document.querySelector('#btn');
let mountainsFront = document.querySelector('#mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    stars.style.left = (value * 0.25) + 'px';
    moon.style.top = (value * 1.25) + 'px';
    mountainsBehind.style.top = (value * 0.5) + 'px';
    mountainsFront.style.top = (value * 0) + 'px';
    textTitle.style.marginRight = (value * 4) + 'px';
    textTitle.style.marginTop = (value * 1.5) + 'px';
    buttonExplore.style.marginTop = (value * 1.5) + 'px';
    header.style.top = (value * 0.5) + 'px';
});

