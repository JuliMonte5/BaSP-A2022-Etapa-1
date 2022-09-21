console.log('--5: For');

/*Exercise 5.a: Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar
una alerta utilizando cada una de las palabras.9*/

console.log('Exercise 5.a');

var fiveWords = ['word1', 'word2', 'word3', 'word4', 'word5'], counter;

for (counter = 0; counter < fiveWords.length; counter++){
    alert(fiveWords[counter]);
}

/*Exercise 5.b: Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada
palabra modificada.*/

console.log('Exercise 5.b');

for (counter = 0; counter < fiveWords.length; counter++){
    fiveWords[counter] = (fiveWords[counter].substring(0,1)).toUpperCase() +
    fiveWords[counter].substring(1,fiveWords[counter].length).toLowerCase();

    alert(fiveWords[counter]);
}

/*Exercise 5.c: Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a)
recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar
una única alerta con la cadena completa.*/

console.log('Exercise 5.c');

var sentence = '';

for(counter = 0; counter < fiveWords.length; counter++){
    sentence += fiveWords[counter];
}

alert(sentence);

/*Exercise 5.d: Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la
repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde
el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).*/

console.log('Exercise 5.d');

var tenNumbersArray = [];

for(counter = 0; counter < 10; counter++) {
    tenNumbersArray[counter] = counter;
}

console.log('Answer 5.d:', tenNumbersArray);