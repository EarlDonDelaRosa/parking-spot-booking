function validate(USERLIST, userInput) {
    let errorInput = {};

    for (let i = 0; i < USERLIST.length; i++) {
        if (userInput.username === USERLIST[i].username) {
            // console.log(userInput.username,'+', USERLIST[i].username)
            if (userInput.password === USERLIST[i].password) {
                errorInput.password = null;
                errorInput.passwordValid = true;
                userInput.name = USERLIST[i].name;
                userInput.id = localStorage.setItem('userId', USERLIST[i].id);
            } else {
                errorInput.password = ' Invalid password'
                errorInput.passwordValid = false;
            }
            if (USERLIST[i].admin === 'Y') {
                errorInput.isAdmin = true;
            } else {
                errorInput.isAdmin = false;
            }
            errorInput.username = null;
            errorInput.userValid = true;
            break;
        } else {
            errorInput.username = 'Invalid username';
            errorInput.userValid = false;
            errorInput.password = ' Invalid password'
            errorInput.passwordValid = false;
        }
    }

    if (errorInput.userValid === true && errorInput.passwordValid === true) {
        userInput.loginValid = true;
    }

    if (errorInput.isAdmin === true) {
        userInput.isAdmin = true;
    }

    return errorInput
}

export default validate