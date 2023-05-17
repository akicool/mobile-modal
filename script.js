const fieldByPhone = document.querySelector('.btn__by-phone');
const fieldByPhoneEmail = document.querySelector('.btn__by-phone--email');

const fieldEmail = document.querySelector('.field__email');
const fieldTel = document.querySelector('.field-tel');

const buttonTel = document.querySelector('.button--tel');
const formButton = document.querySelector('.form__button');    

const fieldEmpty = document.querySelector('.field__empty-email');

fieldByPhone.addEventListener('click', event => {
    fieldByPhone.style.display = 'none';
    fieldByPhoneEmail.style.display = 'flex';

    fieldTel.style.display = 'flex';
    fieldEmail.style.display = 'none';

    buttonTel.style.display = 'flex';
    formButton.style.display = 'none';

    fieldEmpty.style.display = 'none';
    fieldEmail.style.border = '1px solid #d1d7e8';
});

fieldByPhoneEmail.addEventListener('click', event => {
    fieldByPhone.style.display = 'flex';
    fieldByPhoneEmail.style.display = 'none';

    fieldTel.style.display = 'none';
    fieldEmail.style.display = 'flex';

    buttonTel.style.display = 'none';
    formButton.style.display = 'flex';
});

formButton.addEventListener('click', e => {
    if (fieldEmail.value == '') {
        fieldEmail.style.border = '1px solid red';
        fieldEmpty.style.display = 'block';
    } else if (fieldEmail.value == 'a') {
        fieldEmail.style.border = '1px solid green';
        fieldEmpty.style.display = 'none';
    } 
});