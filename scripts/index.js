$(document).ready(function() {
    $('.header__btn-menu').click(function(event) {
    $('.header__btn-menu,.header__list').toggleClass('active');
    $('.body').toggleClass('lock');
    });
});