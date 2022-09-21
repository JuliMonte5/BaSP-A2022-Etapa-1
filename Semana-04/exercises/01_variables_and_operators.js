console.log('--1: Variables and Operators');

/*Exercise 1.a: Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos
números en una 3er variable.*/
console.log('Exercise 1.a');

var x = 1, y = 2, z;

z = x + y;

console.log('Answer 1.a:',z);


/*Exercise 1.b: Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.*/
console.log('Exercise 1.b');

var string1 = 'Hello', string2 = 'World', string3;

string3 = string1 + ' ' + string2;

console.log('Answer 1.b:', string3);


/*Exercise 1.c: Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
guardando el resultado de la suma en una 3er variable (utilizar length).*/
console.log('Exercise 1.c');

var string1 = 'Item', string2 = 'c', stringSize;

stringSize = string1.length + string2.length;

console.log('Answer 1.c:', stringSize);