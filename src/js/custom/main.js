// Cambios al header al dar scroll
var flag = false;
var scroll;

$(window).scroll(function () {
    scroll = $(window).scrollTop();

    if (scroll > 10) {
        if (!flag) {
            $(".main-header").addClass('scroll');

            flag = true;
        }
    } else {
        if (flag) {
            $(".main-header").removeClass('scroll');
            flag = false;
        }
    }

                   
    var seccion = $(".info-block").offset();
    seccion = seccion.top;

    var seccion2 = $(".porque-elegirnos").offset();
    seccion2 = seccion2.top;


    if(scroll >= seccion){
        $('.call-action3').addClass('block');
        $('.call-action3').removeClass('active');
    }
    else{
        $('.call-action3').removeClass('block');
        $('.call-action3').addClass('active');
    }
    if(scroll >= seccion2){
        $('.call-action3-mobile').addClass('block');
        $('.call-action3-mobile').removeClass('active');
    }
    else{
        $('.call-action3-mobile').removeClass('block');
        $('.call-action3-mobile').addClass('active');
    }
});
