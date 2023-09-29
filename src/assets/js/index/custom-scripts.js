// ==============================================
// Макска телефона без библиотеки
// ==============================================
let eventCallBack = function (e) {
    let el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7(___) ___-__-__",
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
// Копирования в буфер
// ==============================================
function copyToClipboard(str) {
    let area = document.createElement('textarea');
    document.body.appendChild(area);
    area.value = str;
    area.select();
    document.execCommand("copy");
    document.body.removeChild(area);
}

let copyButton = document.querySelector('[data-copy-button]')
let copyTarget = document.querySelector('[data-copy-target]')

copyButton.addEventListener('click', function () {
    copyToClipboard(copyTarget.textContent)
    copyButton.textContent = 'Скопировано'
    setTimeout(function () {
        copyButton.textContent = 'Скопировать почту'
    }, 5000)
})

// ===================================================================
// Функция по добавлению классов свайперу в зависимости от размера экрана
// ===================================================================
let swiperActive = document.querySelector('[data-mobile-swiper]')
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

// ===================================================================
// Функция по включению выключению свайпера в зависимости от экрана
// ===================================================================
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
if (swiperActive) {
    addClassSwiper('(max-width: 991px)', swiperActive)
    resizableSwiper(
        '(max-width: 991px)',
        '[data-mobile-swiper]',
        {
            loop: true,
            slidesPerView: 1,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
        },
    );
}


/*
===================================================
Функции для управления кастомной пагинации
===================================================
*/

function sliderNumber(mySliderTotalSlides, mySliderCurrentSlide, currentSlider,elementDisabled) {

if (elementDisabled) {
    mySliderCurrentSlide.innerHTML = String(++currentSlider.realIndex)
    --currentSlider.realIndex
    if (currentSlider.params.slidesPerView > 1) {
        mySliderTotalSlides.innerHTML = String(Math.round(++currentSlider.slides.length - currentSlider.params.slidesPerView))
    } else {
        mySliderTotalSlides.innerHTML = String(Math.round(currentSlider.slides.length))
    }

    currentSlider.on('slideChange', function () {
        let currentSlide = ++currentSlider.realIndex
        mySliderCurrentSlide.innerHTML = String(currentSlide)
    })

    if (currentSlider.params.slidesPerView === 1 && currentSlider.params.slidesPerView >= currentSlider.slides.length) {
        elementDisabled.style.display = 'none'
    }

    if (currentSlider.params.slidesPerView > 1 && currentSlider.params.slidesPerView >= --currentSlider.slides.length) {
        elementDisabled.style.display = 'none'
    }
}

else {
    return false
}
}
/*
===================================================
Кастомный селект
===================================================
*/

let trueSidebar = document.querySelector('[data-check-select]')

if (trueSidebar) {
    const execution = new ItcCustomSelect('[data-execution]');
    const electric = new ItcCustomSelect('[data-electric]');
}


// ==============================================
// Горизонтальный скролл
// ==============================================

const sectionTabs = document.querySelector('.tabs')


if(sectionTabs) {
    const tableTab = sectionTabs.getElementsByTagName('table')
       for (const table of tableTab) {
           table.setAttribute('data-horizontal', '')
       }
    }

const targets = document.querySelectorAll('[data-horizontal]')

if (targets.length > 0) {
    initTargets();
}

function initTargets () {
    for (let index = 0; index < targets.length; index++) {
        const target = targets[index]
        target.addEventListener('wheel', event => {
            const toLeft  = event.deltaY < 0 && target.scrollLeft > 0
            const toRight = event.deltaY > 0 && target.scrollLeft < target.scrollWidth - target.clientWidth

            if (toLeft || toRight) {
                event.preventDefault()
                target.scrollLeft += event.deltaY
            }
        })
    }
}



// ==============================================
// Загрузка стороннего материала на сайт
// ==============================================

const placeholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="

const targetsIframe = document.querySelectorAll('[data-src-iframe]')
targetsIframe.forEach(function (target) {
    target.src = placeholder
})

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.9,
}

const loadIframe = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.parentNode.classList.contains('loading')) {
            entry.target.src = entry.target.getAttribute('data-src-iframe')
            entry.target.onload = () => {
                entry.target.parentNode.classList.remove('loading')
                entry.target.removeAttribute('data-src-iframe')
            }
        }
    })
}

const observer = new IntersectionObserver(loadIframe, options)
targetsIframe.forEach(targetIframe => {
    observer.observe(targetIframe)
})

// ==============================================
// Валидация формы без библиотеки
// ==============================================
function validationForm(form) {
    let result = true

    let allInput = form.querySelectorAll('input')
    let allTextArea = form.querySelectorAll('textarea')
    let allCheckBoxs = form.querySelectorAll('input[type="checkbox"]')
    let allFiles = form.querySelectorAll('input[type="file"]')

    function removeError(element) {
        const parent = element.parentNode
        if (parent.classList.contains('error')) {
            parent.querySelector('.error-text').remove()
            parent.classList.remove('error')
        }
        if (parent.classList.contains('textarea-error')) {
            parent.querySelector('.error-text').remove()
            parent.classList.remove('textarea-error')
        }
    }

    function createError(element, text) {
        const parent = element.parentNode
        if (parent.dataset.textarea === 'true') {
            parent.classList.add('textarea-error')
        } else {
            parent.classList.add('error')
        }

        const errorItem = document.createElement('p')
        errorItem.classList.add('error-text')
        errorItem.textContent = text
        parent.append(errorItem)
    }

    function createErrorCheckbox(checkbox, text) {
        const nextElement = checkbox.nextElementSibling
        nextElement.classList.add('label-checkbox-error')
        const errorItemCheckbox = document.createElement('p')
        errorItemCheckbox.classList.add('error-checkbox-text')
        errorItemCheckbox.textContent = text
        nextElement.append(errorItemCheckbox)
    }

    function removeErrorCheckbox(checkbox) {
        const nextElement = checkbox.nextElementSibling
        if (nextElement.classList.contains('label-checkbox-error')) {
            nextElement.querySelector('.error-checkbox-text').remove()
            nextElement.classList.remove('label-checkbox-error')
        }
    }

    allCheckBoxs.forEach(function (checkbox) {
        if (checkbox.dataset.checkbox === 'true') {
            removeErrorCheckbox(checkbox)
            if (!checkbox.checked) {
                removeErrorCheckbox(checkbox)
                createErrorCheckbox(checkbox, `Пожалуйста подтвердите обработку персональны данных`)
                result = false
            }
        }
    })

    allFiles.forEach(function (file) {
        if(file.dataset.file === 'true') {
            removeErrorCheckbox(file)
            if(file.files.length === 0) {
                removeErrorCheckbox(file)
                createErrorCheckbox(file, `Пожалуйста поместите файл`)
            }
        }
    })


    allTextArea.forEach(function (textarea) {
        removeError(textarea)

        if (textarea.value.length < textarea.dataset.minLenght) {
            removeError(textarea)
            createError(textarea, `Минимальное кол-во символов ${textarea.dataset.minLenght}`)
            result = false
        }

    })

    allInput.forEach(function (input) {
        removeError(input)

        if (input.dataset.minLenght) {
            if (input.value.length < input.dataset.minLenght) {
                removeError(input)
                createError(input, `Минимальное кол-во символов ${input.dataset.minLenght}`)
                result = false
            }

        }

        if (input.dataset.maxLenght) {
            if (input.value.length > input.dataset.maxLenght) {
                removeError(input)
                createError(input, `Максимальное кол-во символов ${input.dataset.maxLenght}`)
                result = false
            }
        }

        if (input.dataset.word === 'true') {
            let regName = /[A-Za-z0-9]/
            if (input.value.match(regName)) {
                removeError(input)
                createError(input, 'Не корректно введено имя*')
                result = false
            }
        }

        if (input.dataset.phone) {
            let phoneNumber = input.value.replace(/\D/g, '')
            if (phoneNumber.length < 11) {
                removeError(input)
                createError(input, 'Не корректно введен номер*')
                result = false
            }
        }


        if (input.dataset.email === 'true') {
            const emailReg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
            if (!input.value.match(emailReg)) {
                removeError(input)
                createError(input, 'Введите корректный email')
                result = false
            }
        }

        if (input.dataset.required === 'true') {
            if (input.value === "") {
                removeError(input)
                createError(input, 'Поле не заполнено')
                result = false
            }
        }
    })

    return result
}

const formQ = document.querySelector('.questions__form')

if (formQ) {
    formQ.addEventListener('submit', function (event) {
        event.preventDefault()
        const buttonThis = this.querySelector(`button[type='submit']`)

        this.addEventListener('input', function () {

            if (!this.classList.contains('submit')) {
                return validationForm(this)
            }
        })

        if (validationForm(this) === true) {
            this.classList.add('submit')
            buttonThis.setAttribute('type', 'reset');
            buttonThis.textContent = 'Отправлено'
            buttonThis.disabled = true
            return false
        }
    })
}


// ==============================================
// Копирование в буфер Множества
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


