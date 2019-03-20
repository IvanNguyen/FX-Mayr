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
        // check header full view to stop the animation-on mobie view
        var checkHeaderFullView = $('.header').hasClass("full-view");
        if ($(window).scrollTop() > 240 && !checkHeaderFullView) {
            $('.header').addClass('header--sticked');
            $('.header__logo img').attr('src', 'assets/img/FX-Mayr-Logo-Sticky.png');
            $(".header__nav").css("padding-left", "0");
        } else {
            $('.header').removeClass('header--sticked');
            $('.header__logo img').attr('src', 'assets/img/FX-Mayr-Logo-01.png');
            $(".header__nav").css("padding-left", "15%");
        }
    });
    // Hamburger-icon
    $('.first-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });
    // Toggle-menu-button
    $('.toggle-menu-button').on('click', function () {
        $('.header').toggleClass('full-view');
        $('.header__navbar-wrapper').toggleClass('d-flex');
    });
    // Discover-article filter
    $("#search-filter").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".discover-article__item").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    // Select tab people-page
    $('#mySelect').on('change', function (e) {
        $('#myTab li a').eq($(this).val()).tab('show');
    });
    // Select service - Fx-Mayr page
    $('#select-service').change(function(){
        $('.service-item').hide();
        $('.' + $(this).val()).show();
      });
    // Select category - Discover page
    $('#select-category').change(function(){
        $('.filterDiv').hide();
        $('.' + $(this).val()).show();
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
// Filter discover-article div-element
filterSelection("all");
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}