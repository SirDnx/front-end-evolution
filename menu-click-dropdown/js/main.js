$(document).ready(function() {
    var botao = $('.link-dropdown');
    var dropDown = $('.link-a-abrir');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
    });
});

$(document).ready(function() {
    var botao = $('.link-dropdown2');
    var dropDown = $('.link-a-abrir2');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
    });
});

$(document).ready(function() {
    var botao = $('.link-dropdown3');
    var dropDown = $('.link-a-abrir3');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
    });
});