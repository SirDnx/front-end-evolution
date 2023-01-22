const entradaInput = document.querySelector('#entrada');

entradaInput.addEventListener("click", (e) =>{

    e.preventDefault();

    let nacionalidade = window.document.querySelector('#txt0');
    let resultado = window.document.querySelector('#resulnacio');
    resultado.innerHTML = 'Sua nacionalidade é ' + nacionalidade.value;

});
