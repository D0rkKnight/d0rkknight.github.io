// On document load
$(function() {
    $("#nav_container").load("navbar.html", null, headerLoadCB);
});

function headerLoadCB() {

    // Handle active tab highlights
    var tabs = $("#topnav");
    var activeClass = "active";

    tabs.children("."+activeClass).removeClass(activeClass);

    var path = window.location.pathname;
    tabs.children('a').each(function () {
        if ($(this).attr('href') == path) $(this).addClass(activeClass);
    });

    // Hover effects
    tabs.children('a').hover(headerTabHoverInCB, headerTabHoverOutCB);
}

function headerTabHoverInCB() {
    $(this).animate({top: '10px'}, 'fast');
}

function headerTabHoverOutCB() {
    $(this).animate({top: '0px'}, 'fast');
}