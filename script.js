const methodTel = document.getElementById('login-method-by-tel');
const methodEmail = document.getElementById('login-method-by-email');

const field = document.querySelector('.field');
const fieldEmail = document.querySelector('.field--email');
const fieldPhone = document.querySelector('.field--phone');

const loginEmail = document.getElementById('login-email');
const loginTel = document.getElementById('login-tel');
const btnIcon = document.querySelector('.btn--icon');    

const errorEmail = document.getElementById('error-email');
const errorTel = document.getElementById('error-tel');

const errorEmailText = document.getElementById('error-email-text');
const errorTelText = document.getElementById('error-tel-text');


methodTel.addEventListener('click', event => {
    methodTel.style.display = 'none';
    methodEmail.style.display = 'flex';

    loginEmail.style.display = 'none';
    loginTel.style.display = 'flex';

    fieldEmail.style.display = 'none';
    fieldPhone.style.display = 'flex';
});

methodEmail.addEventListener('click', event => {
    methodEmail.style.display = 'none';
    methodTel.style.display = 'flex';

    loginEmail.style.display = 'flex';
    loginTel.style.display = 'none';

    
    fieldEmail.style.display = 'flex';
    fieldPhone.style.display = 'none';
});


const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

loginEmail.addEventListener('click', e => {
    if (errorEmail.value == '' || errorEmail.value === ' ') {
        errorEmail.style.border = '1px solid red';
        errorEmailText.style.display = 'block';
        field.style.paddingBottom = '3px';
    } else if (validateEmail) {
        errorEmail.style.border = '1px solid green';
        errorEmailText.style.display = 'none';
    } 
});

loginTel.addEventListener('click', e => {
    if (errorTel.value == '' || errorTel.value === ' ') {
        errorTel.style.border = '1px solid red';
        errorTelText.style.display = 'block';
        field.style.paddingBottom = '3px';
    } else if (validateEmail) {
        errorTel.style.border = '1px solid green';
        errorTelText.style.display = 'none';
    } 
});


