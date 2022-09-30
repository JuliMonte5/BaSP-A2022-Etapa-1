window.onload = function() {
    //all input fields
    var nameField = document.getElementsByName("name");
    var lastNameField = document.getElementsByName("last-name");
    var dniField = document.getElementsByName("dni");
    var birthdayField = document.getElementsByName("birthday");
    var phoneNumberField = document.getElementsByName("phone-number");
    var adressField = document.getElementsByName("adress");
    var locationField = document.getElementsByName("location");
    var postcodeField = document.getElementsByName("postcode");
    var emailField = document.getElementsByName("email");
    var passwordField = document.getElementsByName("password");
    var repeatPasswordField = document.getElementsByName("repeat-password");
    var passwordValue;

    //Reset fields function
    function resetField(field, placeholder, id){
        field.value = '';
        field.setAttribute("placeholder", "Your "+placeholder+" here");
        field.setAttribute("style", "border: 1px solid #373867")
        var errorMessage = document.getElementById(id).children;

        if(errorMessage[errorMessage.length -1].classList.contains("display-flex")){
            errorMessage[errorMessage.length - 1].remove();
        }
    }
    
    //validate alphanumeric
    function validateAlphanumeric(inputSContainertring, minlength){
        var validate;
        if(inputSContainertring.length >= minlength){
            for(var i = 0; i < inputSContainertring.length;i++){
                if((inputSContainertring.charCodeAt(i) >= 97) && (inputSContainertring.charCodeAt(i) <= 122)){
                    validate = true;
                }
                else if((inputSContainertring.charCodeAt(i) >= 48) && ((inputSContainertring.charCodeAt(i) <= 57))){
                    validate = true;
                }
                else {
                    validate = false;
                    break;
                }
            }
        }
        else{
            validate = false;
        }
        return validate;
    }

    //validate function for name and lastname fields
    var validate = true;
    function onlyLetters(inputValue) {
        inputValue = inputValue.toLowerCase();
        if(inputValue.length >= 3){
            for(var i = 0; i < inputValue.length; i++){
                if((inputValue.charCodeAt(i) >= 97) && (inputValue.charCodeAt(i) <= 122)){
                    validate = true;
                }
                else {
                    validate = false;
                    break;
                }
            }
        }
        else {
            validate = false;
        }
        return validate;
    }

    //function to create empty field message
    function createEmptyField(){
        var emptyField = document.createElement("h2");
        emptyField.innerHTML = "This field is required";
        emptyField.classList.add("display-flex");
        return emptyField;
    }

    //function to create error message
    function createErrorMessage(fieldName){
        var errorMessage = document.createElement("h2");
        errorMessage.innerHTML = "Invalid " + fieldName + " format";
        errorMessage.classList.add("display-flex");
        return errorMessage;
    }

    //name validation
    nameField[0].onblur = function(){
        var validate;
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('name');
        var nameValue = nameField[0].value.trim();

        validate = onlyLetters(nameValue, 3);
        if(validate){
            if(nameValue[0].toUpperCase() != nameValue[0]){
                validate = false;
            }
        }

        if((!validate) && (nameValue != '')){
            nameField[0].insertAdjacentElement("afterend", errorMessage);
            nameField[0].setAttribute("style", "border: 2px solid red");
        }
        else if(nameValue == ''){
            nameField[0].insertAdjacentElement("afterend", emptyField);
            nameField[0].setAttribute("style", "border: 2px solid red");
        }
        else if(validate){
            nameField[0].setAttribute("style", "border: 2px solid green");
        }
    }

    nameField[0].onfocus = function(){
        nameField[0].removeAttribute("placeholder");
        var nameH2 = document.getElementById("name").children;
        if(nameH2[nameH2.length -1].classList.contains("display-flex")){
            nameH2[nameH2.length - 1].remove();
        }
    }

    //last name validation
    lastNameField[0].onblur = function(){
        var validate;
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('last name');
        var lastNameValue = lastNameField[0].value.trim();

        validate = onlyLetters(lastNameValue, 3);
        if(validate){
            if(lastNameValue[0].toUpperCase() != lastNameValue[0]){
                validate = false;
            }
        }

        if((!validate) && (lastNameValue != '')){
            lastNameField[0].insertAdjacentElement("afterend", errorMessage);
            lastNameField[0].setAttribute("style", "border: 2px solid red");
        }
        else if(lastNameValue == ''){
            lastNameField[0].insertAdjacentElement("afterend", emptyField);
            lastNameField[0].setAttribute("style", "border: 2px solid red");
        }
        else if(validate){
            lastNameField[0].setAttribute("style", "border: 2px solid green");
        }
    }

    lastNameField[0].onfocus = function(){
        lastNameField[0].removeAttribute("placeholder");
        var lastNameH2 = document.getElementById("last-name").children;
        if(lastNameH2[lastNameH2.length -1].classList.contains("display-flex")){
            lastNameH2[lastNameH2.length - 1].remove();
        }
    }

    //DNI verification
    dniField[0].onblur = function (){
        var validate;
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('dni');
        var dniValue = dniField[0].value.trim();

        if(dniValue.length >= 7){
            for(var i = 0; i < dniValue.length; i++){
                if((dniValue.charCodeAt(i) >= 48) && (dniValue.charCodeAt(i) <= 57)){
                    validate = true;
                }
                else {
                    validate = false;
                    break;
                }
            }
        }
        else {
            validate = false;
        }

        if(!validate && (dniValue != '')){
            dniField[0].insertAdjacentElement("afterend", errorMessage);
            dniField[0].setAttribute("style", "border: 2px solid red");
        }
        else if(dniValue == ''){
            dniField[0].insertAdjacentElement("afterend", emptyField);
            dniField[0].setAttribute("style", "border: 2px solid red");
        }
        else if(validate){
            dniField[0].setAttribute("style", "border: 2px solid green");
        }
    }

    dniField[0].onfocus = function(){
        dniField[0].removeAttribute("placeholder");
        var dniH2 = document.getElementById("dni").children;
        if(dniH2[dniH2.length -1].classList.contains("display-flex")){
            dniH2[dniH2.length - 1].remove();
        }
    }

    //Birthday validation
    birthdayField[0].onblur = function(){
        var emptyField = createEmptyField();
        if((birthdayField[0].value) == ''){
            birthdayField[0].insertAdjacentElement("afterend", emptyField);
            birthdayField[0].setAttribute("style", "border: 2px solid red");
        }
        else{
            birthdayField[0].setAttribute("style", "border: 2px solid green");
        }
    }

    birthdayField[0].onfocus = function (){
        var birthdayH2 = document.getElementById("birthday").children;
        if(birthdayH2[birthdayH2.length -1].classList.contains("display-flex")){
            birthdayH2[birthdayH2.length - 1].remove();
        }
    }

    //Phone Number validation
    phoneNumberField[0].onblur = function(){
        var validate;
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('phone number')
        var phoneNumberValue = phoneNumberField[0].value.trim();

        if(phoneNumberValue.length == 10){
            for(var i = 0; i < phoneNumberValue.length; i++){
                if((phoneNumberValue.charCodeAt(i) >= 48) && (phoneNumberValue.charCodeAt(i) <= 57)){
                    validate = true;
                }
                else {
                    validate = false;
                    break;
                }
            }
        }
        else {
            validate = false;
        }

        if(validate){
            if(phoneNumberValue[0] > 3)
            validate = false;
        }

        if(!validate && (phoneNumberValue != '')){
            phoneNumberField[0].insertAdjacentElement("afterend", errorMessage);
            phoneNumberField[0].setAttribute("style", "border: 2px solid red");
        }
        else if(phoneNumberValue == ''){
            phoneNumberField[0].insertAdjacentElement("afterend", emptyField);
            phoneNumberField[0].setAttribute("style", "border: 2px solid red");
        }
        else if(validate){
            phoneNumberField[0].setAttribute("style", "border: 2px solid green");
        }
    }

    phoneNumberField[0].onfocus = function(){
        phoneNumberField[0].removeAttribute("placeholder");
        var phoneNumberH2 = document.getElementById("phone-number").children;

        if(phoneNumberH2[phoneNumberH2.length -1].classList.contains("display-flex")){
            phoneNumberH2[phoneNumberH2.length - 1].remove();
        }
    }

    //Adress validation
    adressField[0].onblur = function(){
        var inputNoSpaces;
        var validate;
        var onlyOneSpace = true;
        var spaceCounter = 0;
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('adress');
        var adressValue = adressField[0].value;
        
        for(var i = 0; i < adressValue.length; i++){
            if(adressValue[i] == ' '){
                spaceCounter++;
                if((adressValue[i+1] == ' ') && onlyOneSpace){
                    onlyOneSpace = false;
                }
            }
        }

        inputNoSpaces = adressValue.split(' ').join('');
        validate = (validateAlphanumeric(inputNoSpaces, 5)) && (spaceCounter > 0);

        if((!validate || !onlyOneSpace) && (adressValue != '')){
            adressField[0].insertAdjacentElement("afterend", errorMessage);
            adressField[0].setAttribute("style", "border: 2px solid red");
        }
        else if(adressValue == ''){
            adressField[0].insertAdjacentElement("afterend", emptyField);
            adressField[0].setAttribute("style", "border: 2px solid red");
        }
        else if(validate){
            adressField[0].setAttribute("style", "border: 2px solid green");
        }

    }

    adressField[0].onfocus = function(){
        adressField[0].removeAttribute("placeholder");
        var adressH2 = document.getElementById("adress").children;

        if(adressH2[adressH2.length -1].classList.contains("display-flex")){
            adressH2[adressH2.length - 1].remove();
        }
    }

    //location validation
    locationField[0].onblur = function(){
        var validate;
        var onlyOneSpace = true;
        var inputNoSpaces;
        var lettersCount = 0;
        var locationValue = locationField[0].value.trim();
        var inputNoSpaces = locationValue.split(' ').join('');
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('location');

        for(var i = 0; i < locationValue.length; i++){
            if((locationValue.charCodeAt(i) >= 97) && (locationValue.charCodeAt(i) <= 122)){
                lettersCount++;
            }
        }

        for(var j = 0; j < locationValue.length; j++){
            if(locationValue[j] == ' '){
                if((locationValue[j+1] == ' ') && onlyOneSpace){
                    onlyOneSpace = false;
                }
            }
        }

        validate = (validateAlphanumeric(inputNoSpaces, 3)) && (lettersCount >= 3);

        if((!validate || !onlyOneSpace) && (locationValue != '')){
            locationField[0].insertAdjacentElement("afterend", errorMessage);
            locationField[0].setAttribute("style", "border: 2px solid red");
        }
        else if(locationValue == ''){
            locationField[0].insertAdjacentElement("afterend", emptyField);
            locationField[0].setAttribute("style", "border: 2px solid red");
        }
        else if(validate){
            locationField[0].setAttribute("style", "border: 2px solid green");
        }
    }

    locationField[0].onfocus = function(){
        locationField[0].removeAttribute("placeholder");
        var locationH2 = document.getElementById("location").children;

        if(locationH2[locationH2.length -1].classList.contains("display-flex")){
            locationH2[locationH2.length - 1].remove();
        }
    }

    //postcode validation
    postcodeField[0].onblur = function(){
        var validate;
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('postcode');
        var postcodeValue = postcodeField[0].value.trim();

        if((postcodeValue.length >= 4) && (postcodeValue.length <= 5)){
            for(var i = 0; i < postcodeValue.length; i++){
                if((postcodeValue.charCodeAt(i) >= 48) && (postcodeValue.charCodeAt(i) <= 57)){
                    validate = true;
                }
                else {
                    validate = false;
                    break;
                }
            }
        }
        else {
            validate = false;
        }

        if(!validate && (postcodeValue != '')){
            postcodeField[0].insertAdjacentElement("afterend", errorMessage);
            postcodeField[0].setAttribute("style", "border: 2px solid red");
        }
        else if(postcodeValue == ''){
            postcodeField[0].insertAdjacentElement("afterend", emptyField);
            postcodeField[0].setAttribute("style", "border: 2px solid red");
        }
        else if(validate){
            postcodeField[0].setAttribute("style", "border: 2px solid green");
        }
    }

    postcodeField[0].onfocus = function(){
        postcodeField[0].removeAttribute("placeholder");
        var postcodeH2 = document.getElementById("postcode").children;

        if(postcodeH2[postcodeH2.length -1].classList.contains("display-flex")){
            postcodeH2[postcodeH2.length - 1].remove();
        }
    }

    //email validation
    emailField[0].onblur = function() {
        var validate;
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('email');
        var emailValue = emailField[0].value.trim();

        if (emailValue.match(emailExpression)){
            validate = true;
        }
        else {
            validate = false;
        }

        if(!validate && (emailValue != '')){
            emailField[0].insertAdjacentElement("afterend", errorMessage);
            emailField[0].setAttribute("style", "border: 2px solid red");
        }
        else if(emailValue == ''){
            emailField[0].insertAdjacentElement("afterend", emptyField);
            emailField[0].setAttribute("style", "border: 2px solid red");
        }
        else if(validate){
            emailField[0].setAttribute("style", "border: 2px solid green");
        }
    }

    emailField[0].onfocus = function(){
        emailField[0].removeAttribute("placeholder");
        var emailH2 = document.getElementById("email").children;

        if(emailH2[emailH2.length -1].classList.contains("display-flex")){
            emailH2[emailH2.length - 1].remove();
        }
    }

    //Password validation
    passwordField[0].onblur = function (){
        var validate;
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('password');
        
        passwordValue = passwordField[0].value;
        validate = validateAlphanumeric(passwordValue, 8);

        if(!validate && (passwordValue != '')){
            passwordField[0].insertAdjacentElement("afterend", errorMessage);
            passwordField[0].setAttribute("style", "border: 2px solid red");
        }
        else if(passwordValue == ''){
            passwordField[0].insertAdjacentElement("afterend", emptyField);
            passwordField[0].setAttribute("style", "border: 2px solid red");
        }
        else if(validate){
            passwordField[0].setAttribute("style", "border: 2px solid green");
        }
    }

    passwordField[0].onfocus = function(){
        passwordField[0].removeAttribute("placeholder");
        var PasswordH2 = document.getElementById("password").children;

        if(PasswordH2[PasswordH2.length -1].classList.contains("display-flex")){
            PasswordH2[PasswordH2.length - 1].remove();
        }
    }

    //repeat password validation
    repeatPasswordField[0].onblur = function(){
        var validate;
        var emptyField = createEmptyField();
        var errorMessage = document.createElement("h2");
        var repeatPasswordValue = repeatPasswordField[0].value;

        errorMessage.innerHTML = "The passwords do not match";
        errorMessage.classList.add("display-flex");

        if(repeatPasswordValue == passwordValue){
            validate = true;
        }
        else{
            validate = false;
        }

        if(!validate && (repeatPasswordValue != '')){
            repeatPasswordField[0].insertAdjacentElement("afterend", errorMessage);
            repeatPasswordField[0].setAttribute("style", "border: 2px solid red");
        }
        else if(repeatPasswordValue == ''){
            repeatPasswordField[0].insertAdjacentElement("afterend", emptyField);
            repeatPasswordField[0].setAttribute("style", "border: 2px solid red");
        }
        else if(validate){
            repeatPasswordField[0].setAttribute("style", "border: 2px solid green");
        }
    }

    repeatPasswordField[0].onfocus = function(){
        repeatPasswordField[0].removeAttribute("placeholder");
        var repeatPasswordH2 = document.getElementById("repeat-password").children;
        
        if(repeatPasswordH2[repeatPasswordH2.length -1].classList.contains("display-flex")){
            repeatPasswordH2[repeatPasswordH2.length - 1].remove();
        }
    }

    //sign up button
    var signupButton = document.querySelector("button");
    signupButton.onclick = function(e){
        e.preventDefault();
        var validate = true;
        var noEmptyFields = true;
        var stringArrayError = [];
        var stringArraySuccess = [];
        var alertStringError, alertStringSuccess;
        var childrens;
        var inputsContainer = document.querySelectorAll(".cont-field");
        var inputs = document.getElementsByTagName("input");
        var attribiute;

        for(var n = 0; n < inputs.length; n++){
            if(inputs[n].value == ''){
                noEmptyFields = false;
            }
        }

        for(var i = 0; i < inputsContainer.length; i++){
            childrens = inputsContainer[i].children;
            if(childrens[childrens.length - 1].classList.contains("display-flex")){
                if(childrens[childrens.length - 2].value == ''){
                    stringArrayError[i] = 'Empty '
                    + inputsContainer[i].querySelector("input").getAttribute("name").split('-').join(' ')
                    + ' field';
                }
                else{
                    stringArrayError[i] = 'Invalid '
                    + inputsContainer[i].querySelector("input").getAttribute("name").split('-').join(' ')
                    + ' field';
                }
                
                validate = false;
            }
        }

        if(!validate){
            stringArrayError = stringArrayError.filter(String);
            alertStringError = stringArrayError.join('\n');
            alert(alertStringError);
        }
        else if (noEmptyFields){
            for(var j = 0; j < inputs.length; j++){
                attribiute = inputs[j].getAttribute("name");
                attribiute = attribiute.substring(0,1).toUpperCase() + attribiute.substring(1);
                stringArraySuccess[j] = attribiute + ': ' + inputs[j].value.trim();
            }
            stringArraySuccess = stringArraySuccess.filter(String);
            alertStringSuccess = stringArraySuccess.join('\n');
            alert(alertStringSuccess);
        }
        else if(!noEmptyFields){
            alert("Complete all the fields");
        }
    }

    //reset button logic
    var resetButton = document.getElementById("reset-button");
    resetButton.onclick = function(e){
        var placeholder;
        e.preventDefault();
        var inputs = document.getElementsByTagName("input");
        for(var i = 0; i < inputs.length; i++){
            placeholder = inputs[i].getAttribute("name");
            resetField(inputs[i], placeholder.split('-').join(' '), placeholder);
        }
    }
}