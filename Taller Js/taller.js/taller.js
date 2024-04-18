/* Ejercicio 1.

alert("Hello world");

*/

/* Ejercicio 3.

console.log(3+5);

*/

/*Ejercicio 4.

let nombre = prompt("Por favor ingrese su nombre:");
console.log("Hola, " + nombre + "!");

*/

/*Ejercicio 5.

let num1 = parseInt(prompt("Por favor ingrese un numero: "));
let num2 = parseInt(prompt("Por favor ingrese un numero: "));
console.log(num1 + num2);

*/

/*Ejercicio 6.

let num1 = parseInt(prompt("Por favor ingrese un numero: "));
let num2 = parseInt(prompt("Por favor ingrese un numero: "));

if (num1 > num2) {
   console.log("El mayor es: " + num1);
} else {
    console.log("El mayor es: " + num2);
}

*/


/* ejercicio 7.

let num1 = parseInt(prompt("Por favor ingrese un numero: "));
let num2 = parseInt(prompt("Por favor ingrese un numero: "));
let num3 = parseInt(prompt("Por favor ingrese un numero: "));

if (num1 > num2 && num3) {
    console.log("El mayor es: " + num1);
} else {
    if (num2 > num1 && num3) {
        console.log("El mayor es: " + num2);
    } else {
        if (num3 > num1 && num2) {
            console.log("El mayor es: " + num3)
        }
    }
}

*/

/* Ejercicio 8.
let numero = parseInt(prompt("Ingrese un numero: "));

    if(numero % 2 == 0) {
        console.log( "El numero " + numero + " si es divisible por dos.");
    } else {
        console.log( "El numero " + numero + " no es divisible por dos.");
    }
*/
 
/*Ejercicio9.

let frase = prompt("Ingrese una frase: ");
let contador = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === 'a'){
        contador++;
    }
} 

console.log("La letra 'a' aparece " + contador + " veces en la frase.");

*/

let frase = prompt("Ingrese una frase:");
let vocales = " ";

for (let i = 0; i < frase.length; i++) {
let caracter = frase[i].toLowerCase();

if ( caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
    vocales += caracter + " ";

}
}

console.log("Las vocales que aparecen en la frase son: " + vocales);
