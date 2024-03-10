// Solicitar al usuario que ingrese un número
let numero = parseInt(prompt('Introduce un número para conocer sus DIVISORES:'));

// Un ciclo for para recorrer desde el 1 hasta el número ingresado
// y así poder conocer los divisores de ese número
console.log("El número " + numero + " tiene como divisores: ");

for (let i=1; i<=numero; i++) {
    if (numero%i ===0) {
        console.log(+ i);
    }
}