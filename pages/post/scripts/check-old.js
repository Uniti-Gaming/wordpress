let now = new Date();
const body = document.querySelector('.body');
const popup = document.querySelector('.popup');
const popupForm = popup.querySelector('.popup__form');
const popupBtn = popupForm.querySelector('.button');
const formYear = popupForm.querySelector('.year');
const formMounth = popupForm.querySelector('.mouth');
const formDay = popupForm.querySelector('.day');
const nowYear = now.getFullYear();

addYear();

function onMouseDownHandler(e) {
    const el = e.currentTarget;

    if (el.hasAttribute('size') && el.getAttribute('size') == '1') {
        e.preventDefault();
    }
}
function onClickHandler(e) {
    e.preventDefault();
    const el = e.currentTarget;

    if (el.getAttribute('size') == '1') {
        el.classList.add('selectOpen');
        el.setAttribute('size', '6');
    }
    else {
        el.classList.remove('selectOpen');
        el.setAttribute('size', '1');
    }
}

function addYear() {
    const yearTemplate = document.querySelector('.popup__option');
    for (let i = nowYear; i >= 1950; i--) {
        const yearClone = yearTemplate.cloneNode(true);
        yearClone.value = i
        yearClone.textContent = i
        formYear.append(yearClone);
    };
};

function activeBtn() {
    popupBtn.classList.remove('disabled');
    popupBtn.disabled = false;
}

function disabledBtn() {
    popupBtn.classList.add('disabled');
    popupBtn.disabled = true;
}

function checkDay() {
    const nowDay = now.getDate() + 1;
    const userDay = formDay.value
    if (userDay < nowDay) {
        activeBtn()
    } else {
        disabledBtn()
    }
}

function checkMounth() {
    const nowMounth = now.getMonth()
    const userMounth = formMounth.value
    if (userMounth < nowMounth) {
        activeBtn()
    } else if (userMounth - nowMounth === 0) {
        checkDay()
        formDay.addEventListener('input', checkDay);
    } else {
        formDay.removeEventListener('input', checkDay);
        disabledBtn()
    }
}

function checkOld() {
    const userYear = nowYear - formYear.value
    if (userYear > 16) {
        activeBtn()
    } else if (userYear === 16) {
        checkMounth();
        formMounth.addEventListener('input', checkMounth);
    } else {
        formMounth.removeEventListener('input', checkMounth);
        formDay.removeEventListener('input', checkDay);
        disabledBtn()
    }
}

function hidePopup(e) {
    e.preventDefault();
    popup.classList.add('hide')
    body.classList.remove('lock');

}

formYear.addEventListener('click', onClickHandler);
formYear.addEventListener('mousedown', onMouseDownHandler);
formMounth.addEventListener('click', onClickHandler);
formMounth.addEventListener('mousedown', onMouseDownHandler);
formDay.addEventListener('click', onClickHandler);
formDay.addEventListener('mousedown', onMouseDownHandler);
formYear.addEventListener('input', checkOld);
popup.addEventListener('click', (evt) => {
    if (evt.target !== formDay) {
        formDay.classList.remove('selectOpen');
        formDay.setAttribute('size', '1');
    };

    if (evt.target !== formMounth) {
        formMounth.classList.remove('selectOpen');
        formMounth.setAttribute('size', '1');
    };

    if (evt.target !== formYear) {
        formYear.classList.remove('selectOpen');
        formYear.setAttribute('size', '1');
    };
});
popupForm.addEventListener('submit', hidePopup)