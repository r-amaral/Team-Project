const navigationItem = document.querySelectorAll('.navigation__item');
const btnNext = document.querySelectorAll('.form__next');
const btnFinish = document.querySelector('.form__button--finish');
const telaDisplay = document.querySelectorAll('.display--main');
const form = document.querySelectorAll('.form__content');
const navigationHeader = document.querySelector('.display--header');

form.forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault();
    })
})

function fisrtPageBlock() {

    if (inputForm[0].classList.contains('form__states--correct') && inputForm[1].classList.contains('form__states--correct') && inputForm[2].classList.contains('form__states--correct') && inputDay.classList.contains('form__states--correct') && inputMonth.classList.contains('form__states--correct') && inputForm[3].classList.contains('form__states--correct') && inputYear.classList.contains('form__states--correct') && inputCheckBox.checked) {
        btnNext[0].classList.add('form__button--active');
        activeFirstPageButton();
    } else {
        btnNext[0].classList.remove('form__button--active');
        desactiveFirstPageButton();
    }
}

function secondyPageBlock() {
    if (inputGithub.classList.contains('form__states--correct') && inputLinkedin.classList.contains('form__states--correct')) {
        btnNext[1].classList.add('form__button--active');
        activeSecondPageButton();
    } else {
        btnNext[1].classList.remove('form__button--active');
        desactiveSecondPageButton();
    }
}

function thirdPageBlock() {
    if (inputTeamName.classList.contains('form__states--correct') && inputInstitution.classList.contains('form__states--correct') && inputGraduation.classList.contains('form__states--correct')) {
        btnFinish.classList.add('form__button--active')
        activeFinshButton();
    } else {
        btnFinish.classList.remove('form__button--active')
        desactiveFinishButton();
    }
}

function activeFirstPageButton() {
    btnNext[0].addEventListener('click', secondyPage);
    navigationItem[0].addEventListener('click', fisrtPage);
    navigationItem[1].addEventListener('click', secondyPage);
}

function activeFinshButton() {
    btnFinish.addEventListener('click', fourthPage);
}

function desactiveFinishButton() {
    btnFinish.removeEventListener('click', fourthPage);
}

function desactiveFirstPageButton() {
    btnNext[0].removeEventListener('click', secondyPage);
    navigationItem[0].removeEventListener('click', fisrtPage);
    navigationItem[1].removeEventListener('click', secondyPage);
}

function activeSecondPageButton() {
    btnNext[1].addEventListener('click', thirdPage);
    navigationItem[2].addEventListener('click', thirdPage);
}

function desactiveSecondPageButton() {
    btnNext[1].removeEventListener('click', thirdPage);
    navigationItem[2].removeEventListener('click', thirdPage);
}

function fisrtPage() {

    navigationItem.forEach((item, index) => {
        if (index == 0) {
            item.classList.add('navigation__item--active');
        } else item.classList.remove('navigation__item--active');
    })

    telaDisplay.forEach((item, index) => {
        if (index == 0) {
            item.classList.remove('off');
        } else item.classList.add('off');
    })
}

function secondyPage() {

    navigationItem.forEach((item, index) => {
        if (index == 1) {
            item.classList.add('navigation__item--active');
        } else item.classList.remove('navigation__item--active');
    })

    telaDisplay.forEach((item, index) => {
        if (index == 1) {
            item.classList.remove('off');
        } else item.classList.add('off');
    })
}

function thirdPage() {

    navigationItem.forEach((item, index) => {
        if (index == 2) {
            item.classList.add('navigation__item--active');
        } else item.classList.remove('navigation__item--active');
    })

    telaDisplay.forEach((item, index) => {
        if (index == 2) {
            item.classList.remove('off');
        } else item.classList.add('off');
    })
}

function fourthPage() {
    navigationHeader.classList.add('off');

    navigationItem.forEach((item, index) => {
        if (index == 3) {
            item.classList.add('navigation__item--active');
        } else item.classList.remove('navigation__item--active');
    })

    telaDisplay.forEach((item, index) => {
        if (index == 3) {
            item.classList.remove('off');
        } else item.classList.add('off');
    })

}

