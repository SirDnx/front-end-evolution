
function subtrair(){
    var m = window.document.getElementById('sinal')
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('resul')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 - n2
    m.innerHTML = '-'
    res.innerText = s
}

function Somar(){
    var m = window.document.getElementById('sinal')
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('resul')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerText = s
    m.innerHTML = '+'
}

function dividir(){
    var m = window.document.getElementById('sinal')
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('resul')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 / n2
    res.innerText = s
    m.innerHTML = '/'
}

function multiplicar(){
    var m = window.document.getElementById('sinal')
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('resul')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 * n2
    res.innerText = s
    m.innerHTML = '*'
}

function exponenciar(){
    var m = window.document.getElementById('sinal')
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('resul')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 ** n2
    res.innerText = s
    m.innerHTML = '^'
}