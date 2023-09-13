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
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: "[data-best-next]",
        prevEl: "[data-best-prev]",
    },
});

let reviewsSwiperThumb = new Swiper("[data-reviews-thumb]", {
    slidesPerView: 4,
    spaceBetween: 16,
    navigation: {
        nextEl: "[data-reviews-next]",
        prevEl: "[data-reviews-prev]",
    },

});

let reviewsSwiperBig = new Swiper("[data-reviews-big]", {
    slidesPerView: 1,
    lazy: true,
    thumbs: {
        swiper: reviewsSwiperThumb,
    },
});

let bestMoreSwiper = new Swiper("[data-best-more-swiper]", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: "[data-best-more-next]",
        prevEl: "[data-best-more-prev]",
    },

});

let singleSwiperThumb = new Swiper("[data-single-thumb]", {
    slidesPerView: 4,
    spaceBetween: 20,
    initialSlide: 2,
    navigation: {
        nextEl: "[data-single-thumb-next]",
        prevEl: "[data-single-thumb-prev]",
    },
});

let singleSwiperImg = new Swiper("[data-single-big]", {
    slidesPerView: 1,
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
});

let branchesSwiper = new Swiper("[data-branches-swiper]", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: "[data-branches-next]",
        prevEl: "[data-branches-prev]",
    },
});



