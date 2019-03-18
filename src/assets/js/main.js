$(document).ready(function () {
    var images = document.getElementsByClassName('parallax');
    var instances = new simpleParallax(images, {
        delay: 0.8,
        orientation: 'down',
        scale: 1.2,
        overfow: false,
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