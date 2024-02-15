countNumber = document.getElementById("count-el");
count = +document.getElementById("count-el").innerText;


function decrementFunc(){
    count--;
    countNumber.innerText = count;
}

function resetFunc(){
    countNumber.innerText = 0;
    count = 0;
}

function increaseFunc(){  
    count++;
    countNumber.innerText = count;
}



