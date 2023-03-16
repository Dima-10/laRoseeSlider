// Инициализируем Swiper 
let myUseAreaSlider = new Swiper('.use-area-slider', {
    // Стрелки 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Навигация
    //Буллеты. текущее пложение, прогресс бар
    pagination: {
        el: '.swiper-pagination',
        /*
        //Буллеты
        clickable: true, 
        //Динамические буллеты
        dynamicBullets: true,
        //кастомные буллеты 
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        */

        
        //Фракция
        /*
        type: 'fraction',
        //Кастомный вывод фракции
        renderFraction: function (currentClass, totalClass) {
            return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
        },
        */

        /*
        //Прогресс бар
        type: 'progressbar'
        */
    },
    //Скролл
    /*
    scrollbar: {
        el: '.swiper-scrollbar',
        // Возможность перетаскивать скролл
        draggable: true
    },
    */


    //Включение отключение
    // перетаскивания на ПК
    
    simulateTouch: false, 
    // Чувствительность свайпа ( 0 - отключение, увеличение значения - увеличение чувствительности)
    touchRatio: 1,
    //Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,
    //Курсор перетаскивания
    grabCursor: true,

/*
    // Переключение при клике на слайд
    slideToClickedSlide: true,

    hashNavigation: {
        //Отслеживать состояние
        watchState: true,
    },*/
    /*
    // Управление клавиатурой
    keyboard: {
        // Включить\Выключить
        enabled: true,
        //Включить\выключить только когда слайдер в пределах вьюпорта
        onlyInViewport: true,
        //Включить\выключить управление клавишами pageUp, pageDown
        pageUpDown: true,
    },
*/
    // управление колесом мыши
    /*
    mousewheel: {
        //Чувствительность колеса мыши
        sensitivity: 1,
        //Класс обьекта на котором будет срабатывать прокрутка мышью
        eventsTarget: ".image-slider"
    },*/

    // Автовысота (нужно когда картинки разного рамера), плавно подстраивает высоту слайдера под высоту контента
    //autoHeight: true,

    // Колличество слайдов для показа (принимает не только целые но и дробные числа, или значение "auto")
    //slidesPerView: 'auto', // при значении "auto" ширина слайдера формируется шириной контента расположенного в нём
    // так же для корректной работы этого значения в css необходимо написать настройку автоширины для слайдов
    slidesPerView: 1,

    // Отключение функционала (если слайдов меньше чем нужно)
    // watchOverflow: true,
    

    //Отступ между слайдами
    spaceBetween: 0,

    // Колличемтво пролистываемых слайдов
    slidesPerGroup: 1,

    //Активный слайд по центру (true/false)
    centeredSlides: false,

    //Стартовый слайд (где первый слайд это нулевой)
    initialSlide: 0,

    //Мультирядность (для корректной работы нужно отключить автовысоту (и здесь и в CSS), и также установить кол-во рядов параметром "slidesPerView", и установить некоторые стили)
    //slidesPerColumn: 2,

    // Бесконечный слайдер (true/false) (не будет работать с мультирядностью, а также бесконечная прокрутка не подразумевает скролл поэтому стоит его отключать)
    loop: false,

    // Кол-во дублирующих слайдов (чтобы работала бесконечность если у нас "slidesPerView: 'auto'")
    //loopedSlides: 2,

    //Свободный режим
    //freeMode: true,

    //Автопрокрутка
    /*
    autoplay: {
        //Пауза между прокруткой
        delay: 1000,
        //закончить на последнем слайде
        stopOnLastSlide: true,
        //Отключить полсе ручного переключения
        disableOnInteraction: false
    },
    */
    //скорость прокрутки
    speed: 800,

    // Вертикальный слайдер
    //direction: 'vertical',
    // Горизонтальный слайдер (по умолчанию)
    //direction: 'horizontal',



    //Эффеты переключения слайдов
    // Листание (по умолчанию)
    effect: 'slide',

    /*
    //Смена прозрачности
    effect: 'fade',
    //дополнение к аade
    fadeEffect: {
        // Параллельная смена прозрачности
        crossFade: true
    },
    */
    /*
    //Переворот
    effect: 'flip',

    //дополнение к flip
    flipEffect: {
        //Тень
        slideShadows: true,
        //показ только активного слайда
        limitRotation: true
    },
    */
    /*
    //Куб
    effect: 'cube',

    //Дополнение к cube (также есть доп.стили)
    cubeEffect: {
        //Настройка тени
        slideShadow: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
    },
    */
   /*
   //Эффект потока
   effect: 'coverflow',

   //Дополнение к coverflow
   CoverflowEffect: {
    //угол
    rotate: 20,
    //наложение
    stretch: 50,
    //тень
    slideShadows: true,
   },
   */


   //Брейк поинты (адаптив)
   //ширина экрана
   /*
   breakpoints: {
    320: {
        slidesPerView: 1,
    },
    480: {
        slidesPerView: 2,
    },
    992: {
        slidesPerView: 3,
    }
   },
   */
   //указываем не ширину, а соотношение сторон
   /*
   breakpoints: {
    '@0.75': {
        slidesPerView: 1,
    },
    '@1.00': {
        slidesPerView: 2,
    },
    "@1.50": {
        slidesPerView: 3,
    }
   },
   */

    /*
   // Зум картинки
   zoom: {
    //максимальное увеличение
    maxRatio: 5,
    //минимальное увеличение
    minRatio: 1,
   },

   */

   
   
});


let myUseAreaContentSlider = new Swiper('.use-area-content-slider', {
    // Стрелки 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Навигация
    //Буллеты. текущее пложение, прогресс бар
    pagination: {
        el: '.swiper-pagination',
        /*
        //Буллеты
        clickable: true, 
        //Динамические буллеты
        dynamicBullets: true,
        //кастомные буллеты 
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        */

        
        //Фракция
        /*
        type: 'fraction',
        //Кастомный вывод фракции
        renderFraction: function (currentClass, totalClass) {
            return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
        },
        */

        /*
        //Прогресс бар
        type: 'progressbar'
        */
    },
    //Скролл
    /*
    scrollbar: {
        el: '.swiper-scrollbar',
        // Возможность перетаскивать скролл
        draggable: true
    },
    */


    //Включение отключение
    // перетаскивания на ПК
    
    simulateTouch: false, 
    // Чувствительность свайпа ( 0 - отключение, увеличение значения - увеличение чувствительности)
    touchRatio: 1,
    //Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,
    //Курсор перетаскивания
    grabCursor: true,

/*
    // Переключение при клике на слайд
    slideToClickedSlide: true,

    hashNavigation: {
        //Отслеживать состояние
        watchState: true,
    },*/
    /*
    // Управление клавиатурой
    keyboard: {
        // Включить\Выключить
        enabled: true,
        //Включить\выключить только когда слайдер в пределах вьюпорта
        onlyInViewport: true,
        //Включить\выключить управление клавишами pageUp, pageDown
        pageUpDown: true,
    },
*/
    // управление колесом мыши
    /*
    mousewheel: {
        //Чувствительность колеса мыши
        sensitivity: 1,
        //Класс обьекта на котором будет срабатывать прокрутка мышью
        eventsTarget: ".image-slider"
    },*/

    // Автовысота (нужно когда картинки разного рамера), плавно подстраивает высоту слайдера под высоту контента
    //autoHeight: true,

    // Колличество слайдов для показа (принимает не только целые но и дробные числа, или значение "auto")
    //slidesPerView: 'auto', // при значении "auto" ширина слайдера формируется шириной контента расположенного в нём
    // так же для корректной работы этого значения в css необходимо написать настройку автоширины для слайдов
    slidesPerView: 1,

    // Отключение функционала (если слайдов меньше чем нужно)
    // watchOverflow: true,
    

    //Отступ между слайдами
    spaceBetween: 0,

    // Колличемтво пролистываемых слайдов
    slidesPerGroup: 1,

    //Активный слайд по центру (true/false)
    centeredSlides: false,

    //Стартовый слайд (где первый слайд это нулевой)
    initialSlide: 0,

    //Мультирядность (для корректной работы нужно отключить автовысоту (и здесь и в CSS), и также установить кол-во рядов параметром "slidesPerView", и установить некоторые стили)
    //slidesPerColumn: 2,

    // Бесконечный слайдер (true/false) (не будет работать с мультирядностью, а также бесконечная прокрутка не подразумевает скролл поэтому стоит его отключать)
    loop: false,

    // Кол-во дублирующих слайдов (чтобы работала бесконечность если у нас "slidesPerView: 'auto'")
    //loopedSlides: 2,

    //Свободный режим
    //freeMode: true,

    //Автопрокрутка
    /*
    autoplay: {
        //Пауза между прокруткой
        delay: 1000,
        //закончить на последнем слайде
        stopOnLastSlide: true,
        //Отключить полсе ручного переключения
        disableOnInteraction: false
    },
    */
    //скорость прокрутки
    speed: 800,

    // Вертикальный слайдер
    //direction: 'vertical',
    // Горизонтальный слайдер (по умолчанию)
    //direction: 'horizontal',



    //Эффеты переключения слайдов
    // Листание (по умолчанию)
    /*effect: 'slide',*/

    /*
    //Смена прозрачности
    effect: 'fade',
    //дополнение к аade
    fadeEffect: {
        // Параллельная смена прозрачности
        crossFade: true
    },
    */
    
    //Переворот
    effect: 'flip',

    //дополнение к flip
    flipEffect: {
        //Тень
        slideShadows: true,
        //показ только активного слайда
        limitRotation: true
    },
    
    /*
    //Куб
    effect: 'cube',

    //Дополнение к cube (также есть доп.стили)
    cubeEffect: {
        //Настройка тени
        slideShadow: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
    },
    */
   /*
   //Эффект потока
   effect: 'coverflow',

   //Дополнение к coverflow
   CoverflowEffect: {
    //угол
    rotate: 20,
    //наложение
    stretch: 50,
    //тень
    slideShadows: true,
   },
   */


   //Брейк поинты (адаптив)
   //ширина экрана
   /*
   breakpoints: {
    320: {
        slidesPerView: 1,
    },
    480: {
        slidesPerView: 2,
    },
    992: {
        slidesPerView: 3,
    }
   },
   */
   //указываем не ширину, а соотношение сторон
   /*
   breakpoints: {
    '@0.75': {
        slidesPerView: 1,
    },
    '@1.00': {
        slidesPerView: 2,
    },
    "@1.50": {
        slidesPerView: 3,
    }
   },
   */

    /*
   // Зум картинки
   zoom: {
    //максимальное увеличение
    maxRatio: 5,
    //минимальное увеличение
    minRatio: 1,
   },

   */

   
   
});




//Передача управления

myUseAreaSlider.controller.control = myUseAreaContentSlider;
myUseAreaContentSlider.controller.control = myUseAreaSlider;