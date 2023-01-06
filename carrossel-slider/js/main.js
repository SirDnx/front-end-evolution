const slider = document.querySelectorAll('.slider');
const btnPrev = document.querySelector('#prev-button');
const btnNext = document.querySelector('#next-button'); 

let currentSlide = 0;

slider[currentSlide].classList.add('active');

function hideSlider(){
    slider.forEach(item => item.classList.remove('active'));
}

function showSlider() {
    slider[currentSlide].classList.add('active');
}

function nextSlider(){
    hideSlider();
    if(currentSlide === slider.length - 1){
        currentSlide = 0;
    }else{
        currentSlide++
    }
    showSlider();
}

function prevSlider(){
    hideSlider();
    if(currentSlide === 0){
        currentSlide = slider.length - 1;
    }else{
        currentSlide--
    }
    showSlider();
}


btnNext.addEventListener("click", () => {
    nextSlider();
});

btnPrev.addEventListener("click", () => {
    prevSlider();
});

