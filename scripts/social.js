const inputLinkedin = document.querySelector('.social__input--linkedln');
const buttonNext = document.querySelector('.form__next');
const regexLinkedin = /(www|http:|https:|)+[^\s]+[\w]+[\com]/;

let inputGithub = document.querySelector('#social__input--github');
const regexGithub = /(www|http:|https:|)+[^\s]+[\w]+[\com]/;
const spanGithub = document.querySelector('.form__efect--github');
const spanLinkedin = document.querySelector('.form__efect--linkedin');

function formGitHub() {

    if (regexGithub.test(inputGithub.value)) {
        correctEfect(inputGithub)
        spanGithub.innerHTML = null
    } else {
        incorrectEfect(inputGithub)
        incorrectEfect(spanGithub)
        spanGithub.innerHTML = 'Invalid Url!!'
    }
}

function formLinkedin() {

    if (inputLinkedin.value == '') {
        spanLinkedin.innerHTML = null;
        defaulEfect(inputLinkedin)

    } else if (regexLinkedin.test(inputLinkedin.value)) {
        correctEfect(inputLinkedin)
        spanLinkedin.innerHTML = null
    }
    else {
        incorrectEfect(inputLinkedin)
        incorrectEfect(spanLinkedin)
        spanLinkedin.innerHTML = 'Invalid Url!!'
    }
}




