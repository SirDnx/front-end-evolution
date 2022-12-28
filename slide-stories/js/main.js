class SlideStories{
    constructor(id){
        this.slide = document.querySelector(`[data-slide="${id}"]`);
        this.active = 0;
        // this.activeSlide(0);
        this.init();
    }

    activeSlide(index){
        this.active = index;
        this.items.forEach((item) => item.classList.remove('active'));
        this.items[index].classList.add('active');
        this.imagemItens.forEach((item) => item.classList.remove('active'));
        this.imagemItens[index].classList.add('active');
        this.autoSlide();
    }

    prev(){
        if(this.active > 0){
            this.activeSlide(this.active - 1);
        }else{
            this.activeSlide(this.items.length - 1);
        }
    }

    next(){
        if(this.active < this.items.length - 1){
            this.activeSlide(this.active + 1);
        }else{
            this.activeSlide(0);
        }
    }

    addNavigation(){
        const nextBtn = this.slide.querySelector('.slide--next');
        const prevBtn = this.slide.querySelector('.slide--prev');
        nextBtn.addEventListener('click', this.next);
        prevBtn.addEventListener('click', this.prev);
    }

     addImagemItens(){
         this.items.forEach(() => (this.imagem.innerHTML += `<span></span>`));
         this.imagemItens = Array.from(this.imagem.children);
         console.log(this.imagemItens)
    }

    autoSlide(){
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.next, 5000);
    }

    init(){
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.items = this.slide.querySelectorAll('.slide__itens > *');
        this.imagem = this.slide.querySelector('.slide--imagem');
        this.addImagemItens();
        this.activeSlide(0);
        this.addNavigation();
    }
}

new SlideStories('slide');