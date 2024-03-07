// Asignando variables
var numero1 = 7, numero2 = 15;
var suma, resta, multi, div;

suma = numero1 + numero2;
resta = numero1 - numero2;
multi = numero1*numero2;
div = numero1/numero2;

alert("El resultado de la SUMA es: " + suma + "\n El resultado de la RESTA es: "+ resta + "\n El resultado de la Multiplicación es: "+ multi + "\n El resultado de la División es: "+ div);

var numero_entero = 24, cadena_texto = "Hola 'Que' tal", verdero_o_falso = true, numero_falso="33";

var suma2 = numero_entero+numero_falso;

console.log(suma2);
numero_falso = parseInt(numero_falso);

suma2 = numero_entero+numero_falso;

console.log(suma2);

numero_entero = numero_entero.toString() + 9;

console.log(numero_entero);


// Imprimir el tipo de dato

console.log("El tipo de dato de numero_entero es: " + typeof numero_entero);
console.log("El tipo de dato de cadena_texto es: " + typeof cadena_texto);
console.log("El tipo de dato de verdadero_o_falso es: " + typeof verdero_o_falso);
console.log("El tipo de dato de numero_falso es: " + typeof numero_falso);
