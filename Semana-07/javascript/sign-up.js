window.onload = function() {
    //all input fields
    var nameField = document.getElementsByName("name");
    var lastNameField = document.getElementsByName("last-name");
    var dniField = document.getElementsByName("dni");
    var birthdayField = document.getElementsByName("dob");
    var phoneNumberField = document.getElementsByName("phone");
    var adressField = document.getElementsByName("address");
    var locationField = document.getElementsByName("city");
    var postcodeField = document.getElementsByName("zip");
    var emailField = document.getElementsByName("email");
    var passwordField = document.getElementsByName("password");
    var repeatPasswordField = document.getElementsByName("repeat-password");
    var passwordValue;

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

    //query params array creation function
    function createQueryArray() {
        var attribute;
        var inputs = document.getElementsByTagName("input");
        var stringArraySuccess = [];
        for (var j = 0; j < inputs.length - 1; j++) {
            attribute = inputs[j].getAttribute("name");
            if (attribute == 'last-name') {
                stringArraySuccess[j] = "lastName="+inputs[j].value.trim();
            }
            else if (attribute == 'dob') {
                var birthdayValue = (inputs[j].value).split('-');
                var year = birthdayValue.shift();
                birthdayValue.push(year);
                birthdayValue = birthdayValue.join("/");
                stringArraySuccess[j] = "dob="+birthdayValue;
            }
            else {
                stringArraySuccess[j] = attribute + '=' + inputs[j].value.trim();
            }
        }
        return stringArraySuccess;
    }

    //Local Storage data charge function
    function defaultValues() {
        var inputs = document.getElementsByTagName("input");
        var attribute;
        for (var i = 0; i < inputs.length; i++) {
            attribute = inputs[i].getAttribute('name');
            if (attribute == 'dob') {
                var date = localStorage.getItem(attribute);
                if (date != null) {
                    date = date.split('/');
                    var year = date.pop();
                    date.unshift(year);
                    date = date.join('-');
                    inputs[i].value = date;
                }
            }
            else if (attribute == 'last-name') {
                var item = localStorage.getItem('lastName');
                if (item != null) {
                    inputs[i].value = item;
                }
            }
            else {
                var item = localStorage.getItem(attribute)
                if (item != null) {
                    inputs[i].value = item;
                }
            }
        }
        inputs[inputs.length-1].value = localStorage.getItem("password");
    }

    defaultValues();

    //Reset fields function
    function resetField(field, placeholder, id) {
        field.value = '';
        field.setAttribute("placeholder", "Your "+placeholder+" here");
        field.setAttribute("style", "border: 1px solid #373867")
        var fieldContainer = document.getElementById(id).children;

        if (fieldContainer[fieldContainer.length -1].classList.contains("display-flex")) {
            fieldContainer[fieldContainer.length - 1].remove();
        }
    }

    //Function to validate numbers and letters with a certain amount of characters
    function validateAlphanumeric(inputSContainertring, minlength) {
        var validate;
        var lettersCount = 0;
        inputSContainertring = inputSContainertring.toLowerCase();
        if (inputSContainertring.length > minlength) {
            for (var i = 0; i < inputSContainertring.length;i++) {
                if ((inputSContainertring.charCodeAt(i) >= 97) && (inputSContainertring.charCodeAt(i) <= 122)) {
                    validate = true;
                    lettersCount++;
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
        if (lettersCount == 0){
            validate = false;
        }
        return validate;
    }

    //validate function for name and lastname fields
    var validate = true;
    function onlyLetters(inputValue) {
        inputValue = inputValue.toLowerCase();
        if (inputValue.length > 3) {
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

    //function to create empty field message
    function createEmptyField() {
        var emptyField = document.createElement("h2");
        emptyField.innerHTML = "This field is required";
        emptyField.classList.add("display-flex");
        return emptyField;
    }

    //function to create error message
    function createErrorMessage(fieldName) {
        var errorMessage = document.createElement("h2");
        errorMessage.innerHTML = "Invalid " + fieldName + " format";
        errorMessage.classList.add("display-flex");
        return errorMessage;
    }

    //name validation
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
            nameField[0].setAttribute("style", "border: 2px solid red");
        }
        else if (nameValue == '') {
            nameField[0].insertAdjacentElement("afterend", emptyField);
            nameField[0].setAttribute("style", "border: 2px solid red");
        }
        else if (validate) {
            nameField[0].setAttribute("style", "border: 2px solid green");
        }
    }

    nameField[0].onfocus = function() {
        nameField[0].removeAttribute("placeholder");
        var nameNoticeHeader = document.getElementById("name").children;
        if (nameNoticeHeader[nameNoticeHeader.length -1].classList.contains("display-flex")) {
            nameNoticeHeader[nameNoticeHeader.length - 1].remove();
        }
    }

    //last name validation
    lastNameField[0].onblur = function() {
        var validate;
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('last name');
        var lastNameValue = lastNameField[0].value.trim();

        validate = onlyLetters(lastNameValue, 3);
        if (validate) {
            if (lastNameValue[0].toUpperCase() != lastNameValue[0]) {
                validate = false;
            }
        }

        if ((!validate) && (lastNameValue != '')) {
            lastNameField[0].insertAdjacentElement("afterend", errorMessage);
            lastNameField[0].setAttribute("style", "border: 2px solid red");
        }
        else if (lastNameValue == '') {
            lastNameField[0].insertAdjacentElement("afterend", emptyField);
            lastNameField[0].setAttribute("style", "border: 2px solid red");
        }
        else if (validate) {
            lastNameField[0].setAttribute("style", "border: 2px solid green");
        }
    }

    lastNameField[0].onfocus = function() {
        lastNameField[0].removeAttribute("placeholder");
        var lastNameNoticeHeader = document.getElementById("last-name").children;
        if (lastNameNoticeHeader[lastNameNoticeHeader.length -1].classList.contains("display-flex")) {
            lastNameNoticeHeader[lastNameNoticeHeader.length - 1].remove();
        }
    }

    //DNI verification
    dniField[0].onblur = function () {
        var validate;
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('dni');
        var dniValue = dniField[0].value.trim();

        if (dniValue.length >= 7) {
            for (var i = 0; i < dniValue.length; i++) {
                if ((dniValue.charCodeAt(i) >= 48) && (dniValue.charCodeAt(i) <= 57)) {
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

        if (!validate && (dniValue != '')) {
            dniField[0].insertAdjacentElement("afterend", errorMessage);
            dniField[0].setAttribute("style", "border: 2px solid red");
        }
        else if (dniValue == '') {
            dniField[0].insertAdjacentElement("afterend", emptyField);
            dniField[0].setAttribute("style", "border: 2px solid red");
        }
        else if (validate) {
            dniField[0].setAttribute("style", "border: 2px solid green");
        }
    }

    dniField[0].onfocus = function() {
        dniField[0].removeAttribute("placeholder");
        var dniNoticeHeader = document.getElementById("dni").children;
        if (dniNoticeHeader[dniNoticeHeader.length -1].classList.contains("display-flex")) {
            dniNoticeHeader[dniNoticeHeader.length - 1].remove();
        }
    }

    //Birthday validation
    birthdayField[0].onblur = function() {
        var emptyField = createEmptyField();
        if ((birthdayField[0].value) == '') {
            birthdayField[0].insertAdjacentElement("afterend", emptyField);
            birthdayField[0].setAttribute("style", "border: 2px solid red");
        }
        else {
            birthdayField[0].setAttribute("style", "border: 2px solid green");
        }
    }

    birthdayField[0].onfocus = function () {
        var birthdayNoticeHeader = document.getElementById("birthday").children;
        if (birthdayNoticeHeader[birthdayNoticeHeader.length -1].classList.contains("display-flex")) {
            birthdayNoticeHeader[birthdayNoticeHeader.length - 1].remove();
        }
    }

    //Phone Number validation
    phoneNumberField[0].onblur = function() {
        var validate;
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('phone number')
        var phoneNumberValue = phoneNumberField[0].value.trim();

        if (phoneNumberValue.length == 10) {
            for (var i = 0; i < phoneNumberValue.length; i++) {
                if ((phoneNumberValue.charCodeAt(i) >= 48) && (phoneNumberValue.charCodeAt(i) <= 57)) {
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

        if (validate) {
            if (phoneNumberValue[0] > 3) {
                validate = false;
            }
        }

        if (!validate && (phoneNumberValue != '')) {
            phoneNumberField[0].insertAdjacentElement("afterend", errorMessage);
            phoneNumberField[0].setAttribute("style", "border: 2px solid red");
        }
        else if (phoneNumberValue == '') {
            phoneNumberField[0].insertAdjacentElement("afterend", emptyField);
            phoneNumberField[0].setAttribute("style", "border: 2px solid red");
        }
        else if (validate) {
            phoneNumberField[0].setAttribute("style", "border: 2px solid green");
        }
    }

    phoneNumberField[0].onfocus = function() {
        phoneNumberField[0].removeAttribute("placeholder");
        var phoneNumberNoticeHeader = document.getElementById("phone-number").children;

        if (phoneNumberNoticeHeader[phoneNumberNoticeHeader.length -1].classList.contains("display-flex")) {
            phoneNumberNoticeHeader[phoneNumberNoticeHeader.length - 1].remove();
        }
    }

    //Adress validation
    adressField[0].onblur = function() {
        var inputNoSpaces;
        var validate;
        var onlyOneSpace = true;
        var spaceCounter = 0;
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('adress');
        var adressValue = adressField[0].value;

        for (var i = 0; i < adressValue.length; i++) {
            if (adressValue[i] == ' ') {
                spaceCounter++;
                if ((adressValue[i+1] == ' ') && onlyOneSpace) {
                    onlyOneSpace = false;
                }
            }
        }

        inputNoSpaces = adressValue.split(' ').join('');
        validate = (validateAlphanumeric(inputNoSpaces, 5)) && (spaceCounter > 0);

        if ((!validate || !onlyOneSpace) && (adressValue != '')) {
            adressField[0].insertAdjacentElement("afterend", errorMessage);
            adressField[0].setAttribute("style", "border: 2px solid red");
        }
        else if (adressValue == '') {
            adressField[0].insertAdjacentElement("afterend", emptyField);
            adressField[0].setAttribute("style", "border: 2px solid red");
        }
        else if (validate) {
            adressField[0].setAttribute("style", "border: 2px solid green");
        }

    }

    adressField[0].onfocus = function() {
        adressField[0].removeAttribute("placeholder");
        var adressNoticeHeader = document.getElementById("adress").children;

        if (adressNoticeHeader[adressNoticeHeader.length -1].classList.contains("display-flex")) {
            adressNoticeHeader[adressNoticeHeader.length - 1].remove();
        }
    }

    //location validation
    locationField[0].onblur = function() {
        var validate;
        var onlyOneSpace = true;
        var inputNoSpaces;
        var lettersCount = 0;
        var locationValue = locationField[0].value.trim();
        var inputNoSpaces = locationValue.split(' ').join('');
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('location');

        for (var i = 0; i < locationValue.length; i++) {
            if ((locationValue.charCodeAt(i) >= 97) && (locationValue.charCodeAt(i) <= 122)) {
                lettersCount++;
            }
        }

        for (var j = 0; j < locationValue.length; j++) {
            if (locationValue[j] == ' ') {
                if ((locationValue[j+1] == ' ') && onlyOneSpace) {
                    onlyOneSpace = false;
                }
            }
        }

        validate = (validateAlphanumeric(inputNoSpaces, 3)) && (lettersCount >= 3);

        if ((!validate || !onlyOneSpace) && (locationValue != '')) {
            locationField[0].insertAdjacentElement("afterend", errorMessage);
            locationField[0].setAttribute("style", "border: 2px solid red");
        }
        else if (locationValue == '') {
            locationField[0].insertAdjacentElement("afterend", emptyField);
            locationField[0].setAttribute("style", "border: 2px solid red");
        }
        else if (validate) {
            locationField[0].setAttribute("style", "border: 2px solid green");
        }
    }

    locationField[0].onfocus = function() {
        locationField[0].removeAttribute("placeholder");
        var locationNoticeHeader = document.getElementById("location").children;

        if (locationNoticeHeader[locationNoticeHeader.length -1].classList.contains("display-flex")) {
            locationNoticeHeader[locationNoticeHeader.length - 1].remove();
        }
    }

    //postcode validation
    postcodeField[0].onblur = function() {
        var validate;
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('postcode');
        var postcodeValue = postcodeField[0].value.trim();

        if ((postcodeValue.length >= 4) && (postcodeValue.length <= 5)) {
            for (var i = 0; i < postcodeValue.length; i++) {
                if ((postcodeValue.charCodeAt(i) >= 48) && (postcodeValue.charCodeAt(i) <= 57)) {
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

        if (!validate && (postcodeValue != '')) {
            postcodeField[0].insertAdjacentElement("afterend", errorMessage);
            postcodeField[0].setAttribute("style", "border: 2px solid red");
        }
        else if (postcodeValue == '') {
            postcodeField[0].insertAdjacentElement("afterend", emptyField);
            postcodeField[0].setAttribute("style", "border: 2px solid red");
        }
        else if (validate) {
            postcodeField[0].setAttribute("style", "border: 2px solid green");
        }
    }

    postcodeField[0].onfocus = function() {
        postcodeField[0].removeAttribute("placeholder");
        var postcodeNoticeHeader = document.getElementById("postcode").children;

        if (postcodeNoticeHeader[postcodeNoticeHeader.length -1].classList.contains("display-flex")) {
            postcodeNoticeHeader[postcodeNoticeHeader.length - 1].remove();
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
            emailField[0].setAttribute("style", "border: 2px solid red");
        }
        else if (emailValue == '') {
            emailField[0].insertAdjacentElement("afterend", emptyField);
            emailField[0].setAttribute("style", "border: 2px solid red");
        }
        else if (validate) {
            emailField[0].setAttribute("style", "border: 2px solid green");
        }
    }

    emailField[0].onfocus = function() {
        emailField[0].removeAttribute("placeholder");
        var emailNoticeHeader = document.getElementById("email").children;

        if (emailNoticeHeader[emailNoticeHeader.length -1].classList.contains("display-flex")) {
            emailNoticeHeader[emailNoticeHeader.length - 1].remove();
        }
    }

    //Password validation
    passwordField[0].onblur = function () {
        var validate;
        var emptyField = createEmptyField();
        var errorMessage = createErrorMessage('password');

        passwordValue = passwordField[0].value;
        validate = validateAlphanumeric(passwordValue, 8);

        if (!validate && (passwordValue != '')) {
            passwordField[0].insertAdjacentElement("afterend", errorMessage);
            passwordField[0].setAttribute("style", "border: 2px solid red");
        }
        else if (passwordValue == '') {
            passwordField[0].insertAdjacentElement("afterend", emptyField);
            passwordField[0].setAttribute("style", "border: 2px solid red");
        }
        else if (validate) {
            passwordField[0].setAttribute("style", "border: 2px solid green");
        }
    }

    passwordField[0].onfocus = function() {
        passwordField[0].removeAttribute("placeholder");
        var PasswordNoticeHeader = document.getElementById("password").children;

        if (PasswordNoticeHeader[PasswordNoticeHeader.length -1].classList.contains("display-flex")) {
            PasswordNoticeHeader[PasswordNoticeHeader.length - 1].remove();
        }
    }

    //repeat password validation
    repeatPasswordField[0].onblur = function() {
        var validate;
        var emptyField = createEmptyField();
        var errorMessage = document.createElement("h2");
        var repeatPasswordValue = repeatPasswordField[0].value;

        passwordValue = passwordField[0].value;
        errorMessage.innerHTML = "The passwords do not match";
        errorMessage.classList.add("display-flex");

        if (repeatPasswordValue == passwordValue) {
            validate = true;
        }
        else {
            validate = false;
        }

        if (!validate && (repeatPasswordValue != '')) {
            repeatPasswordField[0].insertAdjacentElement("afterend", errorMessage);
            repeatPasswordField[0].setAttribute("style", "border: 2px solid red");
        }
        else if (repeatPasswordValue == '') {
            repeatPasswordField[0].insertAdjacentElement("afterend", emptyField);
            repeatPasswordField[0].setAttribute("style", "border: 2px solid red");
        }
        else if (validate) {
            repeatPasswordField[0].setAttribute("style", "border: 2px solid green");
        }
    }

    repeatPasswordField[0].onfocus = function() {
        repeatPasswordField[0].removeAttribute("placeholder");
        var repeatPasswordNoticeHeader = document.getElementById("repeat-password").children;

        if (repeatPasswordNoticeHeader[repeatPasswordNoticeHeader.length -1].classList.contains("display-flex")) {
            repeatPasswordNoticeHeader[repeatPasswordNoticeHeader.length - 1].remove();
        }
    }

    //sign up button
    var signupButton = document.querySelector ("button");
    signupButton.onclick = function(e) {
        e.preventDefault();
        var validate = true;
        var noEmptyFields = true;
        var stringArrayError = [];
        var stringArraySuccess = [];
        var children;
        var inputsContainer = document.querySelectorAll(".cont-field");
        var inputs = document.getElementsByTagName("input");
        var queryParams;

        for (var n = 0; n < inputs.length; n++) {
            if (inputs[n].value == '') {
                noEmptyFields = false;
            }
        }

        for (var i = 0; i < inputsContainer.length; i++) {
            children = inputsContainer[i].children;
            if (children[children.length - 1].classList.contains("display-flex")) {
                if (children[children.length - 2].value == '') {
                    stringArrayError[i] = 'Empty '
                    + inputsContainer[i].querySelector ("input").getAttribute("name").split('-').join(' ')
                    + ' field';
                }
                else {
                    stringArrayError[i] = 'Invalid '
                    + inputsContainer[i].querySelector ("input").getAttribute("name").split('-').join(' ')
                    + ' field';
                }

                validate = false;
            }
        }

        if (!validate) {
            stringArrayError = stringArrayError.filter(String);
            alertStringError = stringArrayError.join('<br>');
            alertStringError = 'Invalid field(s): <br><br>' + alertStringError;
            createModal(alertStringError);
        }
        else if (noEmptyFields) {
            stringArraySuccess = createQueryArray();
            queryParams = stringArraySuccess.filter(String);
            queryParams = queryParams.join('&');

            fetch ("https://basp-m2022-api-rest-server.herokuapp.com/signup?"+queryParams)
            .then (function(response) {
                return response.json();
            })
            .then (function(data) {
                if (data.success) {
                    var alertStringSuccess;
                    var alertArraySuccess = [];
                    var queryParamsArray = queryParams.split('&');
                    for (var h = 0; h < queryParamsArray.length; h++) {
                        var queryParam = queryParamsArray[h];
                        queryParam = queryParam.substring(0, queryParam.indexOf ('='));
                        localStorage.setItem(queryParam, data.data[queryParam]);
                        alertArraySuccess[h] = queryParam +': '+ data.data[queryParam];
                    }
                    alertStringSuccess = alertArraySuccess.join('<br>');
                    alertStringSuccess = data.msg + ', input data: <br><br>' + alertStringSuccess;
                    createModal(alertStringSuccess);
                }
                else {
                    var allErrors = data.errors;
                    var errorsAlert = '';
                    for (var k = 0; k < allErrors.length; k++) {
                        errorsAlert =  errorsAlert+ '<br>' + allErrors[k].msg;
                    }
                    throw new Error (errorsAlert);
                }
            })
            .catch (function(error) {
                createModal(error);
            })
        }
        else if (!noEmptyFields) {
            createModal("Complete all the fields");
        }
    }

    //reset button logic
    var resetButton = document.getElementById("reset-button");
    resetButton.onclick = function(e) {
        e.preventDefault();
        var attribute;
        var inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
            attribute = inputs[i].getAttribute("name");
            resetField(inputs[i], attribute.split('-').join(' '), inputs[i].parentElement.getAttribute("id"));
        }
    }
}