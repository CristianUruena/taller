let numero = parseInt(prompt("Ingrese un numero:"));
let divisible = [];

if (numero % 2 === 0) {
    divisible.push(2);
}
if (numero % 3 === 0) {
    divisible.push(3);
}
if (numero % 5 === 0) {
    divisible.push(5);
}
if (numero % 7 === 0) {
    divisible.push(7);
}

if (divisible.length > 0) {
    console.log(numero + " es divisible por " + divisible.join(", ") + ".");
} else {
    console.log(numero + " no es divisible por 2, 3, 5 ni 7.");
}