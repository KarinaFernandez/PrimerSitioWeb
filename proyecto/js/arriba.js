$(document).ready(function() {

    $('.ir-arriba').click(function() {
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.ir-arriba').slideDown(300);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });
});


$('.carousel').carousel({
    interval: 2000
});


/*

$(".titulo").hover(function() {
   console.log("entre a mose");
    $(this).removeClass("info");
    $(this).addClass("desc");
});


$(".limite-articulo").mouseleave(function() {
     $(this).removeClass("desc");
    $(this).addClass("info");

});
*/