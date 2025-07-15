"use strict";

class UserForm {
    loginFormCallback;
    registerFormCallback;
}

class ApiConnector {
    login({ login, password }, callback)
    register({ login, password }, callback)
}

const userForm = new UserForm();
userForm.loginFormCallback = 