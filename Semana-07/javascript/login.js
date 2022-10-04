window.onload = function() {
    var validateEmailInput, validatePasswordInput, emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;;
    var pErrors = document.getElementsByClassName("font-red");
    var emailField = document.getElementsByName("email");
    var passwordField = document.getElementsByName("password");
    var passwordInput;
    var emailInput;

    //Modal creation and display function
    function createModal(alert) {
        var modal = document.createElement("div");
        var modalContent = document.createElement("div");
        var closeButton = document.createElement("span");
        var modalText = document.createElement("p");

        modal.setAttribute("id" , "myModal");
        modal.classList.add("modal");
        modalContent.classList.add("modal-content");
        closeButton.classList.add("close");
        closeButton.innerHTML = "&times";
        modalText.classList.add("modal-text");
        modalText.innerHTML = alert;

        modal.appendChild(modalContent);
        modalContent.appendChild(modalText);
        modalContent.insertBefore(closeButton, modalText);

        modal.style.display = "block";

        var htmlBody = document.getElementsByTagName("body");
        htmlBody[0].appendChild(modal);

        closeButton.onclick = function(){
            modal.style.display = 'none';
        }
    }

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
                if (data.success) {
                    createModal(data.msg +'<br><br>Email: '+ emailInput + '\n<br>Password: '+ passwordInput);
                }
                else {
                    throw new Error(data.msg);
                }
            })
            .catch(function(error) {
                createModal(error);
            })
        }
        else if (emailInput == '') {
            if (validatePasswordInput) {
                createModal('Empty email field');
            }
            if (!validatePasswordInput  && (passwordInput != '')) {
                createModal('Empty email field \nInvalid password')
            }
            if (passwordInput == '') {
                createModal('Empty fields')
            }
        }
        else if (passwordInput == '') {
            if (validateEmailInput) {
                createModal('Empty password field');
            }
            if (!validateEmailInput) {
                createModal('Empty password field \nInvalid email')
            }
        }
        else if (validateEmailInput && !validatePasswordInput) {
            createModal("Invalid password input");
        }
        else if (!validateEmailInput && validatePasswordInput) {
            createModal("Invalid email input");
        }
        else {
            createModal("Invalid email and password");
        }
    }
}