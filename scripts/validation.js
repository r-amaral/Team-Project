const inputForm = document.querySelectorAll('.form__input--basic');
const spanEfect = document.querySelectorAll('.form__efect');
const inputCheckBox = document.querySelector('#input__terms');

$('#basic__phone').mask("(99) 99999-9999")

function validationNome() {
    let mascaraNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/

    if (mascaraNome.test(inputForm[0].value)) {
        efectForm('Full Name', 'correct', 'Valid data!!');
    } else {
        efectForm('Full Name', 'incorrect', 'Invalid data!!');
    }
}

function validationNickName() {

    if (inputForm[1].value == '') {
        spanEfect[1].innerHTML = null;
        defaulEfect(inputForm[1])

    } else {
        correctEfect(inputForm[1])
        correctEfect(spanEfect[1])
        spanEfect[1].innerHTML = 'Valid data!!'
    }
}

function validationEmail() {
    let mascaraEmail = /\S+@\S+\.\S+/;

    if (mascaraEmail.test(inputForm[2].value)) {
        efectForm('Email', 'correct', 'Valid data!!');
    } else {
        efectForm('Email', 'incorrect', 'Invalid data!!');
    }
}

function validationPhone() {
    if (inputForm[3].value == '') {
        spanEfect[3].innerHTML = null;
        defaulEfect(inputForm[3])

    } else {
        correctEfect(inputForm[3])
        correctEfect(spanEfect[3])
        spanEfect[3].innerHTML = 'Valid data!!'
    }
}


