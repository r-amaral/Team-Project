function day() {

    const daySelect = document.querySelector('#date__day')

    for (let i = 1; i <= 31; i++) {
        let dayOption = document.createElement('option');

        if (i == 1) {
            let firstOptionDay = document.createElement('option');
            firstOptionDay.textContent = 'Day'
            firstOptionDay.disabled = true;
            firstOptionDay.selected = true;
            daySelect.appendChild(firstOptionDay);
        }

        dayOption.value = i;
        dayOption.textContent = i;
        daySelect.appendChild(dayOption);
    }
}

function month() {

    const monthSelect = document.querySelector('#date__month');

    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    for (let i = 0; i < monthName.length; i++) {

        if (i == 0) {
            let firstOptionMonth = document.createElement('option');
            firstOptionMonth.textContent = 'Month';
            firstOptionMonth.disabled = true;
            firstOptionMonth.selected = true;
            monthSelect.appendChild(firstOptionMonth);
        }

        let monthOption = document.createElement('option');
        monthOption.value = monthName[i];
        monthOption.textContent = monthName[i];
        monthSelect.appendChild(monthOption);
    }
}

function year() {

    const yearSelect = document.querySelector('#date__year')

    for (let i = 0; i <= 122; i++) {

        if (i == 0) {
            let firstOptionYear = document.createElement('option');
            firstOptionYear.textContent = 'Year';
            firstOptionYear.disabled = true;
            firstOptionYear.selected = true;
            yearSelect.appendChild(firstOptionYear);
        }

        let yearOption = document.createElement('option')
        yearOption.value = 2022 - i;
        yearOption.textContent = 2022 - i;
        yearSelect.appendChild(yearOption);
    }
}
