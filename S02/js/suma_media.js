// Establecer variables para almacenar los valores de suma y media
let suma = 0, media = 0;

// Se crea una variable contador
let contador = 0;

// Ciclo o bucle para solicitar

while (true) {
    var numero = parseInt(prompt("Ingresa un número y para detener la solicitud de números ingresa un número NEGATIVO"));
    // si el número es NEGATIVO; se termina el ciclo
    if (isNaN(numero)) {
        numero=0;
    }
    if (numero>=0) {
        suma += numero;
        contador++;
    } else {
        break;
    }
}

console.log("La suma es igual a: " + suma);
console.log("Contador es igual a: " + contador);

//Calcular la media porque se interrumpió el ciclo
media = suma/contador;
alert("La suma de los números ingresados es igual a: " + suma + "\nLa media es igual a: " + media)