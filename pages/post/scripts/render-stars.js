const container = document.querySelector('.post__info-stars');
const stars = Array.from(container.querySelectorAll('.post__info-star'));

function renderStars() {
    for (let i = 0; i < container.dataset.stars; i++){
        stars[i].classList.add('yelow');
    };
};
renderStars();