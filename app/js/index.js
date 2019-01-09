//hamburger menu
$(document).ready(function () {
    $('.hamburg-menu').click(function () {
        $('.hamburg-menu').toggleClass('hamburg-menu--active');
    })
});
$(document).ready(function () {
    $('.hamburg-menu').click(function () {
        $('#menu').toggleClass('menu--open');
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
        header.classList.add("menu--fixed");
    } else {
        header.classList.remove("menu--fixed");
    }
}

//slider
$(document).ready(function () {
    $('.contact').slick({
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