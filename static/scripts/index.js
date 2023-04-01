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
            const controlsContainer = galleryControlsContainers[this.carouselContainer.dataset.galleryIndex];
            controlsContainer.appendChild(button);
        });
    }

    useControls() {
        const triggers = [...this.carouselContainer.parentNode.querySelectorAll('.gallery-controls button')];
        triggers.forEach((control) => {
            control.addEventListener('click', (e) => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const carousels = [];

galleryContainers.forEach((container, index) => {
    container.dataset.galleryIndex = index; // agregar un atributo de índice para identificar la galería actual
    const carousel = new Carousel(container, container.querySelectorAll('.gallery-item'), galleryControls);
    carousel.setControls();
    carousel.useControls();
    carousels.push(carousel);
});
