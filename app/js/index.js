//hamburger menu
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
window.onscroll = function () {
    myFunction()
};
//header fixed
var header = document.getElementById("menu");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

//slider
$(document).ready(function () {
    $('.single-item').slick({
        dots: true,
        accessibility: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        adaptiveHeight: false,
        autoPlay: true,
        autoplaySpeed: 3000,
        arrows: false,
    });
});
console.clear();