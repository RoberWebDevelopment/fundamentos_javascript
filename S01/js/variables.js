// generar variables
var pais, continente, estado, ciudad;
pais = "México";
continente = "América";
estado = "CDMX";
var nombre="Juan", espacio= " " ;
// Imprimiendo en consola la variable país y continente con un espacio en blanco
console.log(pais, " ", continente );

// Crear una variable donde se concatenen los valores de país y contiente

var pais_y_continente = pais + espacio + continente;

// Aquí se imprime el valor de inicio de la variable país y continente
console.log(pais_y_continente);

// A continuación modificaremos para poder cambiar los valores de la variable pais y continente

pais = "España";
continente = "Europa";
espacio = " & ";

pais_y_continente = pais + espacio + continente

// ¿cuál sera el resultado? al imprimir en consola

console.log(pais_y_continente);

