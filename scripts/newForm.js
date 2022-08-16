const btnNewForm = document.querySelector('.form__create');

btnNewForm.addEventListener('click', newForm);

function newForm() {
    resetDate();
    navigationHeader.classList.remove('off');
    localStorage.clear();
    window.location.reload();
    window.reload();
    fisrtPage();
}