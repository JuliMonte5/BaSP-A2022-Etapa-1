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

    //validate function for name and lastname fields
    var validate = true;
    function threeLetters(inputValue) {
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
        var nameError = document.createElement("h2");
        nameError.innerHTML = "Invalid " + fieldName + " format";
        nameError.classList.add("display-flex");
        return nameError;
    }

    //name validation
    nameField[0].onblur = function(){
        var emptyField = createEmptyField();
        var nameError = createErrorMessage('name');

        nameValue = nameField[0].value;

        if((!threeLetters(nameValue)) && (nameValue != '')){
            nameField[0].insertAdjacentElement("afterend", nameError);
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
        var nameError = createErrorMessage('last name');

        lastNameValue = lastNameField[0].value;

        if((!threeLetters(lastNameValue)) && (lastNameValue != '')){
            lastNameField[0].insertAdjacentElement("afterend", nameError);
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
        
    }
}