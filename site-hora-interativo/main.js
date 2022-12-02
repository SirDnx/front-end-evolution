var intervalo = window.setInterval(() => {carregar()}, 1000)

function carregar(){

    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var dia = data.getDay()

    if(hora >= 0 && hora < 6){
        var saudacao
         = "Boa madrugada!"
        img.src = 'img/madrugada.png'
        document.body.style.background = '#1e3338'
    }else if(hora < 12){
        var saudacao
         = "Bom dia!"
        img.src = 'img/imgmanha.png'
        document.body.style.background = '#fdd037'
    }else if(hora < 18){
        var saudacao
         = "Boa tarde!"
        img.src = 'img/imgtarde.png'
        document.body.style.background = '#ce3800'
    }else{
        var saudacao
         = "Boa noite!"
        img.src = 'img/imgnoite.png'
        document.body.style.background = '#41334d'
    }

    if(hora < 10){
        hora = '0' + hora
    }

    if(minutos < 10){
        minutos = '0' + minutos
    }

    switch(dia){
        case 0:
            diaSem = "Domingo"
            break
        case 1:
            diaSem = "Segunda-feira"
            break
        case 2:
            diaSem = "Terça-feira"
            break
        case 3:
            diaSem = "Quarta-feira"
            break
        case 4:
            diaSem = "Quinta-feira"
            break
        case 5:
            diaSem = "Sexta-feira"
            break
        default:
            diaSem = "Sábado"
    }

    msg.innerHTML = `Agora é ${hora}:${minutos} de ${diaSem}. ${saudacao
    }`  

}