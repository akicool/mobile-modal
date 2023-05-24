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

const form = document.querySelector('.form');


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
    } else if (!isTelValid(errorTel.value)){
        errorTel.style.border = '1px solid red';
        errorTelText.style.display = 'block';
        field.style.paddingBottom = '3px';
    }
}
  
loginTel.addEventListener('click', onInputTel, inRegistOnTel());
  
function isTelValid(value) {
    return TEL_REGEXP.test(value);
}


//regist field

const registField = document.querySelector('.regist-field');
const travelerBtn = document.getElementById('traveler');
const organizerBtn = document.getElementById('organizer');

const errorName = document.getElementById('name');
const regErrorNameText = document.getElementById('reg-error-name-text');

const errorSurname = document.getElementById('surname');
const regErrorSurnameText = document.getElementById('reg-error-surname-text');

const regErrorPassword = document.getElementById('reg-error-password');
const regErrorPasswordText = document.getElementById('reg-error-password-text');

const regErrorEmail = document.getElementById('reg-error-email');
const regErrorEmailText = document.getElementById('reg-error-email-text');

const regErrorTel = document.getElementById('reg-error-tel');
const regErrorTelText = document.getElementById('reg-error-tel-text');

const loginField = document.getElementById('login-field');


const container = document.querySelector('.container');

loginEmail.addEventListener('click', e => {
    if (isEmailValid(errorEmail.value)) {
        form.style.display = 'none';
        registField.style.display = 'flex';
        container.style.paddingTop = '7vh';
    }
});

function inRegistOnTel() {
    loginTel.addEventListener('click', e => {
        if (isTelValid(errorTel.value)) {
            form.style.display = 'none';
            registField.style.display = 'flex';
            container.style.paddingTop = '7vh';
        }
    });
}

organizerBtn.addEventListener('click', e => {
    organizerBtn.style.backgroundColor = '#FFFFFF';
    travelerBtn.style.backgroundColor = '#EEEEF2';
});

travelerBtn.addEventListener('click', e => {
    travelerBtn.style.backgroundColor = '#FFFFFF';
    organizerBtn.style.backgroundColor = '#EEEEF2';
});


loginField.addEventListener('click', e => {
    if (errorName.value == '') {
        errorName.style.border = '1px solid red';
        regErrorNameText.style.display = 'block';
        field.style.paddingBottom = '3px';
    } else {
        errorName.style.borderColor = 'green';
        regErrorNameText.style.display = 'none';
    }

    if (errorSurname.value == '') {
        errorSurname.style.border = '1px solid red';
        regErrorSurnameText.style.display = 'block';
        field.style.paddingBottom = '3px';
    } else {
        errorSurname.style.borderColor = 'green';
        regErrorSurnameText.style.display = 'none';
    }

    if (regErrorPassword.value == '') {
        regErrorPassword.style.border = '1px solid red';
        regErrorPasswordText.style.display = 'block';
        field.style.paddingBottom = '3px';
    } else {
        regErrorPassword.style.borderColor = 'green';
        regErrorPasswordText.style.display = 'none';
    }

    if (isTelValid(regErrorTel.value)) {
        regErrorTel.style.borderColor = 'green';
        regErrorTelText.style.display = 'none';
    } else {
        regErrorTel.style.border = '1px solid red';
        regErrorTelText.style.display = 'block';
    }

    if (isEmailValid(regErrorEmail.value)) {
        regErrorEmail.style.borderColor = 'green';
        regErrorEmailText.style.display = 'none';
    } else {
        regErrorEmail.style.border = '1px solid red';
        regErrorEmailText.style.display = 'block';   
    }
});

















