var $winW, $winH, $isMobile;
$(function () {
    var minState = false;

    chkBrowserSize();
    $(window).resize(function () {
        chkBrowserSize();
    });

    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        var movie = $('.main_top');
        var movieHeight = $(movie).outerHeight(true);
        if (movie.length > 0) {
            stickyHeader(movieHeight);
        }
        if ( $isMobile = true) {
            if ($(window).scrollTop() == 0){
                $('#mobileDownload').removeClass('pc_f').addClass('m_f');
                $('#mobileApply').removeClass('fix');
            } else {
                $('#mobileDownload').removeClass('m_f').addClass('pc_f');
                $('#mobileApply').addClass('fix');
            }
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

    if ($winW < 1165) {
        $isMobile = true;
    } else {
        $isMobile = false;
    }
}