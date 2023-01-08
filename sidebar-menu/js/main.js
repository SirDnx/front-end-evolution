let list = document.querySelectorAll('.list');
let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');

list.forEach( item => {
    item.addEventListener("click", function() {
        let j = 0;
        while(j<list.length){
            list[j++].className = 'list';
        }
        item.className = 'list active';
    })
});

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
});