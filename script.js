const fieldByPhone = document.querySelector('.btn__by-phone');
const fieldByPhoneEmail = document.querySelector('.by-phone--email');

const fieldEmail = document.querySelector('.field__email');
const fieldTel = document.querySelector('.field-tel');

const buttonTel = document.querySelector('.button--tel');
const fieldButton = document.querySelector('.field__button');    

const fieldEmpty = document.querySelector('.field__empty-email');

fieldByPhone.addEventListener('click', event => {
    fieldByPhone.style.display = 'none';
    fieldByPhoneEmail.style.display = 'flex';

    fieldTel.style.display = 'flex';
    fieldEmail.style.display = 'none';

    buttonTel.style.display = 'flex';
    fieldButton.style.display = 'none';

    fieldEmpty.style.display = 'none';
    fieldEmail.style.border = '1px solid #d1d7e8';
});

fieldByPhoneEmail.addEventListener('click', event => {
    fieldByPhone.style.display = 'flex';
    fieldByPhoneEmail.style.display = 'none';

    fieldTel.style.display = 'none';
    fieldEmail.style.display = 'flex';

    buttonTel.style.display = 'none';
    fieldButton.style.display = 'flex';
});

fieldButton.addEventListener('click', e => {
    if (fieldEmail.value == '') {
        fieldEmail.style.border = '1px solid red';
        fieldEmpty.style.display = 'block';
    } else if (fieldEmail.value == 'a') {
        fieldEmail.style.border = '1px solid green';
        fieldEmpty.style.display = 'none';
    } 
});