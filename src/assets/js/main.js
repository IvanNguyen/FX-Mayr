$(document).ready(function () {
    var images = document.getElementsByClassName('parallax');
    var instances = new simpleParallax(images, {
        delay: 0.6,
        orientation: 'up',
        scale: 1.2,
        overfow: false,
    });
});