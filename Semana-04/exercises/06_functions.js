console.log('--6: Functions');

/*Exercise 6.a: Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable 
en la consola del navegador.*/

console.log('Exercise 6.a');

function sum(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

var resultEcerciseSix;

resultEcerciseSix = sum(5, 30);

console.log('Answer 6.a:', resultEcerciseSix);

/*Exercise 6.b: A la función suma anterior, agregarle una validación para controlar si alguno de los 
parámetros no es un número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros 
tiene error y retornar el valor NaN como resultado.*/

console.log('Exercise 6.b');

function sum(firstNumber, secondNumber){
    if((typeof(firstNumber) == 'number') && (typeof(secondNumber) == 'number')){
        return firstNumber + secondNumber;
    }
    else{
        alert('Invalid argument(s)')
        return NaN;
    }
}

resultEcerciseSix = sum(30, true);

console.log('Answer 6.b:', resultEcerciseSix);

/*Exercise 6.c: Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva 
verdadero si es un número entero.*/

console.log('Exercise 6.c');

function validateInteger(number){
    if(Math.trunc(number) == number){
        return true;
    }
    else{
        return false;
    }
}

resultEcerciseSix = validateInteger(49.9989);

console.log('Answer 6.c:', resultEcerciseSix);

/*Exercise 6.d: A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que 
valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el 
número convertido a entero (redondeado).*/

console.log('Exercise 6.d');

function sumVersionTwo(firstNumber, secondNumber){
    if((typeof(firstNumber) == 'number') && (typeof(secondNumber) == 'number')){
        if((validateInteger(firstNumber) == true) && (validateInteger(secondNumber) == true)){
            return firstNumber + secondNumber;
        }
        else {
            alert('Non integer number introduced');
            if(validateInteger(firstNumber) == false){
                return Math.trunc(firstNumber);
            }
            else if(validateInteger(secondNumber) == false){
                return Math.trunc(secondNumber);
            }
        }
    }
    else{
        alert('Invalid argument(s)')
        return NaN;
    }
}

resultEcerciseSix = sumVersionTwo(30, 50.333);

console.log('Answer 6.d:', resultEcerciseSix);

/*Exercise 6.e: Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función 
suma probando que todo siga funcionando igual.*/

console.log('Exercise 6.e');

function validateSumIntegerArguments(firstArgumentNumber, secondArgumentNumber){
    if((validateInteger(firstArgumentNumber) == true) && (validateInteger(secondArgumentNumber) == true)){
        return true;
    }
    else {
            if(validateInteger(firstArgumentNumber) == false){
                return Math.trunc(firstArgumentNumber);
            }
            else if(validateInteger(secondArgumentNumber) == false){
                return Math.trunc(secondArgumentNumber);
            }
    }
}

function sumVersionThree(firstNumber, secondNumber){
    if((typeof(firstNumber) == 'number') && (typeof(secondNumber) == 'number')){
        if(validateSumIntegerArguments(firstNumber, secondNumber) == true){
            return firstNumber + secondNumber;
        }
        else {
            alert('Non integer number introduced');
            return validateSumIntegerArguments(firstNumber, secondNumber);  
        }
    }
    else{
        alert('Invalid argument(s)')
        return NaN;
    }
}

resultEcerciseSix = sumVersionThree(30, 50.333);

console.log('Answer 6.e:', resultEcerciseSix);