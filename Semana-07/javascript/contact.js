window.onload = function() {
    var nameField = document.getElementsByName("name");
    var emailField = document.getElementsByName("email");
    var messageField = document.getElementsByName("message");
    var resetButton = document.getElementById("reset-button");

    //Reset fields function
    function resetField(field, placeholder, id) {
        field.value = '';
        field.setAttribute("placeholder", "Your "+placeholder+" here");
        var errorMessage = document.getElementById(id).children;

        if (errorMessage[errorMessage.length -1].classList.contains("display-flex")) {
            errorMessage[errorMessage.length - 1].remove();
        }
    }

    //validate function for name and lastname fields
    var validate = true;
    function onlyLetters(inputValue) {
        inputValue = inputValue.toLowerCase();
        if (inputValue.length >= 3) {
            for (var i = 0; i < inputValue.length; i++) {
                if ((inputValue.charCodeAt(i) >= 97) && (inputValue.charCodeAt(i) <= 122)) {
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

    //validate alphanumeric
    function validateAlphanumeric(inputSContainertring, minlength) {
        var validate;
        inputSContainertring = inputSContainertring.toLowerCase();
        if (inputSContainertring.length >= minlength) {
            for (var i = 0; i < inputSContainertring.length;i++) {
                if ((inputSContainertring.charCodeAt(i) >= 97) && (inputSContainertring.charCodeAt(i) <= 122)) {
                    validate = true;
                }
                else if ((inputSContainertring.charCodeAt(i) >= 48) && ((inputSContainertring.charCodeAt(i) <= 57))) {
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
    function createEmptyField() {
        var emptyField = document.createElement("h5");
        emptyField.innerHTML = "This field is required";
        emptyField.classList.add("display-flex");
        return emptyField;
    }

    //function to create error message
    function createErrorMessage(fieldName) {
        var errorMessage = document.createElement("h5");
        errorMessage.innerHTML = "Invalid " + fieldName + " format";
        errorMessage.classList.add("display-flex");
        return errorMessage;
    }

    //name field validation
    nameField[0].onblur = function() {
        var validate;
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('name');
        var nameValue = nameField[0].value.trim();

        validate = onlyLetters(nameValue, 3);
        if (validate) {
            if (nameValue[0].toUpperCase() != nameValue[0]) {
                validate = false;
            }
        }

        if ((!validate) && (nameValue != '')) {
            nameField[0].insertAdjacentElement("afterend", errorMessage);
        }
        else if (nameValue == '') {
            nameField[0].insertAdjacentElement("afterend", emptyField);
        }
    }

    nameField[0].onfocus = function() {
        nameField[0].removeAttribute("placeholder");
        var nameNoticeHeader = document.getElementById("input-name").children;

        if (nameNoticeHeader[nameNoticeHeader.length -1].classList.contains("display-flex")) {
            nameNoticeHeader[nameNoticeHeader.length - 1].remove();
        }
    }

    //email validation
    emailField[0].onblur = function() {
        var validate;
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('email');
        var emailValue = emailField[0].value.trim();

        if (emailValue.match(emailExpression)) {
            validate = true;
        }
        else {
            validate = false;
        }

        if (!validate && (emailValue != '')) {
            emailField[0].insertAdjacentElement("afterend", errorMessage);
        }
        else if (emailValue == '') {
            emailField[0].insertAdjacentElement("afterend", emptyField);
        }
    }

    emailField[0].onfocus = function() {
        emailField[0].removeAttribute("placeholder");
        var emailNoticeHeader = document.getElementById("input-email").children;

        if (emailNoticeHeader[emailNoticeHeader.length -1].classList.contains("display-flex")) {
            emailNoticeHeader[emailNoticeHeader.length - 1].remove();
        }
    }

    //message validation
    messageField[0].onblur = function() {
        var validate;
        var onlyOneSpace = true;
        var inputNoSpaces;
        var lettersCount = 0;
        var messageValue = messageField[0].value.trim();
        var inputNoSpaces = messageValue.split(' ').join('');
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('message');

        for (var i = 0; i < messageValue.length; i++) {
            if ((messageValue.charCodeAt(i) >= 97) && (messageValue.charCodeAt(i) <= 122)) {
                lettersCount++;
            }
        }

        for (var j = 0; j < messageValue.length; j++) {
            if (messageValue[j] == ' ') {
                if ((messageValue[j+1] == ' ') && onlyOneSpace) {
                    onlyOneSpace = false;
                }
            }
        }

        validate = (validateAlphanumeric(inputNoSpaces, 3)) && (lettersCount >= 3);

        if ((!validate || !onlyOneSpace) && (messageValue != '')) {
            messageField[0].insertAdjacentElement("afterend", errorMessage);
        }
        else if (messageValue == '') {
            messageField[0].insertAdjacentElement("afterend", emptyField);
        }
    }

    messageField[0].onfocus = function() {
        messageField[0].removeAttribute("placeholder");
        var messageNoticeHeader = document.getElementById("message").children;

        if (messageNoticeHeader[messageNoticeHeader.length -1].classList.contains("display-flex")) {
            messageNoticeHeader[messageNoticeHeader.length - 1].remove();
        }
    }

    //reset button logic
    resetButton.onclick = function(e) {
        e.preventDefault();
        resetField(nameField[0], "name", "input-name");
        resetField(emailField[0], "name", "input-email");
        resetField(messageField[0], "name", "message");
    }

    //send message logic
    var sendButton = document.getElementById("send-button");
    sendButton.onclick = function(e) {
        e.preventDefault();
        var validate = true;
        var noEmptyFields = true;
        var stringArrayError = [];
        var stringArraySuccess = [];
        var alertStringError, alertStringSuccess;
        var childrens;
        var inputsContainer = document.querySelectorAll(".cont-field");
        var inputs = document.getElementsByClassName("input");
        var attribiute;

        for (var n = 0; n < inputs.length; n++) {
            if (inputs[n].value == '') {
                noEmptyFields = false;
            }
        }

        for (var i = 0; i < inputsContainer.length; i++) {
            childrens = inputsContainer[i].children;
            if (childrens[childrens.length - 1].classList.contains("display-flex")) {
                if (childrens[childrens.length - 2].value == '') {
                    stringArrayError[i] = 'Empty '
                    + inputsContainer[i].querySelector("input").getAttribute("name").split('-').join(' ')
                    + ' field';
                }
                else {
                    stringArrayError[i] = 'Invalid '
                    + inputsContainer[i].querySelector("input").getAttribute("name").split('-').join(' ')
                    + ' field';
                }

                validate = false;
            }
        }

        if (!validate) {
            stringArrayError = stringArrayError.filter(String);
            alertStringError = stringArrayError.join('\n');
            alert(alertStringError);
        }
        else if (noEmptyFields) {
            for (var j = 0; j < inputs.length; j++) {
                attribiute = inputs[j].getAttribute("name");
                attribiute = attribiute.substring(0,1).toUpperCase() + attribiute.substring(1);
                stringArraySuccess[j] = attribiute + ': ' + inputs[j].value.trim();
            }
            stringArraySuccess = stringArraySuccess.filter(String);
            alertStringSuccess = stringArraySuccess.join('\n');
            alert(alertStringSuccess);
        }
        else if (!noEmptyFields) {
            alert("Complete all the fields");
        }
    }
}