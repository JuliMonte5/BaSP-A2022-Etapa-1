window.onload = function() {
    var nameField = document.getElementsByName("name");
    var nameValue;
    var nameDiv = document.getElementById("name")

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
        nameH2 = nameDiv.getElementsByTagName("h2");
        nameH2[0].remove();
    }
}