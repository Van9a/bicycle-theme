/**
 * Created by Admin on 31.10.2018.
 */
$(document).ready(function () {
    //initialize swiper when document ready
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
    });
    swiper();
});
$(document).ready(function () {
    $('.icon').click(function () {
        $('.icon').toggleClass('active');
    })
});
$(document).ready(function () {
    $('.icon').click(function () {
        $('.menu ul').toggleClass('open');
    })
});