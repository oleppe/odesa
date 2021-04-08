$(function() {


    if (!device.mobile() && !device.tablet()) {
        $('.section-fivesteps .section-fivesteps__item').hover(function() {
            $(this).addClass('hover').prevAll().addClass('check');
        }, function() {
            $(this).removeClass('hover').prevAll().removeClass('check').removeClass('click');
            $(this).closest('.section-fivesteps__list').find('.section-fivesteps__item.active').prevAll().addClass('check');
            $(this).removeClass('click');
        });
    }

    $('.section-fivesteps .section-fivesteps__item').on('click', '.section-fivesteps__item-content', function(e) {

        if ($(window).outerWidth() <= 575) {
            e.preventDefault();
            if ($(this).closest('.section-fivesteps__item').hasClass('click')) {
                var link = $(this).attr('href');
                document.location.href = link;
            } else {
                $(this).closest('.section-fivesteps__item').siblings().removeClass('click').removeClass('hover');
                $(this).closest('.section-fivesteps__item').addClass('click').addClass('hover').prevAll().addClass('check');
            }
        }

    });



    // When Scroll body Sticky Nav bar
    $(window).scroll(function() {
        const scroll = $(this).scrollTop(),
            heightHead = $(".main-navbar").innerHeight();
        //add class in nav
        if (scroll > heightHead) {
            if ($("#navbar_top").hasClass() !== "fixed-top") {
                $("#navbar_top").addClass("fixed-top animate__animated animate__fadeInDown show");
            }
        } else {
            $("#navbar_top").removeClass("fixed-top animate__animated animate__fadeInDown show");
        }

    });

    //mobile 
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos < currentScrollPos) {
            document.getElementsByClassName("fixed-form-mob")[0].style.bottom = "0";
        } else {
            //document.getElementsByClassName("fixed-form-mob")[0].style.bottom = "-50px";
        }
        prevScrollpos = currentScrollPos;
    }

    $('.responsive').slick({
        arrows: true,
        prevArrow: $('.prev-ers'),
        nextArrow: $('.next-ers'),
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });


    // var elemForWidth = document.compatMode == 'CSS1Compat' ? document.documentElement : document.body;

    // if ($(elemForWidth).width() < 600) {
    //     setTimeout(function() {
    //         var hY = $('.section-fivesteps').offset().top - 110;
    //         // $('HTML, BODY').animate({
    //         //     scrollTop: hY
    //         // }, 666);
    //     }, 500);
    // }

    $(".slider-main").slick({
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true,
        arrows: false,
        dots: true,
        appendDots: $('.slick-slider-dots'),
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    variableWidth: false,

                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },

        ],
    });

    $('.carousel-prev').click(function() {
        $('.slider-main').slick('slickPrev');
    });

    $('.carousel-next').click(function(e) {
        e.preventDefault();
        $('.slider-main').slick('slickNext');
    });


    var $sliderVideo = $(".slider-video").slick({
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true,
        arrows: false,
        dots: true,
        onAfterChange: function(slide, index) {
            console.log(index);
        },
        appendDots: $('.slick-gallery-dots'),
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    variableWidth: false,

                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },

        ],
    });
    $('.carousel-prev').click(function() {
        $('.slider-video').slick('slickPrev');
    });

    $('.carousel-next').click(function(e) {
        e.preventDefault();
        $('.slider-video').slick('slickNext');
    });


    $sliderVideo.on('afterChange', function(event, slick, currentSlide) {
        // Hide/show captions
        console.log(currentSlide);
    });
    /*************************** */

});


function next() {
    document.getElementsByClassName("header-second-background")[0].classList.remove('d-none');
    document.getElementById("second").classList.remove('inactive');
    document.getElementById("second").classList.add('active');
    document.getElementById("first").classList.remove('active');
    document.getElementById("first").classList.add('inactive');
}

function prev() {
    document.getElementsByClassName("header-second-background")[0].classList.add('d-none');
    document.getElementById("first").classList.remove('inactive');
    document.getElementById("first").classList.add('active');
    document.getElementById("second").classList.remove('active');
    document.getElementById("second").classList.add('inactive');
}