const tegAll = document.querySelector('.all-partners__teg_all');
const tegLibraly = document.querySelector('.all-partners__teg_libraly');
const tegRental = document.querySelector('.all-partners__teg_rental');
const tegShops = document.querySelector('.all-partners__teg_shops');
const tegOther = document.querySelector('.all-partners__teg_other');
const allTegs = document.querySelectorAll('.all-partners__teg');
const allItems = document.querySelectorAll('.all-partners__item');
const shopItems = document.querySelectorAll('.partner__item_shop');
const otherItems = document.querySelectorAll('.partner__item_other');
const libralyItems = document.querySelectorAll('.partner__item_libraly');
const rentalItems = document.querySelectorAll('.partner__item_rental');

function openTabs(target, array) {
    allTegs.forEach((teg) => {
        teg.classList.remove('active');
    });

    allItems.forEach((item) => {
        item.classList.add('hidden');
    });

    target.classList.add('active');

    array.forEach((item) => {
        item.classList.remove('hidden');
    });
}

tegAll.addEventListener('click', () => {
    openTabs(tegAll, allItems);
});
tegLibraly.addEventListener('click', () => {
    openTabs(tegLibraly, libralyItems);
});
tegRental.addEventListener('click', () => {
    openTabs(tegRental, rentalItems);
});
tegShops.addEventListener('click', () => {
    openTabs(tegShops, shopItems);
});
tegOther.addEventListener('click', () => {
    openTabs(tegOther, otherItems);
});