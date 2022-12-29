const readMoreButton = document.querySelector('#readmore');
const card = document.querySelector('.card');


readMoreButton.addEventListener('click', function(){
    card.classList.toggle('active');

    if(card.classList.contains('active')){
        return readMoreButton.textContent = 'Read Less';
    }else{
        return readMoreButton.textContent = 'Read More';
    }
});