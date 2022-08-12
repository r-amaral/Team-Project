const botaoMore = document.querySelector('.form__button--more');
const formItem = document.querySelector('#certificates');

let arrayFavorito = [];

botaoMore.addEventListener('click', moreCertificates);
formItem.addEventListener('click', FavoriteCertificates);

function FavoriteCertificates(event) {

    const heartElement = document.querySelectorAll('.favorite__icon');

    for (let i = 0; i < heartElement.length; i++) {

        if (event.target == heartElement[i]) {

            const divFavorite = event.target.parentNode;
            const inputFavorite = event.target.previousElementSibling;

            if (divFavorite.classList.contains('favorite__input--active')) {
                renderRemoveFavorite(divFavorite);
            } else renderAddFavorite(divFavorite);

            if (arrayFavorito.indexOf(divFavorite) == -1) {
                arrayFavorito.push(divFavorite);
                divFavorite.remove();
            }
            renderElement(inputFavorite.value);
        }
    }
}

function renderElement(value) {

    let lastItem = [...arrayFavorito].pop();

    lastItem.firstChild.value = value;

    formItem.appendChild(lastItem);
}

function renderRemoveFavorite(div) {
    div.classList.toggle('favorite__input--active');
}

function renderAddFavorite(div) {
    div.classList.add('favorite__input--active');
}

function moreCertificates(event) {

    event.preventDefault();

    const inputCollection = document.querySelectorAll('.favorite__input');

    if (inputCollection.length <= 4) {

        const divElement = document.createElement('div');
        divElement.classList.add('favorite__input');
        document.querySelector('#certificates').appendChild(divElement);

        const inputElement = document.createElement('input');
        inputElement.placeholder = 'https://www.linkedin.com/in/';
        inputElement.classList.add('certificates__input');

        const spanElement = document.createElement('span');
        spanElement.classList.add('favorite__icon');

        const inputCollection = document.querySelectorAll('.favorite__input');

        let lastElement = [...inputCollection].pop();

        lastElement.appendChild(inputElement);
        lastElement.appendChild(spanElement);
    }
}