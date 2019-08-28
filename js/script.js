$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 4000,
        pagination: false
    });

    $("#navigation li a").click(function(e) {
        var targetElement = $(this).attr("href");
    
                if(targetElement.indexof("http") >= 0) {
                    return;
                }
    
                e.preventDefault();
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
    });
    
    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

        var body = $("body");
        
        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }
});


