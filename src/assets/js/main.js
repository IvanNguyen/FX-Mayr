$(document).ready(function () {
    var images = document.getElementsByClassName('parallax');
    var instances = new simpleParallax(images, {
        delay: 0.8,
        orientation: 'down',
        scale: 1.2,
        overfow: false,
    });

    // Would you like to be called ?
    $('#be-called').click(function () {
        $('.called-info, #optional-phone-number').toggle(); 
    });
    // Header animation
    $(window).scroll(function () {
        if ($(window).scrollTop() > 240) {
            $('.header').addClass('header--sticked');
        } else {
            $('.header').removeClass('header--sticked');
        }
    });
});
//trigger collapse people-items
(function ($) {
    var $window = $(window)
    function resize() {
        if ($window.width() < 768) {
            return $('.collapseItem').addClass('collapse');
        }
        $('.collapseItem').removeClass('collapse');
    }
    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);
// Jquery Datepicker
$(function () {
    $("#datepicker").datepicker();
});