"use strict";

const userForm = new UserForm();
userForm.loginFormCallback = (data) => {
    ApiConnector.login(data, (response) => {
        console.log(response);
    });
}

if (success) {
    location.reload();
} else {
    setLoginErrorMessage(message);
}

userForm.registerFormCallback = (data) => {
    ApiConnector.login(data, (response) => {
        console.log(response);
    });
}

if (success) {
    location.reload();
} else {
    setRegisterErrorMessage(message);
}