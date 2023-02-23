// General Variables

const form = document.getElementById('form');
const confirmForm = document.getElementById('js-confirm-form');

// Data Variables

const userName = document.getElementById('js-username');
const userMail = document.getElementById('js-mail');
const userPassword = document.getElementById('js-password');
const userRepeatPassword = document.getElementById('js-repeat-password');

// Errors Variables

const userNameError = document.getElementById('js-username-error');
const userMailError = document.getElementById('js-mail-error');
const userPasswordError = document.getElementById('js-password-error');
const userRepeatPasswordError = document.getElementById('js-repeat-password-error');

// Code

const showError = (input, inputError, message) => {
    input.classList.remove('succes');
    input.classList.add('error');

    inputError.textContent = message;
}

const showSucces = (input, inputError, message) => {
    input.classList.add('succes');
    input.classList.remove('error');

    inputError.textContent = '';
}

const isRequired = value => value === '' ? false : true;

const checkUserName = () => {

    let valid = false;

    const userNameValue = userName.value.trim();

    if (!isRequired(userNameValue)) {
        showError(userName, userNameError, 'To pole nie może być puste.');
    } else if (userName.value.length < 3 || userName.value.length > 10) {
        showError(userName, userNameError, 'Ilość znaków powinna być od 3 do 10.');
    } else {
        showSucces(userName, userNameError);
        valid = true;
    }

    return valid;
}

const checkMail = () => {

    let valid = false;

    const mailCharacters = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const userMailValue = userMail.value.trim();

    if (!isRequired(userMailValue)) {
        showError(userMail, userMailError, "To pole nie może być puste.");
    } else if (!userMail.value.match(mailCharacters)) {
        showError(userMail, userMailError, 'Mail jest niepoprawny.');
    } else {
        showSucces(userMail, userMailError);
        valid = true;
    }

    return valid;

}

const checkPassword = () => {

    let valid = false;

    const passwordCharacters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const userPasswordValue = userPassword.value.trim();

    if (!isRequired(userPasswordValue)) {
        showError(userPassword, userPasswordError, "To pole nie może być puste");
    } else if (!userPassword.value.match(passwordCharacters)) {
        showError(userPassword, userPasswordError, "Hasło musi zawierać: Małą literę, Dużą literę, Liczbę oraz zawierać conajmniej 8 znaków.")
    } else {
        showSucces(userPassword, userPasswordError);
        valid = true
    }

    return valid;

}

const checkRepeatPassword = () => {

    let valid = false;

    const userRepeatPasswordValue = userRepeatPassword.value.trim();

    if (!isRequired(userRepeatPasswordValue)) {
        showError(userRepeatPassword, userRepeatPasswordError, "To pole nie może być puste.")
    } else if (userRepeatPassword.value !== userPassword.value){
        showError(userRepeatPassword, userRepeatPasswordError, "Hasła nie są takie same.")
    } else {
        showSucces(userRepeatPassword, userRepeatPasswordError)
        valid = true
    }

    return valid

}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isUserNameValid = checkUserName(),
        isMailValid = checkMail(),
        isPasswordValid = checkPassword(),
        isRepeatPasswordValid = checkRepeatPassword()

    let isFormValid = isUserNameValid && isMailValid && isPasswordValid && isRepeatPasswordValid;

    if (isFormValid) {

    }
})