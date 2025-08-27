(
    () => {

        let currentIndex = 0;
        let swiperSlides = [];

        function slideShow(slides, index) {
            slides.forEach((slide, i) => {
                if (index == i) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        }

        function nextSlide() {
            currentIndex++;
            if (currentIndex >= swiperSlides.length) {
                currentIndex = 0;
            }
            slideShow(swiperSlides, currentIndex);
        }

        function prevSlide() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = swiperSlides.length - 1;
            }
            slideShow(swiperSlides, currentIndex);
        }

        function Swiper(className, options) {
            const swiper = document.querySelector(className);
            currentIndex = 0;
            swiperSlides = swiper.querySelectorAll('.swiper-slide');
            slideShow(swiperSlides, currentIndex);

            if (options.navigation) {
                const swiperNext = document.querySelector(options.navigation.nextEl);
                const swiperPrev = document.querySelector(options.navigation.prevEl);
                swiperPrev.addEventListener('click', prevSlide);
                swiperNext.addEventListener('click', nextSlide);
            }
        }


        Swiper('.swiper', {
            // Optional parameters
            loop: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
    }
)();