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