console.log('--2: Arrays');

/*Exercise 3.a: Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
 "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los 
 meses 5 y 11 (utilizar console.log).*/

 console.log('Exercise 3.a');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
 "Septiembre", "Octubre", "Noviembre", "Diciembre"];

 console.log('Answer 3.a:\nMes 5:', months[4], '\nMes 11:', months[10]);

/*Exercise 3.b: Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

console.log('Exercise 3.b');

months.sort();

console.log('Answer 3.b:\nMonths: ', months);

/*Exercise 3.c: Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

console.log('Exercise 3.c');

months.unshift('Start');

months.push('End');

console.log('Answer 3.c:\nMonths: ', months);

/*Exercise 3.d: Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

console.log('Exercise 3.d');

months.shift();

months.pop();

console.log('Answer 3.d:\nMonths: ', months);

/*Exercise 3.d: Invertir el orden del array (utilizar reverse).*/

console.log('Exercise 3.e');

months.reverse();

console.log('Answer 3.e:\nMonths: ', months);

/*Exercise 3.d: Unir todos los elementos del array en un único string donde cada mes este separado por un 
guión - (utilizar join).*/

console.log('Exercise 3.f');

var allMonths;

allMonths = months.join('-');

console.log('Answer 3.f:\nMonths: ', allMonths);

/*Exercise 3.g: Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

var monthsCopy;

months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];

monthsCopy = months.slice(months.indexOf('Mayo'), months.indexOf('Noviembre') + 1);

console.log('Answer 3.g:\nCopy of Months: ', monthsCopy);

