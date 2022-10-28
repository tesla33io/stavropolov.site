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
            $('.sidebar').css("display", "none");
            // $('.nav').css("display", "flex");
        } else {
            $('.sidebar').css("display", "flex");
            // $('.nav').css("display", "none");
        }
    } else {
        // scroll up
        if ($('#nav').isInViewport())
        {
            $('.sidebar').css("display", "none");
            // $('.nav').css("display", "flex");
        } else {
            $('.sidebar').css("display", "flex");
            // $('.nav').css("display", "none");
        }
    }
    lastScrollTop = st;
});
// $(window).bind('mousewheel', function(event) {
//     if (event.originalEvent.wheelDelta >= 0) {
//         console.log('up');
//     }
//     else {
        
//     }
//     });