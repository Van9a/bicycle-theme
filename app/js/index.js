/**
 * Created by Admin on 31.10.2018.
 */
$(document).ready(function () {
    $('.main-screen__hamg-menu').click(function () {
        $('.main-screen__hamg-menu').toggleClass('active');
    })
});
$(document).ready(function () {
    $('.main-screen__hamg-menu').click(function () {
        $('.menu #main-screen__menu').toggleClass('open');
    })
});
window.onscroll = function() {myFunction()};

var header = document.getElementById("main-screen__menu");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
$(document).ready(function () {
    //initialize swiper when document ready
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
    });
});
console.clear();