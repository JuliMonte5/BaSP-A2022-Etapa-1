window.onload = function() {
    var validateEmailInput, validatePasswordInput, emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;;
    var inputFields = document.getElementsByTagName("input");
    console.log(inputFields[0]);

    //Email validation
    inputFields[0].onfocus = function() {
        inputFields[0].removeAttribute("placeholder");
    }
    inputFields[0].onblur = function() {
        var emailInput;
        emailInput = inputFields[0].value;
        if (emailInput == emailExpression){
            validateEmailInput = true;
        }
        else {
            validateEmailInput = false;
        }
        if(emailInput == ''){
            inputFields[0].setAttribute('placeholder','Your Email Here');
        }
    }

    //Password validation
    inputFields[1].onfocus = function() {
        inputFields[1].removeAttribute("placeholder");
    }
    inputFields[1].onblur = function() {
        var passwordInput;
        passwordInput = (inputFields[1].value).toLowerCase();
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
            inputFields[1].setAttribute('placeholder','Your Password Here');
        }
    }

    //Buttons Logic
    var loginButton = document.querySelector("button:nth-child(1)");
    loginButton.onclick = function(){
        if(validateEmailInput && validatePasswordInput){
            alert('Email: '+emailInput+'\nPassword: '+passwordInput+'');
        }
        else {
            alert('Invalid inputs, please check')
        }

        /* if(!validateEmailInput){
            
        } */
    }
    
    //Go Back Button
}