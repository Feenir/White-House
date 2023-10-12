// Проверяем, можно ли использовать Webp формат
function canUseWebp() {
    // Создаем элемент canvas
    let elem = document.createElement('canvas');
    // Приводим элемент к булеву типу
    if (!!(elem.getContext && elem.getContext('2d'))) {
        // Создаем изображение в формате webp, возвращаем индекс искомого элемента и сразу же проверяем его
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }
    // Иначе Webp не используем
    return false;
}

window.onload = function () {
    // Получаем все элементы с дата-атрибутом data-bg
    let images = document.querySelectorAll('[data-bg]');
    // Проходимся по каждому
    for (let i = 0; i < images.length; i++) {
        // Получаем значение каждого дата-атрибута
        let image = images[i].getAttribute('data-bg');
        // Каждому найденному элементу задаем свойство background-image с изображение формата jpg
        images[i].style.backgroundImage = 'url(' + image + ')';
    }

    // Проверяем, является ли браузер посетителя сайта Firefox и получаем его версию
    let isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
    let firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0;

    // Если есть поддержка Webp или браузер Firefox версии больше или равно 65
    if (canUseWebp() || firefoxVer >= 65) {
        // Делаем все то же самое что и для jpg, но уже для изображений формата Webp
        let imagesWebp = document.querySelectorAll('[data-bg-webp]');
        for (let i = 0; i < imagesWebp.length; i++) {
            let imageWebp = imagesWebp[i].getAttribute('data-bg-webp');
            imagesWebp[i].style.backgroundImage = 'url(' + imageWebp + ')';
        }
    }
};


// Остановка свайпера при включении fancybox галереи

let checkPlays = document.querySelectorAll('[data-check-autoplay]')
for (let checkPlay of checkPlays) {
    if (checkPlay) {
        const html = document.querySelector('html')
        let changeDom = function () {
            if (html.classList.contains('with-fancybox')) {
                heroSwiperText.autoplay.pause()
            } else {
                heroSwiperText.autoplay.resume()
            }
        }
        let observer = new MutationObserver(changeDom);
        observer.observe(html, {
            childList: true, // наблюдать за непосредственными детьми
            subtree: true, // и более глубокими потомками
            characterDataOldValue: false // передавать старое значение в колбэк
        });

    }
}

// Звездный рейтинг
"use strick"

const ratings = document.querySelectorAll('[data-star-rating]')

if (ratings.length > 0) {
    initRatings();
}

// Основная функция
function initRatings() {
    let ratingActive;
    let ratingValue;

    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index]
        initRating(rating);
    }


//Инициализируем конкретный рейтинг
    function initRating(rating) {
        initRatingVars(rating)

        setRatingActiveWidth()
    }

//Инициализация переменных
    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active')
        ratingValue = rating.querySelector('.rating__value')
    }


//Изменяем ширину активных звезд
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05
        ratingActive.style.width = `${ratingActiveWidth}%`
    }
}

// ==============================================
// Макска телефона без библиотеки
// ==============================================
let eventCallBack = function (e) {
    let el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7 ___ ___ __ __",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
    if (clearVal !== 'false' && e.type === 'blur') {
        if (val.length < matrix.match(/([_\d])/g).length) {
            e.target.value = '';
            return;
        }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
}
let phone_inputs = document.querySelectorAll('input[type="tel"]');
for (let elem of phone_inputs) {
    for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, eventCallBack);
    }
}


// ==============================================
// Кастомный селект
// ==============================================

let customSelect = document.querySelectorAll('[data-custom-select]')

if (customSelect.length > 0) {
    const equipment = new ItcCustomSelect('[data-equipment-select]');
}

let filterCatalog = document.querySelector('[data-filter-catalog-project]')

if (filterCatalog) {
    const type = new ItcCustomSelect('[data-type-select]');
    const technologies = new ItcCustomSelect('[data-technologies-select]');
    const floor = new ItcCustomSelect('[data-floor-select]');
    const square = new ItcCustomSelect('[data-square-select]');
}


// ==============================================
// Скрыть характеристики
// ==============================================

let tabParent = document.querySelectorAll('[data-hidden-parent]')

if (tabParent) {
    tabParent.forEach(function (parent) {
        let table = parent.querySelector('[data-content-hide]')
        let button = parent.querySelector('[data-button-hide]')
        button.setAttribute('data-status', 'true')
        button.addEventListener('click', function () {
            if (button.dataset.status === 'false') {
                table.style.display = 'block'
                button.textContent = 'Скрыть характеристики'
                button.setAttribute('data-status', 'true')
            } else {
                table.style.display = 'none'
                button.textContent = 'Показать характеристики'
                button.setAttribute('data-status', 'false')
            }
        })
    })
}

let reviewMore = document.querySelector('[data-review-more]')
let reviewTextMore = document.querySelector('[data-review-hidden]')

if (reviewMore) {
    reviewMore.setAttribute('data-status', 'false')
    reviewMore.addEventListener('click', function () {
        if (reviewMore.dataset.status === 'false') {
            reviewTextMore.style.display = 'block'
            reviewMore.textContent = 'Спрятать'
            reviewMore.setAttribute('data-status', 'true')
        }
        else {
            reviewTextMore.style.display = 'none'
            reviewMore.textContent = 'Читать полностью'
            reviewMore.setAttribute('data-status', 'false')
        }
    })
}


// ==============================================
// Линивая загрузка яндекс карты
// ==============================================
let yandexMapTargets = document.querySelectorAll('[data-map-target]')
let yandexMap = document.querySelectorAll('[data-map]')

if (yandexMapTargets.length > 0) {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1,
    }

    let changeDomOne = function (entries, observer) {
        entries.forEach(entry => {
            setTimeout(() => {
                entry.target.parentNode.classList.add('loading')
                if (entry.isIntersecting && entry.target.parentNode.classList.contains('loading')) {
                    entry.target.src = entry.target.getAttribute('data-src')
                    entry.target.onload = () => {
                        entry.target.parentNode.classList.remove('loading')
                        entry.target.removeAttribute('data-src')
                        observer.unobserve(entry.target)
                    }
                }
            }, 500)
        })
    }

    let observer = new IntersectionObserver(changeDomOne, options);
    yandexMap.forEach(function (map) {
        map.parentElement.classList.add('loading')
        observer.observe(map, {
            childList: true, // наблюдать за непосредственными детьми
            subtree: true, // и более глубокими потомками
            characterDataOldValue: false // передавать старое значение в колбэк
        });
    })
}


// ==============================================
// Копирование в буфер
// ==============================================

let objectsCopy = document.querySelectorAll('[data-copy]')

if (objectsCopy) {
    function copyToClipboard(str) {
        let area = document.createElement('textarea');

        document.body.appendChild(area);
        area.value = str;
        area.select();
        document.execCommand("copy");
        document.body.removeChild(area);
    }

    objectsCopy.forEach(function (objectCopy) {
        let copyTarget = objectCopy.previousElementSibling.textContent
        objectCopy.addEventListener('click', function () {
            copyToClipboard(copyTarget)
        })
    })
}

// ==============================================
// Добавление в избранное
// ==============================================

const favoriteButton = document.querySelectorAll('[data-favorite-button]')
const favoriteCount = document.querySelector('[data-count]')
let cardArray = []

favoriteButton.forEach(function (button) {
    button.addEventListener('click', function (event) {
        console.log(button)

        let cards = button.closest('.card')
        let copyCards = cards.cloneNode(true)
        document.body.appendChild(copyCards)

        let cardId = button.closest('.card')
        favoriteCount.dataset.count++
    })
})


// ===================================================================
// Функция по добавлению классов свайперу в зависимости от размера экрана
// ===================================================================
let swiperCatalogActive = document.querySelector('[data-catalog-swiper]')


// ===================================================================
// Функция по включению выключению свайпера в зависимости от экрана
// ===================================================================

if (swiperCatalogActive) {
    addClassSwiper('(max-width: 991px)', swiperCatalogActive)
    resizableSwiper(
        '(max-width: 991px)',
        swiperCatalogActive,
        {
            loop: true,
            slidesPerView: 1,
            pagination: {
                el: "[data-catalog-pagination]",
            },
            navigation: {
                nextEl: "[data-catalog-next]",
                prevEl: "[data-catalog-prev]",
            },
        },
    );
}

let swiperTileMobileActive = document.querySelector('[data-tile-mobile-slider]')

if (swiperTileMobileActive) {
    addClassSwiper('(max-width: 991px)', swiperTileMobileActive)
    resizableSwiper(
        '(max-width: 991px)',
        swiperTileMobileActive,
        {
            loop: true,
            spaceBetween: 15,
            slidesPerView: 1,
            pagination: {
                el: "[data-tile-pagination]",
            },
            navigation: {
                nextEl: "[data-tile-next]",
                prevEl: "[data-tile-prev]",
            },
        },
    );
}

let swiperOrderMobileActive = document.querySelector('[data-order-mobile-slider]')
if (swiperOrderMobileActive) {
    addClassSwiper('(max-width: 991px)', swiperOrderMobileActive)
    resizableSwiper(
        '(max-width: 991px)',
        swiperOrderMobileActive,
        {
            spaceBetween: 20,
            slidesPerView: 1.2,
            pagination: {
                el: "[data-order-pagination]",
            },
            navigation: {
                nextEl: "[data-order-next]",
                prevEl: "[data-order-prev]",
            },
            slidesOffsetAfter: 15,
            slidesOffsetBefore: 15,
        },
    );
}

// ===================================================================
// Замена Заголовка
// ===================================================================


let titleParent = document.querySelector('[data-parent]')
if (titleParent) titleCopy('(max-width: 991px)', '.category-single__title', titleParent, '.category-single__item--description', '.container')
let titleMapParent = document.querySelector('[data-map-parent]')
if (titleMapParent) titleCopy('(max-width: 991px)', '.contacts__title', titleMapParent, '.contacts__item--title', '.contacts__item--map')

window.CI360.init();

// ===================================================================
// Открытие закрытие бургер меню
// ===================================================================
const burgerOpen = document.querySelector('[data-burger-open]')
const mobileMenuBody = document.querySelector('[data-mobile-menu]')
const burgerClose = document.querySelector('[data-close-burger]')
const html = document.querySelector('html')

burgerOpen.addEventListener('click', function () {
    mobileMenuBody.classList.add('open')
    html.style.overflowY = 'hidden'
})

burgerClose.addEventListener('click', function () {
    mobileMenuBody.classList.remove('open')
    html.style.overflowY = 'visible'
})

mobileMenuBody.addEventListener('click', function (e) {
    if (!mobileMenu.contains(e.target)) {
        mobileMenuBody.classList.remove('open')
        html.style.overflowY = 'visible'
    }
})


// ===================================================================
// Открытие закрытие пунктов меню
// ===================================================================

const mobileMenu = document.querySelector('[data-menu]')

if (mobileMenu) {
    let levelMenu = mobileMenu.querySelectorAll('.mobile-menu__down')
    levelMenu.forEach(function (levelItem) {
        levelItem.addEventListener('click', function (event) {
            let subMenu = event.currentTarget.parentElement.querySelector('.mobile-menu__sub-list')
            event.currentTarget.classList.toggle('rotate')
            subMenu.classList.toggle('active')
        })
    })
}

// ==================================================================
// Фильтр по статьям в блоге(Не забыть оставить комменты)
// ==================================================================
const filterButtonsBody = document.querySelector('[data-stocks-body]')
const filterTargetItems = document.querySelectorAll('[data-filter-target]')
const caseStocksObject = {
    all: 'всеакции',
}
if (filterButtonsBody && filterTargetItems) {
    filter(filterButtonsBody, filterTargetItems, caseStocksObject, 'stocks__filter')
}
const articleButtonsBody = document.querySelector('[data-article-body]')
const caseArticleObject = {
    all: 'всетемы',
}
if (articleButtonsBody && filterTargetItems) {
    filter(articleButtonsBody, filterTargetItems, caseArticleObject, 'stocks__filter')
}

// ==================================================================
// Переключение слайдеров
// ==================================================================
let slider3D = document.querySelector('[data-slider-3d]')
let singleSlider = document.querySelector('[data-single-big]')
let show3DSlider = document.querySelector('[data-slider-3d-show]')
let showSingleSlider = document.querySelector('[data-single-thumb]')

if (show3DSlider) {
    show3DSlider.addEventListener('click', function () {
        if (slider3D.classList.contains('hidden') && !singleSlider.classList.contains('hidden')) {
            slider3D.classList.remove('hidden')
            singleSlider.classList.add('hidden')
        }
    })
}


if (showSingleSlider) {
    let thumbShows = showSingleSlider.querySelectorAll('[data-thumb-show]')
    thumbShows.forEach(function (thumbShow) {
        thumbShow.addEventListener('click', function () {
            if (!slider3D.classList.contains('hidden') && singleSlider.classList.contains('hidden')) {
                slider3D.classList.add('hidden')
                singleSlider.classList.remove('hidden')
                singleSwiperImg.slideTo(0, 10)
            }
        })
    })
}

let child = document.querySelector('[data-slider-3d-show]')
const changeWidth = () => {
    let parent = document.querySelector('[data-single-thumb]')
    let parentChild = parent.querySelector('.category-single__slide-thumb img')
    child.style.minWidth = parentChild.offsetWidth + 'px'
    child.style.minHeight = parentChild.offsetHeight + 'px'
}
if (child) {
    changeWidth()
    window.addEventListener('resize', function () {
        changeWidth()
    });
}


// ==================================================================
// Переключение комплектации
// ==================================================================
let priceBe = document.querySelector('[data-price-be]')
function changeSelect(parent) {
    let children = parent.children
    let tabsButton = document.querySelectorAll('[data-tabs-btn]')
    let tabsPane = document.querySelectorAll('[data-tabs-pane]')
    let priceCurrently = document.querySelector('[data-price-currently]')
    let priceBe = document.querySelector('[data-price-be]')
    const titleSelect = document.querySelector('[data-select-main]')
    for (const child of children) {
        let childrenIndex = child.dataset.index
        child.addEventListener('click', function (event) {
            let childTargetIndex = event.target.dataset.index
            for (let i = 0; i < tabsPane.length; i++) {
                tabsPane[i].setAttribute('data-index', `${i}`)
                let tabsPaneIndex = tabsPane[i].dataset.index
                tabsPane[i].classList.remove('tabs-pane-show')
                if (childTargetIndex === tabsPaneIndex) {
                    tabsPane[i].classList.add('tabs-pane-show')
                    priceCurrently.textContent = event.target.dataset.priceNow
                    priceBe.textContent = event.target.dataset.priceNext
                }
            }
            for (const tabsButtonElement of tabsButton) {
                let tabsButtonIndex = tabsButtonElement.dataset.index
                tabsButtonElement.classList.remove('tabs-active')
                if (childTargetIndex === tabsButtonIndex) {
                    tabsButtonElement.classList.add('tabs-active')
                }
            }
        })
        for (const tabButton of tabsButton) {
            tabButton.addEventListener('click', function (event) {
                let tabButtonIndex = event.currentTarget.dataset.index
                child.classList.remove('itc-select__option_selected')
                if (tabButtonIndex === childrenIndex) {
                    child.classList.add('itc-select__option_selected')
                    titleSelect.textContent = child.textContent
                    titleSelect.value = child.textContent
                }
            })
        }
    }


}

let selectChange = document.querySelector('[data-select-change]')
if (selectChange) {
    changeSelect(selectChange)
}


// const options = {separator: ' ',suffix: ' ₽',};
// let number = event.target.dataset.priceNow.replace(/\s/g, '')
// const count = new CountUp( // задаем необходимые параметры
//     'now', // 1. задаём идентификатор элемента с числом
//     0, // 2. задаём начальное число
//     number, // 3. задаём конечное число
//     0, // 4. задаём количество цифр после запятой
//     2, // 5. задаём продолжительность анимации в секундах
//     options);
// count.start() // запускаем настроенную анимацию