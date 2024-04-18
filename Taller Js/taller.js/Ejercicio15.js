let numero = parseInt(prompt("Ingrese un numero:"));
let divisores = [];

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        divisores.push(i)
    }
}

console.log("Los divisores de " + numero + " son: " + divisores.join(", "));