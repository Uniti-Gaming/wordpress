const body = document.querySelector('.body');
const main = document.querySelector('.main');
const popup = document.querySelector('.check-old');
const popupForm = popup.querySelector('.check-old__form');
const popupBtn = popupForm.querySelector('.button');
const now = new Date();
const nowYear = now.getFullYear();
const days = Array.from({length: 31}, (_, i) => i + 1);
const years = Array(nowYear - (nowYear - 70)).fill('').map((v, idx) => nowYear - idx);
const mounthes = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
]
let userMes = 12
let userYear = nowYear
let userDay = 31

const selectDay = new Select('.check-old__day', {
    placeholder: 'День',
    data: days,
    onSelect (text, index) {
        userDay = text;
        toggleBtn()
        return userDay
    }
});

const selectMounth = new Select('.check-old__mounth', {
    placeholder: 'Месяц',
    data: mounthes,
    onSelect (text, index) {
        userMes = index;
        toggleBtn()
        return userMes
    }
});

const selectYear = new Select('.check-old__year', {
    placeholder: 'Год',
    data: years,
    onSelect (text, index) {
        userYear = text;
        toggleBtn()
        return userYear
    }
});

function activeBtn() {
    popupBtn.classList.remove('disabled');
    popupBtn.disabled = false;
}

function disabledBtn() {
    popupBtn.classList.add('disabled');
    popupBtn.disabled = true;
}

function toggleBtn() {
    checkOld() ? activeBtn() : disabledBtn();
}

function checkDay() {
    const nowDay = now.getDate() + 1;
    if (userDay < nowDay) {
        return true
    } else {
        return false
    }
}

function checkMounth() {
    const nowMounth = now.getMonth()
    if (userMes < nowMounth) {
        return true
    } else if (userMes - nowMounth === 0) {
        return checkDay()
    } else {
        return false
    }
}

function checkOld() {
    const userOldYear = nowYear - userYear
    if (userOldYear > 16) {
        return true
    } else if (userOldYear === 16) {
        return checkMounth()
    } else {
        return false
    }
}

function hidePopup(e) {
    e.preventDefault();
    popup.classList.add('hide')
    main.classList.remove('hide');
    window.scrollTo({
        top: 0,
        left: 0,
      })
}

popupForm.addEventListener('submit', hidePopup)