"use strick"


//  Определение устройства
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());

    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');



//  Открітие и закрытие подменю при нажатие ссылку и Добавление класса актив стрелк
    $('.menu__first-link').click(function () {
        if (!$(this).hasClass('active')) {
            $(".menu__first-link").find('.menu__sublist').slideUp();
            $('.menu__first-link').removeClass('active');
            $(".menu__first-link").children('.menu__arrow').removeClass('_active');
            $(this).find('.menu__sublist').slideToggle();
            $(this).addClass('active');
            $(this).children('.menu__arrow').addClass('_active');
        } else {
            $('.menu__first-link').removeClass('active');
            $(".menu__first-link").find('.menu__sublist').slideUp()
            $(".menu__first-link").children('.menu__arrow').removeClass('_active');
        }
    });

    $(document).mouseup(function (e) {
        if (!$('.menu__first-link').is(e.target) && $('.menu__first-link').has(e.target).length === 0) {
            $('.menu__first-link').removeClass('active');
            $('.menu__first-link').children('.menu__arrow').removeClass('_active');
            $(".menu__first-link").find('.menu__sublist').slideUp()
        }
    });

    //  Открітие и закрытие подменю при нажатие ссылку и Добавление класса актив стрелк

} else {
    document.body.classList.add('_pc');
}

//  Бургер
let iconMenu = document.querySelectorAll('.menu__icon');
let menuBody = document.querySelector('.menu__body');
if (iconMenu) {

    iconMenu.forEach(iconMenu => {
        iconMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('_key');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        });
    });
}
// Закрытие промо в хедере
let closeTitle = document.querySelector('.header__promo-close');
let headerPromo = document.querySelector('.header__promo');
let headerContainer = document.querySelector('.header__container');
let headerMenu = document.querySelector('.menu__body');
let promo = document.querySelector('.promo')
if (closeTitle) {
    closeTitle.addEventListener("click", function (e) {
        headerPromo.classList.add('_close');
        headerContainer.classList.add('_close');
        headerMenu.classList.add('_close');
        promo.classList.add('_close')
    });
};

//  slider
$(document).ready(function () {
    $('.gallery__photo').slick({
        slidesToShow: 5,
        infinite: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
});


