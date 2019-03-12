$(document).ready(function () {
    // Brands-slider
    $('.auto-slider').slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // Clients-slider
    $('.clients__slider').slick({
        dots: true,
        customPaging: function (slider, i) {

            return '<i class="far fa-dot-circle"></i>';
        },
        arrows: false,
        fade: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    // Back-to-top
    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 1000) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    $('#button').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    // Header-scroll
    $(window).scroll(function () {
        var windowsize = $(window).width();
    if ($(window).scrollTop() > 0 && windowsize > 992 ) {
            $('.header-container').addClass('background-color-scroll');
            $('#header-menu ul li a.nav-item').addClass('a-color-scroll');
            $('#header-search').addClass('header-icon-scroll');
            $('#header-cart').addClass('header-icon-scroll');
            $('#logo img').attr('src','assets/img/logo-dark-small.png')
            $('#logo img').attr('height','60')
          } else {
            $('.header-container').removeClass('background-color-scroll');
            $('#header-menu ul li a.nav-item').removeClass('a-color-scroll');
            $('#header-search').removeClass('header-icon-scroll');
            $('#header-cart').removeClass('header-icon-scroll');
            $('#logo img').attr('src','assets/img/white-logo.png')
            $('#logo img').attr('height','100')
        }
    });

    // Videos-modal

    // Gets the video src from the data-src on each button

    var $videoSrc;
    $('.video-btn').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {

        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    // Toggle header-menu-lg
    $("#menu-trigger-button").click(function () {
        $("#header-menu").slideToggle("fast");
    });
    
    // Slider-text-effect
    $(window).on('load', function () {
        $('.slider__caption h2').addClass('animated fadeInUp'); 
        $('.slider__caption p').addClass('animated fadeInUp delay-1s'); 
    });
    // Toogle slide header-menu-md
    $(".sub-menu-1").click(function (event) {
        event.stopPropagation();
        $(".sub-menu-1__content").slideToggle("1000");
        // event.stopPropagation();
    });
    $(".mega-menu-1").click(function (event) {
        // event.stopPropagation();
        $(".mega-menu-1__content").slideToggle("slow");
        // event.stopPropagation();
    });
});