// Se declaran variables

let num1, num2;

do{
    num1 = parseInt(prompt("Introduce el primer número: "));
}while(isNaN(num1)||num1<=0);

do{
    num2 = parseInt(prompt("Introduce el segundo número: "));
}while(isNaN(num2)||num2<=0);

// Las operaciones

let suma = num1+num2;
let resta = num1-num2;
let multi = num1*num2;
let division = num1/num2;

// Variables con los resultados para mostrar en HTML, PROMPT y CONSOLA

let resultado = `La suma es: ${suma} <br>
la resta es: ${resta} <br>
la multiplicación es: ${multi} <br>
la division es: ${division} <br>`;

let resultadoCMD = `La suma es: ${suma} \n
la resta es: ${resta} \n
la multiplicación es: ${multi} \n
la division es: ${division} \n`;

// Impresión en HTML, PROMPT y CMD

document.write(resultado);
alert(resultadoCMD)
console.log(resultadoCMD)