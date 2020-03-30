(function ($) {
    $(function () {

    }); // end of document ready
})(jQuery); // end of jQuery name space

// Or with jQuery


$(document).ready(function () {
    $('.nav-vertical').sidenav();
    $('.nav-mobile').sidenav();
});

$('#scroll a').click(function (e) {
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - 200
    }, 500);

});

$(window).scroll(function () {
    if ($(document).scrollTop() > 400) {
        $('.content').addClass('content-top');
        $('.flex').addClass('flex-top');
        $('.falsa').addClass('hide');
        $('.brand').addClass('brand-top');
        $('.flex-right').addClass('flex-right-top');
        $('.nav-vertical').addClass('nav-top');
        $('.btn-mobile').removeClass('top-btn');
        $('.rd-sociais').addClass('rd-sociais-bg');

        
    } else {
        $('.content').removeClass('content-top');
        $('.flex').removeClass('flex-top');
        $('.falsa').removeClass('hide');
        $('.brand').removeClass('brand-top');
        $('.flex-right').removeClass('flex-right-top');
        $('.nav-vertical').removeClass('nav-top');
        $('.btn-mobile').addClass('top-btn');
        $('.rd-sociais').removeClass('rd-sociais-bg');

        
    }
});