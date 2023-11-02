// ==================================================================
// Функции для фильтрации по статьям в блоге(Не забыть оставить комменты)
// ==================================================================
function changeFilter(filterTargetCollection, targetTrigger) {
    filterTargetCollection.forEach(function (filterTargetItem) {
        const filterChange = filterTargetItem.dataset.filterTarget.replace(/\s/g, "").toLowerCase()
        if (filterChange === targetTrigger) {
            filterTargetItem.style.display = 'flex'
        } else {
            filterTargetItem.style.display = 'none'
        }
    })
}
function filter(buttonsBody,targetFilter, object,buttonClass) {
    buttonsBody.addEventListener('click', function (event) {
        let buttonsChildren = buttonsBody.children
        let eventTarget = event.target
        for ( let i = 0; i < buttonsChildren.length; i++) {
            if  (eventTarget.classList.contains(buttonClass)) {
                buttonsChildren[i].classList.remove('active')
                eventTarget.classList.add('active')
                const target = eventTarget.dataset.filterType.replace(/\s/g, "").toLowerCase()
                switch (target) {
                    case object.all:
                        targetFilter.forEach((filterTarget)=> {
                            filterTarget.style.display = 'flex'
                        })
                        break
                    case target:
                        changeFilter(targetFilter, target)
                        break

                }
            }
        }

    })
}
// ==================================================================
// Функции для копирования заголовка
// ==================================================================
const titleCopy = (breakpoint, titleCopy, parent, titleFirstPlace, titleContainer) => {
    breakpoint = window.matchMedia(breakpoint);//Брейк поинты
    let title = document.querySelector(titleCopy)// Заголовок который надо копировать
    let copyTitle = title.cloneNode(true)// Копирование заголовка
    let categoryParent = parent//Ищем Родителя заголовка
    let container = categoryParent.querySelector(titleContainer)
    let titleFirstContainer = categoryParent.querySelector(titleFirstPlace)
    const checker = function () {
        if (breakpoint.matches) {
            container.prepend(copyTitle)
            title.remove()
        } else {
            titleFirstContainer.prepend(title)
            copyTitle.remove()
        }
    };

    breakpoint.addEventListener('change', checker);
    checker();
}
// ==================================================================
// Функции для добовления класса га свайпер при измении экрана
// ==================================================================
function addClassSwiper(breakpointActive, swiperName) {
    breakpointActive = window.matchMedia(breakpointActive);
    let checkerSwiper = function () {
        if (breakpointActive.matches) {
            swiperName.classList.add('swiper')
            swiperName.firstElementChild.classList.add('swiper-wrapper')
            swiperName.firstElementChild.children
            for (let i = 0; i < swiperName.firstElementChild.children.length; i++) {
                swiperName.firstElementChild.children[i].classList.add('swiper-slide')
            }
        } else {
            swiperName.classList.remove('swiper')
            swiperName.firstElementChild.classList.remove('swiper-wrapper')
            swiperName.firstElementChild.children
            for (let i = 0; i < swiperName.firstElementChild.children.length; i++) {
                swiperName.firstElementChild.children[i].classList.remove('swiper-slide')
            }
        }
    };
    breakpointActive.addEventListener('change', checkerSwiper);
    checkerSwiper();
}
// ==================================================================
// Функции для активации слайдера при именении экрана
// ==================================================================
const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);
    const enableSwiper = function (className, settings) {
        swiper = new Swiper(className, settings);

        if (callback) {
            callback(swiper);
        }
    }

    const checker = function () {
        if (breakpoint.matches) {

            return enableSwiper(swiperClass, swiperSettings);
        } else {
            if (swiper !== undefined) swiper.destroy(true, true);
            return false;
        }
    };

    breakpoint.addEventListener('change', checker);
    checker();
}


