/*
===================================================================
Fancybox для главной странице видео о компании (hero-block)
==================================================================
*/

Fancybox.bind(`[data-fancybox="hero-about-video"]`, {
    helpers: {
        overlay: {
            locked: false
        }
    }
});

/*
===================================================
Fancybox для карточки товара
===================================================
*/

Fancybox.bind(`[data-fancybox="reviews-gallery"]`, {
    on: {
        done: (fancybox, slide) => {
            if (fancybox.isCurrentSlide(slide)) {
                reviewsSwiperBig.currentSlider = slide.index
            }
        },
    },
});



/*
===================================================
Fancybox для single дома
===================================================
*/

Fancybox.bind(`[data-fancybox="single-big-slider"]`, {
    on: {
        done: (fancybox, slide) => {
            if (fancybox.isCurrentSlide(slide)) {
                singleSwiperImg.currentSlider = slide.index
            }
        },
    },
});

/*
===================================================
Fancybox для single дома
===================================================
*/

Fancybox.bind(`[data-fancybox="single-plan-slider"]`, {
    on: {
        done: (fancybox, slide) => {
            if (fancybox.isCurrentSlide(slide)) {
                planSwiperImg.currentSlider = slide.index
            }
        },
    },
});

/*
===================================================
Fancybox для отзывов
===================================================
*/

Fancybox.bind(`[data-fancybox="reviews-video"]`, {});

/*
===================================================
Fancybox для видеоблога
===================================================
*/
Fancybox.bind(`[data-fancybox="video-block"]`, {});
Fancybox.bind(`[data-fancybox="hero-build"]`, {});





