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

//Email valid
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function onInputEmail() {
    if (isEmailValid(errorEmail.value)) {
        errorEmail.style.borderColor = 'green';
        errorEmailText.style.display = 'none';
    } else {
        errorEmail.style.border = '1px solid red';
        errorEmailText.style.display = 'block';
        field.style.paddingBottom = '3px';
    }
}

loginEmail.addEventListener('click', onInputEmail);

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

//Tel valid
const TEL_REGEXP = /(?:\+|\d)[\d\-\(\) ]{9,}\d/g

function onInputTel() {
    if (isTelValid(errorTel.value)) {
        errorTel.style.borderColor = 'green';
        errorTelText.style.display = 'none';
    } else {
        errorTel.style.border = '1px solid red';
        errorTelText.style.display = 'block';
        field.style.paddingBottom = '3px';
}
}
  
loginTel.addEventListener('click', onInputTel);
  
function isTelValid(value) {
    return TEL_REGEXP.test(value);
}