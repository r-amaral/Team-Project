const inputLinkedin = document.querySelector('.social__input--linkedln');
const buttonNext = document.querySelector('.form__next');
const regexLinkedin = /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/gm;

let inputGithub = document.querySelector('#social__input--github');
const regexGithub = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_]/;
const spanGithub = document.querySelector('.form__efect--github');
const spanLinkedin = document.querySelector('.form__efect--linkedin');

function formGitHub() {

    if (regexGithub.test(inputGithub.value)) {
        correctEfect(inputGithub)
        correctEfect(spanGithub)
        spanGithub.innerHTML = 'Campo Correto!'
    } else {
        incorrectEfect(inputGithub)
        incorrectEfect(spanGithub)
        spanGithub.innerHTML = 'Campo Incorreto!'
    }
}

function formLinkedin() {

    if (inputLinkedin.value == '') {
        spanLinkedin.innerHTML = null;
        defaulEfect(inputLinkedin)

    } else if (regexLinkedin.test(inputLinkedin.value)) {
        correctEfect(inputLinkedin)
        correctEfect(spanLinkedin)
        spanLinkedin.innerHTML = 'Campo Correto!'
    }
    else {
        incorrectEfect(inputLinkedin)
        incorrectEfect(spanLinkedin)
        spanLinkedin.innerHTML = 'Campo Incorreto!'
    }
}




