const botao_clone = document.querySelector('.form__button--more')

botao_clone.addEventListener('click', clone => {

    clone.preventDefault();

    const inputCollection = document.querySelectorAll('.certificates__input');

    if (inputCollection.length <= 4) {
        const inputElement = document.createElement('input');

        inputElement.classList.add('certificates__input');

        document.querySelector('#certificates').appendChild(inputElement);
    }

})