console.log('--2: Strings');

/*Exercise 2.a: Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en
mayúscula (utilizar toUpperCase).*/
console.log('Exercise 2.a');

var stringExerciseTwo = 'This is a string for exercise two a';

stringExerciseTwo = stringExerciseTwo.toUpperCase();

console.log('Answer 2.a:', stringExerciseTwo);

/*Exercise 2.b: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los
primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring)..*/

console.log('Exercise 2.b');

var stringResultTwo;

stringExerciseTwo = 'Exercise two b';

stringResultTwo = stringExerciseTwo.substring(0, 5);

console.log('Answer 2.b:', stringResultTwo);

/*Exercise 2.c: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres
guardando el resultado en una nueva variable (utilizar substring).*/

console.log('Exercise 2.c');

stringExerciseTwo = 'This is a string for exercise two';

stringResultTwo = stringExerciseTwo.substring((stringExerciseTwo.length - 3), stringExerciseTwo.length);

console.log('Answer 2.c:', stringResultTwo);

/*Exercise 2.d: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
toLowerCase y el operador +).*/

console.log('Exercise 2.d');

stringExerciseTwo = 'tHis is a String For EXERCISE Two D';

stringResultTwo = (stringExerciseTwo.substring(0,1)).toUpperCase() +
stringExerciseTwo.substring(1,stringExerciseTwo.length).toLowerCase();

console.log('Answer 2.d:', stringResultTwo);

/*Exercise 2.e: Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición
del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log('Exercise 2.e');

var spaceIndex;

stringExerciseTwo = 'this is a string for exercise two e';

spaceIndex = stringExerciseTwo.indexOf(' ');

console.log('Answer 2.e:', spaceIndex);

/*Exercise 2.f: Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de
ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase,
toLowerCase y el operador +).*/

console.log('Exercise 2.f');

var firstAuxliaryString, secondAuxliaryString;

stringExerciseTwo = 'iMagiNAtion dEfICiEncy'

firstAuxliaryString = stringExerciseTwo.substring(0,1).toUpperCase() +
(stringExerciseTwo.substring(1,stringExerciseTwo.indexOf(' '))).toLowerCase();

secondAuxliaryString = stringExerciseTwo.substring((stringExerciseTwo.indexOf(' ') +
1),(stringExerciseTwo.indexOf(' ') + 2)).toUpperCase() +
(stringExerciseTwo.substring(stringExerciseTwo.indexOf(' ') + 2,stringExerciseTwo.length)).toLowerCase();

stringResultTwo = firstAuxliaryString + ' ' + secondAuxliaryString;

console.log('Answer 2.f:', stringResultTwo);