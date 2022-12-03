const mario = document.querySelector('#mario');
const tubo = document.querySelector('#tubo');
const nuvens = document.querySelector('#nuvens');

const pulo = () => {
    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500);
}

const loop = setInterval(() => {
    
    const tuboPosicao = tubo.offsetLeft;
    const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px', '');
    const nuvensPosicao = nuvens.offsetLeft;

    if(tuboPosicao <= 115 && tuboPosicao > 0 && marioPosicao < 75){

        tubo.style.animation = 'none'; 
        tubo.style.left = `${tuboPosicao}px`; 

        mario.style.animation = 'none'; 
        mario.style.bottom = `${marioPosicao}px`; 

        mario.src = './img/game-over.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '45px';

        nuvens.style.animation = 'none';
        nuvens.style.left = `${nuvensPosicao}px`;

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', pulo);