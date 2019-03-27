$(window).scroll(function(){
    if ($(window).scrollTop() >= 800) {
        $('.header, .hero__top-content').addClass('fixed');
    }
    else {
        $('.header, .hero__top-content').removeClass('fixed');
    }
});