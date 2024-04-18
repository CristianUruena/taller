let frase = prompt("Ingrese una frase");
let contador = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === 'a'){
        contador++;
    }
} 

console.log("La letra 'a' aparece" + contador + " veces en la frase.");