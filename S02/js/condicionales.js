// Aquí vamos a crear una variable y a pedirle al usuario nos de un número a través del prompt
// del navegador, para compararlas

// Paso 1- Pedir al usuario que nos de 2 números

//parseInt se usa para que la cadena que se introduzca la convierta a un entero
var numero1 = parseInt(prompt('Introduce el primer número:',0));
var numero2 = parseInt(prompt('Introduce el segundo número:',0));

console.log("El primer número es igual a " + numero1);
console.log("El segundo número es igual a " + numero2);

// Validar con un IF si los 2 números son iguales

/*
if (numero1 == numero2) {
 alert("LOS NÚMEROS SON IGUALES");
} else {
    alert("LOS NÚMEROS SON DIFERENTES");
}
*/

// Validar con un IF si los valores son iguales o menores a CERO

/*
if (numero1 <= 0 || numero2 <= 0) {
    alert("POR LO MENOS UNO DE LOS VALORES ES IGUAL O MENOR A CERO");
}
*/

// Se va a crear una función para validar que se están ingresando valores numéricos

function validarNumeros(value) {
    // Primero comprobar si el valor que se recibe es un número
    if (isNaN(value)) {
        return false;
    }
    // Comprobar si es una cadena vacía
    if (value==='') {
        return false;
    }
    return true;
}

// Evaluación de los valores ingresados por el prompt

if (!validarNumeros(numero1) || !validarNumeros(numero2)) {
    alert("Has ingresado un valor no numérico, recuerda ingresar solo ENTEROS POSITIVOS")
}

while (numero1 <= 0 || numero2 <= 0) {
    alert("Se produjo un error, los números ingresaods no pueden ser menores o iguales a CERO")
    var numero1 = parseInt(prompt('Introduce el primer número:',0));
    var numero2 = parseInt(prompt('Introduce el segundo número:',0));
}

// Evaluación final de cuál es mayor y cuál es menor

if (numero1==numero2) {
    alert('LOS NÚMEROS SON IGUALES');
} else if (numero1>numero2) {
    alert('EL NÚMERO MAYOR ES: ' + numero1 + '\nEL NÚMERO MENOR ES: ' + numero2);
} else if (numero2>numero1) {
    alert('EL NÚMERO MAYOR ES: ' + numero2 + '\nEL NÚMERO MENOR ES: ' + numero1);
} else {
    alert("No ingresaste un valor numérico para poder evaluar");
}

// Evalución final de cual es mayot y cual es menor
/*
if(numero1==numero2){
    alert('LOS NUMEROS SON IGUALES');
}else if (numero1>numero2){
    alert('El numero mayor es: ' + numero1 + '\nEl numero menor es: ' + numero2);
}else if (numero2>numero1){
    alert('El numero mayor es: ' + numero2 + '\nEl numero menor es: ' + numero1);
}else {
    alert('No ingresaste un valor numérico para poder evaluar');
}
*/