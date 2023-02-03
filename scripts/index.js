$(document).ready(function() {
    $('.header__btn-menu').click(function(event) {
    $('.header__btn-menu,.header__list').toggleClass('active');
    $('.body').toggleClass('lock');
    });
});


let buttonsSubMenu = document.querySelectorAll('.header__btn-sub-menu');
if (buttonsSubMenu.length > 0) {
    for (let index = 0; index < buttonsSubMenu.length; index++) {
        const buttonSubMenu = buttonsSubMenu[index];
        buttonSubMenu.addEventListener('click', function(e) {
            buttonSubMenu.parentElement.classList.toggle('active')
            buttonSubMenu.classList.toggle('active')
        });
    }
}