var slides = $('.swiper-container .swiper-slide');
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    // effect: 'cube',
    grabCursor: true,
    onInit: function(swiper) {
        slides.removeClass('cactive').eq(swiper.snapIndex).addClass('cactive');
    },
    onSlideChangeEnd: function() {

        slides.removeClass('cactive').eq(swiper.snapIndex).addClass('cactive');

    },
    direction: 'vertical',
    lazyLoading: true,
    lazyLoadingInPrevNext: true,
    lazyLoadingInPrevNextAmount: 2,
    // cube: {
    //     shadow: true,
    //     slideShadows: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94
    // }
});