function smoothScroll(element_id){
    document.querySelector(element_id).scrollIntoView({
        behavior: 'smooth'
    });
}

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

var lastScrollTop = 0;
$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        // scroll down
        if ($('.nav').isInViewport())
        {
            $('.sidebar').removeClass('active');
        } else {
            $('.sidebar').addClass('active');
        }
    } else {
        // scroll up
        if ($('.nav').isInViewport())
        {
            $('.sidebar').removeClass('active');
        } else {
            $('.sidebar').addClass('active');
        }
    }
    lastScrollTop = st;
});
