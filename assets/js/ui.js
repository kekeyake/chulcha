var $winW, $winH, $isMobile;
$(function () {
    var minState = false;

    chkBrowserSize();
    $(window).resize(function () {
        chkBrowserSize();
    });


    var swiper = new Swiper('.point_wrap .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.point_wrap .swiper-button-next',
            prevEl: '.point_wrap .swiper-button-prev',
        },
        pagination: {
            el: '.point_wrap .swiper-pagination',
        },
    });


    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        var movie = $('.main_top');
        var movieHeight = $(movie).outerHeight(true);
        if (movie.length > 0) {
            stickyHeader(movieHeight);
        }
    });
    // sticky header
    function stickyHeader(tgHeight) {
        var header = document.getElementById('header');
        var logo = document.getElementById('logo');
        var sticky;
        if (minState = true) {
            sticky = tgHeight;
        } else {
            sticky = 450;
        }

        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            logo.src = "assets/img/logo_b.svg";

        } else {
            header.classList.remove("sticky");
            logo.src = "assets/img/logo_w.svg";

        }
    }	

    $('.btn_apply').on('click',function(){
        $('.layer_pop').addClass('active');
    });

    $('.btn_closed').on('click',function(){
        $('.layer_pop').removeClass('active');
    });


});

function chkBrowserSize() {
    $winW = $(window).width();
    $winH = $(window).height();

    if ($winW < 1025) {
        $isMobile = true;
    } else {
        $isMobile = false;
    }
}