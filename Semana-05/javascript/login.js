window.onload = function() {
    var validateEmailInput, validatePasswordInput, emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;;
    var inputFields = document.getElementsByTagName("input");
    var contactFields = document.getElementsByClassName("cont-field");
    var pErrors = document.getElementsByClassName("font-red");
    var emailField = document.getElementsByName("Email");
    var passwordField = document.getElementsByName("Password");
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
        if (emailInput.match(emailExpression)){
            validateEmailInput = true;
        }
        else {
            validateEmailInput = false;
        }

        if(emailInput == ''){
            pErrors[1].classList.add("display-flex");
        }

        if(!validateEmailInput && emailInput != ''){
            pErrors[0].classList.add("display-flex");
        }
    }

    //Password validation
    passwordField[0].onfocus = function() {
        passwordField[0].removeAttribute("placeholder");
        pErrors[2].classList.remove("display-flex");
        pErrors[3].classList.remove("display-flex");
    }
    passwordField[0].onblur = function() {
        passwordInput = (passwordField[0].value).toLowerCase();
        for(var i = 0; i < passwordInput.length;i++){
            if((passwordInput.charCodeAt(i) >= 97) && (passwordInput.charCodeAt(i) <= 122)){
                validatePasswordInput = true;
            }
            else if((passwordInput.charCodeAt(i) >= 48) && ((passwordInput.charCodeAt(i) <= 57))){
                validatePasswordInput = true;
            }
            else {
                validatePasswordInput = false;
            }
        }

        if(passwordInput == ''){
            pErrors[3].classList.add("display-flex");
        }

        if(!validatePasswordInput && passwordInput != ''){
            pErrors[2].classList.add("display-flex");
        }
    }

    //Buttons Logic
    var loginButton = document.querySelector("button:nth-child(1)");
    loginButton.onclick = function(e){
        e.preventDefault();
        if(validateEmailInput && validatePasswordInput){
            alert('Email: '+emailInput+'\nPassword: '+passwordInput+'');
        }
        else {
            alert('Invalid inputs, please check');
        }
    }
    //Go Back Button
}