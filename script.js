document.addEventListener('DOMContentLoaded', function () {
    const splide = new Splide('.updates__slider', {
        type: 'slide',
        perPage: 4,
        perMove: 4,
        gap: '30px',
        arrows: false,
        pagination: true,
    }).mount();

    const prevButton = document.querySelector('.updates__arrow--prev');
    const nextButton = document.querySelector('.updates__arrow--next');

    function updateArrowStyles() {
        const currentIndex = splide.index;
        const lastIndex = splide.Components.Controller.getEnd();

        if (currentIndex === 0) {
            prevButton.classList.add('updates__arrow--inactive');
            prevButton.classList.remove('updates__arrow--active');
        } else {
            prevButton.classList.add('updates__arrow--active');
            prevButton.classList.remove('updates__arrow--inactive');
        }

        if (currentIndex >= lastIndex) {
            nextButton.classList.add('updates__arrow--inactive');
            nextButton.classList.remove('updates__arrow--active');
        } else {
            nextButton.classList.add('updates__arrow--active');
            nextButton.classList.remove('updates__arrow--inactive');
        }
    }

    updateArrowStyles();

    splide.on('moved', updateArrowStyles);

    prevButton.addEventListener('click', function () {
        splide.go('<');
    });

    nextButton.addEventListener('click', function () {
        splide.go('>');
    });
});
