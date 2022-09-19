console.log('--4: Arrays');

/*Exercise 4.a: Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o 
igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/

console.log('Exercise 4.a');

var randomNumber = Math.random();

if(randomNumber >= 0.5){
    alert('Greater than 0,5');    
}
else {
    alert('Lower than 0,5');
}

/*Exercise 4.b: Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
I: “Bebe” si la edad es menor a 2 años;
II: “Niño” si la edad es entre 2 y 12 años;
III: “Adolescente” entre 13 y 19 años;
IV: “Joven” entre 20 y 30 años;
IV “Adulto” entre 31 y 60 años;
VI: “Adulto mayor” entre 61 y 75 años;
VII: “Anciano” si es mayor a 75 años.
*/

console.log('Exercise 4.b');

randomNumber = Math.floor(Math.random() * 100);

if((randomNumber >=0 ) & (randomNumber < 2)){
    alert('Bebe');
}
else if((randomNumber >=2 ) & (randomNumber <= 12)){
    alert('Niño');
}
else if((randomNumber >=13 ) & (randomNumber <= 19)){
    alert('Adolescente');
}
else if((randomNumber >=20 ) & (randomNumber <= 30)){
    alert('Joven');
}
else if((randomNumber >=31 ) & (randomNumber <= 60)){
    alert('Adulto');
}
else if((randomNumber >=61 ) & (randomNumber <= 75)){
    alert('Adulto mayor');
}
else if(randomNumber > 75){
    alert('Anciano');
}
