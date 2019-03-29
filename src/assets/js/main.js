// Add active class to the current button (highlight it)
var header = document.getElementById("header__nav");
var menuItem = header.getElementsByClassName("menu__item");
for (var i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active-menu");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active-menu", "");
        }
        this.className += " active-menu";
    });
}
$(document).ready(function () {
    var images = document.getElementsByClassName('parallax');
    var instances = new simpleParallax(images, {
        delay: 0.8,
        orientation: 'down',
        scale: 1.2,
        overfow: false,
    });
    // $("a").click(function (event) {
    //     // code ...
    //     event.preventDefault()
    // });
    // Would you like to be called ?
    $('#be-called').click(function () {
        $('.called-info, #optional-phone-number').toggle();
        var requiredPhoneNumber = $('.required-input')[0].hasAttribute('required');
        var requiredDate = $('.required-input')[1].hasAttribute('required');
        if (!requiredPhoneNumber && !requiredDate) {
            $('.required-input').attr('required','required');
        } else {
            $('.required-input').removeAttr('required');
        }
    });
    // Header animation
    $(window).scroll(function () {
        // check header full view to stop the animation-on mobie view
        var checkHeaderFullView = $('.header').hasClass("full-view");
        // if ($(window).scrollTop() > 240 && !checkHeaderFullView) {
        //     $('.header').addClass('header--sticked');
        //     $('.header__logo img').attr('src', 'assets/img/FX-Mayr-Logo-Sticky.png');
        //     $(".header__nav").css("padding-left", "0");
        // } else {
        //     $('.header').removeClass('header--sticked');
        //     $('.header__logo img').attr('src', 'assets/img/FX-Mayr-Logo-01.png');
        //     $(".header__nav").css("padding-left", "15%");
        // }
        
        // Optimize code above
        const isTop = $(window).scrollTop() > 240 && !checkHeaderFullView;
        const header = $('.header');
        header.toggleClass('header--sticked', isTop);
        header.find('.header__logo img').attr('src', isTop ? 'assets/img/FX-Mayr-Logo-Sticky.png' : 'assets/img/FX-Mayr-Logo-01.png');
        header.find(".header__nav").css("padding-left", isTop ? "0" : "15%");
    });
    // Hamburger-icon
    $('.trigger-menu-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });
    // Toggle-menu-button
    $('.toggle-menu-button').on('click', function () {
        $('.header').toggleClass('full-view');
        $('.header__navbar-wrapper').toggleClass('d-flex');
    });
    // Keyup ESC to close menu on mobile view
    $(document).keyup(function (e) {
        if (e.keyCode === 27) { // esc code
            $('.animated-icon1').removeClass('open');
            $('.header').removeClass('full-view');
            $('.header__navbar-wrapper').removeClass('d-flex');
        }
    });
    // Discover-article filter
    $("#search-filter").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".discover-article__item").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    // Select tab people-page
    $('#my-select').on('change', function (e) {
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
    // Play video without modal 
    $('.video__image').on('click', function () {
        $(this).css('opacity', '0');
        $('.' + this.id).css("display", "block");
        // $('video').attr('autoplay','true');
        // $('video').get(0).play();
        $('video.' + this.id).trigger('play');

    });
    // Video modal
    var $videoSrc;
    $('.video-btn').click(function () {
        $videoSrc = $(this).data("src");
    });
    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src', $videoSrc);
    }) 
});
//trigger collapse people-items
(function ($) {
    var $window = $(window);
    function resize() {
        if ($window.width() < 768) {
            return (
                $('.collapseItem').addClass('collapse'),
                // fx-mayr service on mobile view
                $('.service-item').removeClass('d-block'),
                // header-menu display when resize form mobile to desktop
                $('.header').removeClass('height-auto')
            );
        }
        $('.collapseItem').removeClass('collapse');
        // fx-mayr service on mobile view
        $('.service-item').addClass('d-block');
        // header-menu display when resize form mobile to desktop
        $('.header').addClass('height-auto');
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