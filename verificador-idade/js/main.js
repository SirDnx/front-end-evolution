function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("Ano inválido, tente novamente!")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        if(fsex[0].checked){
            
            if(idade >= 0 && idade <= 14){
                genero = 'um menino'
                img.setAttribute('src', 'img/garoto.png')
            }else if(idade <= 21){
                genero = 'um adolescente'
                img.setAttribute('src', 'img/adolescente_menino.png')
            }else if(idade < 60){
                genero = 'um adulto'
                img.setAttribute('src', 'img/adulto_homem.png')
            }else{
                genero = 'um idoso'
                img.setAttribute('src', 'img/idoso.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
                if(idade >= 0 && idade <= 14){
                    genero = 'uma menina'
                    img.setAttribute('src', 'img/garota.png')
                }else if(idade <= 21){
                    genero = 'uma adolescente'
                    img.setAttribute('src', 'img/adolescente_menina.png')
                }else if(idade < 60){
                    genero = 'uma adulta'
                    img.setAttribute('src', 'img/adulto_mulher.png')
                }else{
                    genero = 'uma idosa'
                    img.setAttribute('src', 'img/idosa.png')
                }
        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`
        res.appendChild(img)
    }


}