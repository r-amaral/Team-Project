function efectBirthdayDay(status) {
    if (status == 'correct') {
        spanBirtday[0].innerHTML = 'Valid data!!'
        correctEfect(spanBirtday[0])
        correctEfect(inputDay)
    }
    if (status == 'incorrect') {
        spanBirtday[0].innerHTML = 'Invalid data!!'
        incorrectEfect(inputDay);
        incorrectEfect(spanBirtday[0]);
    }
}

function efectBirthdayMonth(status) {
    if (status == 'correct') {
        spanBirtday[1].innerHTML = 'Valid data!!'
        correctEfect(spanBirtday[1])
        correctEfect(inputMonth)
    }
    if (status == 'incorrect') {
        spanBirtday[1].innerHTML = 'Invalid data!!'
        incorrectEfect(inputMonth);
        incorrectEfect(spanBirtday[1]);
    }
}

function efectBirthdayYear(status) {
    if (status == 'correct') {
        spanBirtday[2].innerHTML = 'Valid data!!'
        correctEfect(spanBirtday[2])
        correctEfect(inputYear)
    }
    if (status == 'incorrect') {
        spanBirtday[2].innerHTML = 'Invalid data!!'
        incorrectEfect(inputYear);
        incorrectEfect(spanBirtday[2]);
    }
}

function efectForm(input, status, message) {

    if (input == 'Full Name' && status == 'correct') {
        correctEfect(spanEfect[0]);
        correctEfect(inputForm[0]);
        spanEfect[0].innerHTML = message;
    }

    if (input == 'Full Name' && status == 'incorrect') {
        incorrectEfect(inputForm[0]);
        incorrectEfect(spanEfect[0]);
        spanEfect[0].innerHTML = message;
    }

    if (input == 'Email' && status == 'correct') {
        correctEfect(inputForm[2]);
        correctEfect(spanEfect[2]);
        spanEfect[2].innerHTML = message;
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
