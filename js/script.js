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

    /*let menuArrows = document.querySelectorAll('.menu__first-link')
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.classList.toggle('_active');
            })
        }
    }*/
    /* $('.menu__first-link').on('click', function () {
    $(".menu__first-link").find('.menu__sublist').hide()
    $(this).find('.menu__sublist').toggle();
    
}); */



//  Открітие и закрытие подменю при нажатие в
    $(document).ready(function () {
        $('.menu__first-link').on('click', function () {
            $(this).children('.menu__sublist').fadeToggle();
            $(this).children('.menu__arrow').toggleClass('_active');
        })
    });

    let menu1 = $('.menu__first-link-1');
    let submenu1 = $('.menu__sublist-1');

    $(document).mouseup(function (e) {
        if (!menu1.is(e.target) && menu1.has(e.target).length === 0 &&
            !submenu1.is(e.target) && submenu1.has(e.target).length === 0) {
            submenu1.fadeOut();
        }
    });
    let menu2 = $('.menu__first-link-2');
    let submenu2 = $('.menu__sublist-2');
    $(document).mouseup(function (e) {
        if (!menu2.is(e.target) && menu2.has(e.target).length === 0 && !submenu2.is(e.target) && submenu2.has(e.target).length === 0) {
            submenu2.fadeOut();
            submenu1.addClass('.active1')
        }
    });
    let menu3 = $('.menu__first-link-3');
    let submenu3 = $('.menu__sublist-3');
    $(document).mouseup(function (e) {
        if (!menu3.is(e.target) && menu3.has(e.target).length === 0 && !submenu3.is(e.target) && submenu3.has(e.target).length === 0) {
            submenu3.fadeOut();
        }
    });
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
let headerMenu = document.querySelector('.menu__body')
if (closeTitle) {
    closeTitle.addEventListener("click", function (e) {
        headerPromo.classList.add('_close');
        headerContainer.classList.add('_close');
        headerMenu.classList.add('_close');
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


