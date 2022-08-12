const spanBirtday = document.querySelectorAll('.form__efect--birthday')
const inputDay = document.getElementById('date__day');
const inputMonth = document.getElementById('date__month');
const inputYear = document.getElementById('date__year');

function validationBirthdayDay() {
    if (inputDay.value < 0 || inputDay.value > 31 || inputDay.value == '') {
        inputDay.value = '';
        efectBirthdayDay('incorrect')
    } else efectBirthdayDay('correct')

    validationBirthday();
}

function validationBirthdayMonth() {
    if (inputMonth.value < 0 || inputMonth.value > 12 || inputMonth.value == '') {
        inputMonth.value = '';
        efectBirthdayMonth('incorrect')
    } else efectBirthdayMonth('correct')

    validationBirthday();
}

function validationBirthdayYear() {
    if (inputYear.value < 0 || inputYear.value.length != 4 || inputYear.value == '') {
        inputYear.value = '';
        efectBirthdayYear('incorrect')
    } else efectBirthdayYear('correct')

    validationBirthday();
}

function validationBirthday() {

    if (inputDay.value != '' && inputMonth.value != '' && inputYear.value != '')
        calculateAge(inputDay.value, inputMonth.value, inputYear.value)
}


function calculateAge(day, month, year) {

    const inputAge = document.querySelector('#date__age');

    const dateA = new Date();
    const monthA = dateA.getMonth() + 1;
    const yearA = dateA.getFullYear();
    const dayA = dateA.getDate();

    let age = yearA - year;

    if (monthA < month || monthA == month && dayA < day) {
        age = age - 1;
    }

    inputAge.value = age;
}
