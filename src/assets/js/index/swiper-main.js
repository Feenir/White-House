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
        clickable: true,
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

    }});

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

jobReviewsSwiper.realIndex

console.log(jobReviewsSwiper.realIndex)



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
let insideReviewsSwiperBody = document.querySelector('[data-inside-swiper]')

if (insideReviewsSwiper.slides.length  === 1 && insideReviewsSwiperBody) {
    let slide = insideReviewsSwiperBody.querySelectorAll('.swiper-slide')
    slide.forEach(function (item) {
        item.classList.add('slide-not-active')
    })
}


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

let otherSwiper = new Swiper("[data-other-review]", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        561: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },
    navigation: {
        nextEl: "[data-other-review-next]",
        prevEl: "[data-other-review-prev]",
    },
    pagination: {
        el: "[data-other-review-pagination]",
    },
});


let videoBlockSwiper = new Swiper("[data-video-block-swiper]", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: "[data-video-block-next]",
        prevEl: "[data-video-block-prev]",
    },
    pagination: {
        el: "[data-video-block-pagination]",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1440: {
            slidesPerView: 3,
        },

    }});

let videoAsideBlockSwiper = new Swiper("[data-video-block-aside-swiper]", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: "[data-video-block-aside-next]",
        prevEl: "[data-video-block-aside-prev]",
    },
    pagination: {
        el: "[data-video-block-aside-pagination]",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1440: {
            slidesPerView: 3,
        },

    }});


let galleryThumbSwiper = new Swiper("[data-gallery-thumb]", {
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,
    mousewheel: {
        forceToAxis: true,
        sensitivity: .1,
        releaseOnEdges: true,
    },
    navigation: {
        nextEl: "[data-gallery-thumb-next]",
        prevEl: "[data-gallery-thumb-prev]",
    },
    pagination: {
        el: "[data-gallery-thumb-pagination]",
    },
    breakpoints: {

        561: {
            slidesPerView: 4,
        },

        769: {
            slidesPerView: 5,
        },

        991: {
            slidesPerView: 'auto',
            direction: "vertical",
            spaceBetween: 16,
            scrollbar: {
                el: ".swiper-scrollbar",
            },
        }
    }
});

let gallerySwiper = new Swiper("[data-gallery]", {
    slidesPerView: 1,
    effect: "fade",
    freeMode: true,
    watchSlidesProgress: true,
    thumbs: {
        swiper: galleryThumbSwiper,
    },
});




let swiperSize = document.querySelector('[data-gallery]')
let swiperMaxChange = document.querySelector('[data-gallery-thumb]')
let swiperMaxChangeParent = document.querySelector('.gallery__thumb-container')
const changeMaxHeight = (bigElement, heightChangeElement,parent) => {
    heightChangeElement.style.maxHeight = (bigElement.offsetHeight - 40) + 'px'
    parent.style.maxHeight = bigElement.offsetHeight + 'px'
}

if (swiperSize && swiperMaxChange) {
    changeMaxHeight(swiperSize,swiperMaxChange,swiperMaxChangeParent)
    window.addEventListener('resize', function () {
        changeMaxHeight(swiperSize,swiperMaxChange,swiperMaxChangeParent)
    });
}




