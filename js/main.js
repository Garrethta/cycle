//    const { active } = require("browser-sync");

$(function () {
    $('.banner__slider-items').slick({
        arrows: true,
        dotsClass: 'banner__dots',
        dots: true,
        prevArrow: '<div class="banner__arrow-prev"></div>',
        nextArrow: '<div class="banner__arrow-next"></div>'
    })

    

    $('.merch__slider-items').slick({
        arrows: true,
        prevArrow: '<div class="black__arrow-prev"></div>',
        nextArrow: '<div class="black__arrow-next"></div>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    infinite: true,
                    dots: true,
                    dotsClass: 'merch__dots',
                }
            },
            {
                breakpoint: 1121,
                settings: {
                    arrows: false,
                    infinite: true,
                    dots: true,
                    slidesToShow: 3,
                    dotsClass: 'merch__dots',
                }
            },
            {
                breakpoint: 850,
                settings: {
                    arrows: false,
                    infinite: true,
                    dots: true,
                    slidesToShow: 2,
                    dotsClass: 'merch__dots',
                }
            },
            {
                breakpoint: 570,
                settings: {
                    arrows: false,
                    infinite: true,
                    dots: true,
                    slidesToShow: 1,
                    dotsClass: 'merch__dots',
                }
            },
        ]
    })
    $('.merch__slider-item__favorite').on('click', function () {
        $(this).toggleClass('merch__slider-item__favorite--checked')
        t.stopPropagation()
    })

    $('.tab__link').on('click', function (e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('tab__link--active');
        $($(this).parent().siblings().find('.tab')).removeClass('tab--active');

        $($(this).parent().parent().siblings().find('.tab')).removeClass('tab--active');

        $(this).addClass('tab__link--active');
        $($(this).attr('href')).addClass('tab--active');

        $('.merch__slider-items').slick('setPosition')
    })




    $('.catalog__menu-viewpanel__btngrid').on('click', function () {
        $($(this).siblings()).removeClass('btn-active')
        $(this).toggleClass('btn-active')
        $('.merch__slider-item__wrapper').removeClass('merch__slider-item__wrapper--line')
    })

    $('.catalog__menu-viewpanel__btnline').on('click', function () {
        $($(this).siblings()).removeClass('btn-active')
        $(this).toggleClass('btn-active')
        $('.merch__slider-item__wrapper').addClass('merch__slider-item__wrapper--line')
    })

    $('.custom').styler();

    $('.filter__list-item__title').on('click', function () {
        $(this).toggleClass('filter__list-item__title--active')
        $($(this).parent().find('.filter__list-item__slide')).slideToggle('200')
        $($(this).parent().find('.filter__list-item__slide')).toggleClass('filter__list-item__slide--active')
    })

    $(".js-range-slider").ionRangeSlider()

    $('.filter__form-more').on('click', function () {
        $(this).toggleClass('form-more--active')
        $('.filter__form-more__content').slideToggle()
    })

    $('.catalog__pagination-item').on('click', function () {
        $($(this).siblings()).removeClass('pagination-active')
        $(this).addClass('pagination-active')
    })

    $(".rate-yo").rateYo({
        normalFill: "#C4C4C4",
        ratedFill: "#1C62CD",
        spacing: "7px"
    })

    $('.header__menu-btn').on('click', function () {
        $('.header-menu__mobile').toggleClass('header-menu__mobile--active')
    })

    $('.footer__list-title-wrapper').on('click', function () {
        $(this).parent().toggleClass('footer__list-title--active')
        $(this).parent().next().slideToggle()
    })
    
    $('.filter__btn--mobile').on('click', function () {
        $(this).toggleClass('filter__btn--mobile--active')
        $(this).next().slideToggle()
    })
});
