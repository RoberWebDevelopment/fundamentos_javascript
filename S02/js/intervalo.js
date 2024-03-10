// Se definen variables

var numero1, numero2;

// Vamos a usar DO-WHILE

do{
    numero1 = parseInt(prompt("Introduce un número de inicio: "));
}while (isNaN(numero1) || numero1<=0);

do {
    numero2 = parseInt(prompt("Introduce un número final: "));
} while (isNaN(numero2) || numero2<=0);

console.log("Número inicial es: " + numero1 + "\nNúmero final es: " + numero2);

// Imprimir en el documento HTML con la etiqueta H1

document.write("<h1> Los números entre "+numero1+" y "+numero2+" son:</h1>");

// Se elabora un bucle para imprimir los números

for(let i=numero1; i<=numero2; i++) {
    document.write(i+" ");
}

// Complemento del ejercicio 3, pero es el 4

console.log("Los números impares entre el número inicial: " + numero1 + " y el número final " + numero2 + " son: ")

let c=numero1;

while (c<=numero2) {
    if(c%2 !==0){
        console.log(c);
    }
    c++
}