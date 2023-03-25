const bannerContainer = document.querySelector('.banner-container');
const bannerControlsContainer = document.querySelector('.banner-controls');
const bannerControls = ['previous', 'next'];
const bannerItems = document.querySelectorAll('.banner-item');

class Banner{
    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery(){
        this.carouselArray.forEach(el => {
            el.classList.remove('banner-item-1');
            el.classList.remove('banner-item-2');
            el.classList.remove('banner-item-3');
            el.classList.remove('banner-item-4');
            el.classList.remove('banner-item-5');
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`banner-item-${i+1}`);
        });
    }
    setCurrentState(direction){
        if (direction.className == 'banner-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls(){
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `banner-controls-${control}`;
            document.querySelector(`.banner-controls-${control}`).innerText = control;
            document.querySelector(`.banner-controls-${control}`).style.color = 'white'; // Agregar esta línea para establecer el color del texto en blanco
        });
    }

    useControls(){
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const banner = new Banner(bannerContainer, bannerItems, bannerControls);

banner.setControls();
banner.useControls();