window.onload = function() {
    var validateEmailInput, validatePasswordInput, emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;;
    var pErrors = document.getElementsByClassName("font-red");
    var emailField = document.getElementsByName("email");
    var passwordField = document.getElementsByName("password");
    var passwordInput;
    var emailInput;

    //Email validation
    emailField[0].onfocus = function() {
        emailField[0].removeAttribute("placeholder");
        pErrors[0].classList.remove("display-flex");
        pErrors[1].classList.remove("display-flex");
    }

    emailField[0].onblur = function() {
        emailInput = emailField[0].value;
        if (emailInput.match(emailExpression)) {
            validateEmailInput = true;
        }
        else {
            validateEmailInput = false;
        }

        if (emailInput == '') {
            pErrors[1].classList.add("display-flex");
            emailField[0].setAttribute("style", "border: 2px solid red")
        }

        if (!validateEmailInput && emailInput != '') {
            pErrors[0].classList.add("display-flex");
            emailField[0].setAttribute("style", "border: 2px solid red")
        }

        if (validateEmailInput) {
            emailField[0].setAttribute("style", "border: 2px solid green")
        }
    }

    //Password validation
    passwordField[0].onfocus = function() {
        passwordField[0].removeAttribute("placeholder");
        pErrors[2].classList.remove("display-flex");
        pErrors[3].classList.remove("display-flex");
        passwordField[0].setAttribute("style", "border: 1px solid red")
    }
    passwordField[0].onblur = function() {
        passwordInput = passwordField[0].value;
        var passwordInputAux = (passwordField[0].value).toLowerCase();
        if (passwordInput.length >= 8) {
            for(var i = 0; i < passwordInputAux.length;i++) {
                if ((passwordInputAux.charCodeAt(i) >= 97) && (passwordInputAux.charCodeAt(i) <= 122)) {
                    validatePasswordInput = true;
                }
                else if ((passwordInputAux.charCodeAt(i) >= 48) && ((passwordInputAux.charCodeAt(i) <= 57))) {
                    validatePasswordInput = true;
                }
                else {
                    validatePasswordInput = false;
                    break;
                }
            }
        }
        else {
            validatePasswordInput = false;
        }

        if (passwordInput == '') {
            pErrors[3].classList.add("display-flex");
            passwordField[0].setAttribute("style", "border: 2px solid red")
        }

        if (!validatePasswordInput && (passwordInput != '')) {
            pErrors[2].classList.add("display-flex");
            passwordField[0].setAttribute("style", "border: 2px solid red")
        }

        if (validatePasswordInput) {
            passwordField[0].setAttribute("style", "border: 2px solid green")
        }
    }

    //Buttons Logic
    var loginButton = document.querySelector("button");
    loginButton.onclick = function(e) {
        e.preventDefault();

        if (validateEmailInput && validatePasswordInput) {
            fetch("https://basp-m2022-api-rest-server.herokuapp.com/login?email="+emailInput+"&password="+passwordInput)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                alert(data.msg);
            })
            .catch(function(error) {
                alert(error.msg);
            })
        }
        else if (emailInput == '') {
            if (validatePasswordInput) {
                alert('Empty email field');
            }
            if (!validatePasswordInput  && (passwordInput != '')) {
                alert('Empty email field \nInvalid password')
            }
            if (passwordInput == '') {
                alert('Empty fields')
            }
        }
        else if (passwordInput == '') {
            if (validateEmailInput) {
                alert('Empty password field');
            }
            if (!validateEmailInput) {
                alert('Empty password field \nInvalid email')
            }
        }
        else if (validateEmailInput && !validatePasswordInput) {
            alert("Invalid password input");
        }
        else if (!validateEmailInput && validatePasswordInput) {
            alert("Invalid email input");
        }
        else {
            alert("Invalid email and password");
        }
    }
}