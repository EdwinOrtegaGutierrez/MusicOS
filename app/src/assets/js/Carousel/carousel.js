const galleryContainers = document.querySelectorAll('.gallery-container');
const galleryControlsContainers = document.querySelectorAll('.gallery-controls');
const galleryControls = ['previous', 'next'];

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery() {
        this.carouselArray.forEach((el) => {
            for (let i = 1; i <= 5; i++) {
                el.classList.remove(`gallery-item-${i}`);
            }
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
        });
    }

    setCurrentState(direction) {
        if (direction.className === 'gallery-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach((control) => {
            const button = document.createElement('button');
            button.className = `gallery-controls-${control}`;
            button.style.color = 'white'; // Agregar esta línea para establecer el color del texto en blanco
        });
    }

    useControls() {
        const carouselContainer = this.carouselContainer.parentNode;
        carouselContainer.addEventListener('click', (e) => {
            const control = e.target.closest('.gallery-controls button');
            if (control) {
                e.preventDefault();
                this.setCurrentState(control);
            }
        });
    }
}

const carousels = [];
for (const [index, container] of galleryContainers.entries()) {
    container.dataset.galleryIndex = index;
    const galleryItems = container.querySelectorAll('.gallery-item');
    const carousel = new Carousel(container, galleryItems, galleryControls);
    carousel.setControls();
    carousel.useControls();
    carousels.push(carousel);
}
