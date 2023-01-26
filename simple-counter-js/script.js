let count = 0;

const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn'); 

buttons.forEach( item => {
    item.addEventListener("click", (e) => {
        
        const buttonFunction = e.currentTarget.getAttribute("data-btn");

        if(buttonFunction === 'decrease'){
            count--;
        }else if(buttonFunction === 'reset'){
            count = 0;
        }else{
            count++
        }

        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count === 0){
            value.style.color = 'white';
        }
        value.textContent = count;
    });
});
