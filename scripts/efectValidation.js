function efectBirthdayDay(status) {
    if (status == 'correct') {
        spanBirtday[0].innerHTML = null;
        correctEfect(inputDay)
    }
    if (status == 'incorrect') {
        spanBirtday[0].innerHTML = 'Invalid Day!!'
        incorrectEfect(inputDay);
        incorrectEfect(spanBirtday[0]);
    }
}

function efectBirthdayMonth(status) {
    if (status == 'correct') {
        spanBirtday[1].innerHTML = null;
        correctEfect(inputMonth)
    }
    if (status == 'incorrect') {
        spanBirtday[1].innerHTML = 'Invalid Month!!'
        incorrectEfect(inputMonth);
        incorrectEfect(spanBirtday[1]);
    }
}

function efectBirthdayYear(status) {
    if (status == 'correct') {
        spanBirtday[2].innerHTML = null;
        correctEfect(inputYear)
    }
    if (status == 'incorrect') {
        spanBirtday[2].innerHTML = 'Invalid Year!!'
        incorrectEfect(inputYear);
        incorrectEfect(spanBirtday[2]);
    }
}

function efectForm(input, status, message) {

    if (input == 'Full Name' && status == 'correct') {
        correctEfect(inputForm[0]);
        spanEfect[0].innerHTML = null;
    }

    if (input == 'Full Name' && status == 'incorrect') {
        incorrectEfect(inputForm[0]);
        incorrectEfect(spanEfect[0]);
        spanEfect[0].innerHTML = message;
    }

    if (input == 'Email' && status == 'correct') {
        correctEfect(inputForm[2]);
        spanEfect[2].innerHTML = null;
    }

    if (input == 'Email' && status == 'incorrect') {
        incorrectEfect(inputForm[2]);
        incorrectEfect(spanEfect[2]);
        spanEfect[2].innerHTML = message;
    }
}

function correctEfect(item) {
    item.classList.add('form__states--correct');
    item.classList.remove('form__states--incorrect');
    item.classList.remove('form__states--default');
}

function incorrectEfect(item) {
    item.classList.add('form__states--incorrect');
    item.classList.remove('form__states--correct');
    item.classList.remove('form__states--default');
}

function defaulEfect(item) {
    item.classList.add('form__states--default');
    item.classList.remove('form__states--incorrect');
}
