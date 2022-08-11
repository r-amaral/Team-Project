var input_Ativo = document.querySelector('.social__input--linkedln');
var buttonNext = document.querySelector('.form__next');
var regexLinkedin = /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/gm;

var inputGithub = document.querySelector('.social__input--github');
var regexGithub = /^(http(s)?:\/\/)?github\.com\//gm;

function form(event) {
  event.preventDefault();

  if (regexLinkedin.test(input_Ativo.value)) {
    console.log('oi');
  } else {
    console.log('hello');
  }

  if (regexGithub.test(inputGithub.value)) {
    console.log('oi');
  } else {
    console.log('hello');
  }
}

buttonNext.addEventListener('click', form);

// function form(event) {
//   event.preventDefault();


// }

// buttonNext.addEventListener('click', form);