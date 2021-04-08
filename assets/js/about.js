$(document).ready(function() {
    var fixmeTop = $('.fixed-sidebar-form').offset().top - 400; // get initial position of the element

    $(window).scroll(function() { // assign scroll event listener

        var currentScroll = $(window).scrollTop(); // get current position

        if (currentScroll >= fixmeTop) { // apply position: fixed if you
            $('.fixed-sidebar-form').css({ // scroll to that element or below it
                position: 'fixed',
                top: '190px',
            });
        } else { // apply position: static
            $('.fixed-sidebar-form').css({ // if you scroll above it
                position: 'static'
            });
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
});