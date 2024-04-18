let frase = prompt("Ingrese una frase:");
let contadorVocales = 0;

for(let i = 0; i <frase.length; i++) {
    let carater = frase[i].toLowerCase();

    if (esVocal(carater)) {
        contadorVocales++;
    }
}

console.log("La frase tiene " + contadorVocales + " vocales.");

function esVocal(carater) {
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    return vocales.includes(carater);
}