const botaoMore = document.querySelector('.form__button--more');
const formItem = document.querySelector('#certificates');

let arrayFavorito = [];
let arrayAntigo = [];

botaoMore.addEventListener('click', moreCertificates);
formItem.addEventListener('click', FavoriteCertificates);

function FavoriteCertificates(event) {

    const heartElement = document.querySelectorAll('.favorite__icon');

    for (let i = 0; i < heartElement.length; i++) {

        if (event.target == heartElement[i]) {

            const divFavorite = event.target.parentNode;

            if (arrayFavorito.indexOf(divFavorite) == -1) {
                arrayFavorito.push(divFavorite);
                divFavorite.remove();  
            }
            renderDiv();
        }
    }
}

function renderDiv() {

    let lastItem = [...arrayFavorito].pop();

    formItem.innerHTML += `
        <div class='favorite__input favorite__input--active'>
            ${lastItem.innerHTML}
        </div>
    `
}

function renderRemoveFavorite(div) {
    const favoriteDiv = document.querySelectorAll('.favorite__input');

    div.classList.remove('favorite__input--active');
}

function moreCertificates(event) {

    event.preventDefault();

    const inputCollection = document.querySelectorAll('.favorite__input');

    if (inputCollection.length <= 4) {

        const divElement = document.createElement('div');
        divElement.classList.add('favorite__input');
        document.querySelector('#certificates').appendChild(divElement);

        const inputElement = document.createElement('input');
        inputElement.placeholder = 'favo';
        inputElement.classList.add('certificates__input');

        const spanElement = document.createElement('span');
        spanElement.classList.add('favorite__icon');

        const inputCollection = document.querySelectorAll('.favorite__input');

        let lastElement = [...inputCollection].pop();

        lastElement.appendChild(inputElement);
        lastElement.appendChild(spanElement);
    }
}