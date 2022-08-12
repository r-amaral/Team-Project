const btnNewForm = document.querySelector('.form__create');

btnNewForm.addEventListener('click', newForm)

function newForm() {
    navigationHeader.classList.remove('off');
    form.forEach(form => {
        form.reset();
    })
    fisrtPage();
}