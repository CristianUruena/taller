let numero1 = parseInt(prompt("Ingrese el primer numero:"));
let numero2 = parseInt(prompt("Ingrese el segundo numero:"));
let divisoresComunes = [];

for (let i = 1; i <= numero1 && i <= numero2; i++) {
    if (numero1 % i === 0 && numero2 % i === 0) {
        divisoresComunes.push(i);
    }
}

console.log("Los divisores comunes de " + numero1 + " y " + numero2 + " son " + divisoresComunes.join(", "));