let heroSwiperImg = new Swiper("[data-hero-swiper-img]", {
    slidesPerView: 1,
    lazy: true,
    allowTouchMove: false,
    effect: "fade",
});

let heroSwiperText = new Swiper("[data-hero-swiper-text]", {
    slidesPerView: 1,
    allowTouchMove: false,
    effect: "fade",
    loop: true,
    pagination: {
        el: "[data-hero-swiper-text-pagination]",
    },
    hashNavigation: {
        watchState: true,
    },
    thumbs: {
        swiper: heroSwiperImg,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
});

let bestSwiper = new Swiper("[data-best-swiper]", {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
        nextEl: "[data-best-next]",
        prevEl: "[data-best-prev]",
    },
    pagination: {
        el: "[data-best-pagination]",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1440: {
            slidesPerView: 3,
        },

    }
});

let reviewsSwiperThumb = new Swiper("[data-reviews-thumb]", {
    slidesPerView: 3,
    spaceBetween: 9,
    navigation: {
        nextEl: "[data-reviews-next]",
        prevEl: "[data-reviews-prev]",
    },
    breakpoints: {
        561: {
            slidesPerView: 4,
            spaceBetween: 16,
        }
    }

});

let reviewsSwiperBig = new Swiper("[data-reviews-big]", {
    slidesPerView: 1,
    lazy: true,
    thumbs: {
        swiper: reviewsSwiperThumb,
    },
});

let bestMoreSwiper = new Swiper("[data-best-more-swiper]", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: "[data-best-more-next]",
        prevEl: "[data-best-more-prev]",
    },
    pagination: {
        el: "[data-best-more-pagination]",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1440: {
            slidesPerView: 3,
        },

    }


});

let singleSwiperThumb = new Swiper("[data-single-thumb]", {
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: "[data-single-thumb-next]",
        prevEl: "[data-single-thumb-prev]",
    },
    breakpoints: {
        561: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }
});

let singleSwiperImg = new Swiper("[data-single-big]", {
    slidesPerView: 1,
    allowTouchMove: false,
    autoHeight: true,
    lazy: true,
    effect: "fade",
    thumbs: {
        swiper: singleSwiperThumb,
    },
});

let planSwiperImg = new Swiper("[data-plan-swiper]", {
    slidesPerView: 1,
    navigation: {
        nextEl: "[data-layout-next]",
        prevEl: "[data-layout-prev]",
    },
    pagination: {
        el: "[data-layout-pagination]",
    },
});

let branchesSwiper = new Swiper("[data-branches-swiper]", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: "[data-branches-next]",
        prevEl: "[data-branches-prev]",
    },
    breakpoints: {
        561: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
    }
});

let vacancyMoreSwiper = new Swiper("[data-vacancy-swiper]", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: "[data-vacancy-next]",
        prevEl: "[data-vacancy-prev]",
    },
    pagination: {
        el: "[data-vacancy-pagination]",
    },
    breakpoints: {
        991: {
            slidesPerView: 2,
        },

    }
});

let jobReviewsSwiper = new Swiper("[data-job-reviews-swiper]", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: "[data-job-reviews-next]",
        prevEl: "[data-job-reviews-prev]",
    },
    pagination: {
        el: "[data-job-reviews-pagination]",
    },
    breakpoints: {
        991: {
            slidesPerView: 2,
        },

    }
});

let insideReviewsSwiper = new Swiper("[data-inside-swiper]", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: "[data-inside-next]",
        prevEl: "[data-inside-prev]",
    },
    pagination: {
        el: "[data-inside-pagination]",
    },
    breakpoints: {
        991: {
            slidesPerView: 1.8,
        },

    }
});


let feedbackSwiperThumb = new Swiper("[data-feedback-thumb]", {
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: "[data-feedback-thumb-next]",
        prevEl: "[data-feedback-thumb-prev]",
    },
    breakpoints: {
        561: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
});

let feedbackSwiperImg = new Swiper("[data-single-feedback]", {
    slidesPerView: 1,
    allowTouchMove: false,
    autoHeight: true,
    lazy: true,
    effect: "fade",
    thumbs: {
        swiper: feedbackSwiperThumb,
    },
});




