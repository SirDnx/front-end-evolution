let passwordInput = document.querySelector('#passwordInput');
let toggleBtn = document.querySelector('#toggleBtn');
let iconBtn = document.querySelector('#icon');

let validationField = document.querySelector('#validationField');

let lowerCase = document.querySelector('#lower');
let upperCase = document.querySelector('#upper');
let numberCharacter = document.querySelector('#number');
let specialCharacter = document.querySelector('#special');
let minLength = document.querySelector('#length');

function checkPassword(data){

    //javascript regex pattern
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*_\-])');
    const length = new RegExp('(?=.{8,})');

    //lowercase validation
    if(lower.test(data)){
        lowerCase.classList.add('valid');
        lowerCase.firstChild.setAttribute('name', 'checkmark-done-outline');
    }else{
        lowerCase.classList.remove('valid');
        lowerCase.firstChild.setAttribute('name', 'stop-circle-outline');
    }

    //uppercase validation
    if(upper.test(data)){
        upperCase.classList.add('valid');
        upperCase.firstChild.setAttribute('name', 'checkmark-done-outline');
    }else{
        upperCase.classList.remove('valid');
        upperCase.firstChild.setAttribute('name', 'stop-circle-outline');
    }

    //number character validation
    if(number.test(data)){
        numberCharacter.classList.add('valid');
        numberCharacter.firstChild.setAttribute('name', 'checkmark-done-outline');
    }else{
        numberCharacter.classList.remove('valid');
        numberCharacter.firstChild.setAttribute('name', 'stop-circle-outline');
    }

    //special character validation
    if(special.test(data)){
        specialCharacter.classList.add('valid');
        specialCharacter.firstChild.setAttribute('name', 'checkmark-done-outline');
    }else{
        specialCharacter.classList.remove('valid');
        specialCharacter.firstChild.setAttribute('name', 'stop-circle-outline');
    }

    //minimum length validation
    if(length.test(data)){
        minLength.classList.add('valid');
        minLength.firstChild.setAttribute('name', 'checkmark-done-outline');
    }else{
        minLength.classList.remove('valid');
        minLength.firstChild.setAttribute('name', 'stop-circle-outline');
    }
}

passwordInput.addEventListener("click", () => {
    validationField.classList.add('showRules');
});

toggleBtn.addEventListener("click", () => {
    if(passwordInput.type === 'password'){
        passwordInput.setAttribute('type', 'text');
        iconBtn.setAttribute('name', 'eye-off-outline');
    }else{
        passwordInput.setAttribute('type', 'password');
        iconBtn.setAttribute('name', 'eye-outline');
    }
});
