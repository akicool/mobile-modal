const fieldByPhone = document.querySelector('.field__by-phone');
const fieldEmail = document.querySelector('.by-phone--email');

const inputEmail = document.querySelector('.field__email');
const inputTel = document.querySelector('.field__tel');

const buttonTel = document.querySelector('.button--tel');
const fieldButton = document.querySelector('.field__button');

fieldByPhone.addEventListener('click', event => {
    fieldByPhone.style.display = 'none';
    fieldEmail.style.display = 'flex';

    inputTel.style.display = 'flex';
    inputEmail.style.display = 'none';

    buttonTel.style.display = 'flex';
    fieldButton.style.display = 'none';
});

fieldEmail.addEventListener('click', event => {
    fieldByPhone.style.display = 'flex';
    fieldEmail.style.display = 'none';

    inputTel.style.display = 'none';
    inputEmail.style.display = 'flex';

    buttonTel.style.display = 'none';
    fieldButton.style.display = 'flex';
});


