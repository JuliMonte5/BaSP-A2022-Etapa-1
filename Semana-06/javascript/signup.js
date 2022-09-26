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

    var nameValue, lastNameValue, dniValue, birthdayValue, phoneNumberValue, adressValue, locationValue, postcodeValue,
    emailValue, passwordValue, repeatPasswordValue;
    //validate length
    function validateLength(length, fieldValue) {
        return fieldValue.length >= length;
    }

    //validate alphanumeric
    function validateAlphanumeric(inputString, minlength){
        var validate;
        if(inputString.length >= minlength){
            for(var i = 0; i < inputString.length;i++){
                if((inputString.charCodeAt(i) >= 97) && (inputString.charCodeAt(i) <= 122)){
                    validate = true;
                }
                else if((inputString.charCodeAt(i) >= 48) && ((inputString.charCodeAt(i) <= 57))){
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

    //validate alphabetic
    function validateAlphabet(fieldValue){
        var validate;
        fieldValue = fieldValue.toLowerCase();
        for(var i = 0; i < fieldValue.length; i++){
            if((fieldValue.charCodeAt(i) >= 97) && (fieldValue.charCodeAt(i) <= 122)){
                validate = true;
            }
            else {
                validate = false;
                break;
            }
        }
        return validate;
    }

    //validate numeric
    function validateDecimal(fieldValue){
        var validate;
        fieldValue = fieldValue.toLowerCase();
        for(var i = 0; i < fieldValue.length; i++){
            if((fieldValue.charCodeAt(i) >= 97) && (fieldValue.charCodeAt(i) <= 122)){
                validate = true;
            }
            else {
                validate = false;
                break;
            }
        }
        return validate;
    }

    //validate function for name and lastname fields
    var validate = true;
    function threeLetters(inputValue) {
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
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('name');

        nameValue = nameField[0].value;

        if((!threeLetters(nameValue)) && (nameValue != '')){
            nameField[0].insertAdjacentElement("afterend", errorMessage);
        }
        else if(nameValue == ''){
            nameField[0].insertAdjacentElement("afterend", emptyField);
        }
    }

    nameField[0].onfocus = function(){
        nameField[0].removeAttribute("placeholder");
        var nameH2 = document.getElementById("name").getElementsByTagName("h2");
        if(nameH2 != null){
            nameH2[0].remove();
        }
    }

    //last name validation
    lastNameField[0].onblur = function(){
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('last name');

        lastNameValue = lastNameField[0].value;

        if((!threeLetters(lastNameValue)) && (lastNameValue != '')){
            lastNameField[0].insertAdjacentElement("afterend", errorMessage);
        }
        else if(lastNameValue == ''){
            lastNameField[0].insertAdjacentElement("afterend", emptyField);
        }
    }

    lastNameField[0].onfocus = function(){
        lastNameField[0].removeAttribute("placeholder");
        var lastNameH2 = document.getElementById("last-name").getElementsByTagName("h2");
        if(lastNameH2 != null){
            lastNameH2[0].remove();
        }
    }

    //DNI verification
    dniField[0].onblur = function (){
        var validate;
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('dni');

        dniValue = dniField[0].value;
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
        }
        else if(dniValue == ''){
            dniField[0].insertAdjacentElement("afterend", emptyField);
        }
    }

    dniField[0].onfocus = function(){
        dniField[0].removeAttribute("placeholder");
        var dniH2 = document.getElementById("dni").getElementsByTagName("h2");
        if(dniH2 != null){
            dniH2[0].remove();
        }
    }

    //Birthday validation
    birthdayField[0].onblur = function(){
        var emptyField = createEmptyField();
        if((birthdayField[0].value) == ''){
            birthdayField[0].insertAdjacentElement("afterend", emptyField);
        }
    }

    birthdayField[0].onfocus = function (){
        var birthdayH2 = document.getElementById("birthday").getElementsByTagName("h2");
        if(birthdayH2 != null){
            birthdayH2[0].remove();
        }
    }

    //Phone Number validation
    phoneNumberField[0].onblur = function(){
        var validate;
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('phone number');

        phoneNumberValue = phoneNumberField[0].value;
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

        if(!validate && (phoneNumberValue != '')){
            phoneNumberField[0].insertAdjacentElement("afterend", errorMessage);
        }
        else if(phoneNumberValue == ''){
            phoneNumberField[0].insertAdjacentElement("afterend", emptyField);
        }
    }

    phoneNumberField[0].onfocus = function(){
        phoneNumberField[0].removeAttribute("placeholder");
        var phoneNumberH2 = document.getElementById("phone-number").getElementsByTagName("h2");
        if(phoneNumberH2 != null){
            phoneNumberH2[0].remove();
        }
    }

    //Adress validation
    adressField[0].onblur = function(){
        var spacesIndex = [];
        var stringSlice = [];
        var inputNoSpaces = '';
        var index = 1;
        var validate;
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('adress');
        spacesIndex[0] = 0;
        adressValue = adressField[0].value.trim();
        
        for(var i = 0; i < adressValue.length; i++){
            if(adressValue[i] == ' '){
                spacesIndex[index] = i;
                index++;
            }
        }

        inputNoSpaces = adressValue.split(' ').join('');
        validate = (validateAlphanumeric(inputNoSpaces, 5)) && ((spacesIndex.length - 1) > 0);

        if(!validate && (adressValue != '')){
            adressField[0].insertAdjacentElement("afterend", errorMessage);
        }
        else if(adressValue == ''){
            adressField[0].insertAdjacentElement("afterend", emptyField);
        }

    }

    adressField[0].onfocus = function(){
        adressField[0].removeAttribute("placeholder");
        var adressH2 = document.getElementById("adress").getElementsByTagName("h2");
        if(adressH2 != null){
            adressH2[0].remove();
        }
    }

    //location validation
    locationField[0].onblur = function(){
        var validate;
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
        validate = (validateAlphanumeric(inputNoSpaces, 3)) && (lettersCount >= 3);

        if(!validate && (locationValue != '')){
            locationField[0].insertAdjacentElement("afterend", errorMessage);
        }
        else if(locationValue == ''){
            locationField[0].insertAdjacentElement("afterend", emptyField);
        }
    }

    locationField[0].onfocus = function(){
        locationField[0].removeAttribute("placeholder");
        var locationH2 = document.getElementById("location").getElementsByTagName("h2");
        if(locationH2 != null){
            locationH2[0].remove();
        }
    }
}