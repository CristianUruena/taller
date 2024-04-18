let frase = prompt("Ingrese una frase:");
let vocales = " ";

for (let i = 0; i < frase.length; i++) {
let caracter = frase[i].toLowerCase();

if ( caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
    vocales += caracter + " ";

}
}

console.log("Las vocales que aparecen en la frase son: " + vocales);