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