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
        spanGithub.innerHTML = 'Valid data!!'
    } else {
        incorrectEfect(inputGithub)
        incorrectEfect(spanGithub)
        spanGithub.innerHTML = 'Invalid data!!'
    }
}

function formLinkedin() {

    if (inputLinkedin.value == '') {
        spanLinkedin.innerHTML = null;
        defaulEfect(inputLinkedin)

    } else if (regexLinkedin.test(inputLinkedin.value)) {
        correctEfect(inputLinkedin)
        correctEfect(spanLinkedin)
        spanLinkedin.innerHTML = 'Valid data!!'
    }
    else {
        incorrectEfect(inputLinkedin)
        incorrectEfect(spanLinkedin)
        spanLinkedin.innerHTML = 'Invalid data!!'
    }
}




