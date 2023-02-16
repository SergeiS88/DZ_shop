$(document).ready(function() {
    $('.menu__header').click(function() {
        $('.menu__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
    });
});