"use strict";

// mas metodos aarays
// teniendo en cuenta el siguiente array, ordenar los valores de inicio a fin

//SORT()

const letrasOrdenadas = ["x", "a", "y", "n", "z", "b"];

letrasOrdenadas.sort();
console.log(letrasOrdenadas);

const numerosOrdenados = [5,2,9,1,2300,20,15,12];

numerosOrdenados.sort((a,b) => a - b);//formula para ordenar numeros
console.log(numerosOrdenados);

/**
 * a --> representa el primer elemento a comparar
 * b --> representa el segundo a comprar
 * cuando obtenemos un numero positivo como resultado de la operacion la b se coloca antes de la a
 * 
 * return puede ser numero negativo, cero o positivo
 * 
 *           - cuando es negativo A se coloca antes
 *           que B
 * 
 *           - cuando el resultado es positivo, B          se            coloca antes B que A
 * 
 *           - cuando es 0 a y b se mantienen en 
 *              el mismo lugar
 */


// SPLICE() puedes añadir, eliminar, reemplazar

const colores = ["rojo", "verde", "azul", "naranja", "amarillo"];
colores.splice(3,0,"turquesa"); // posicion 3, no reemplazar 0, turquesa lo que quieres añadir
//si hubieramos querido eleminar dos elementos a partir de la posicion 3  (3,2,0)
console.log(colores);


// INCLUDES() SI EL ELEMENTO ESTA O NO DENTRO DEL ARRAY (TRUE, FALSE)
console.log(colores.includes("beige"));

// INDEXOF() DEVUELVE EL INDICE DE UN ELEMENTO

console.log(colores.lastIndexOf("azul"));

// SPLIT() convertir un string en un array
const nombreCompleto = "Martina Suarez";
const nombreArray = nombreCompleto.split("");
console.log(nombreArray);

//JOIN() Convertir un array en un string 
const cadenaNumeros = numerosOrdenados.join("-");
console.log(cadenaNumeros);

//REVERSE() 
// invertir el orden de los elementos del array
numerosOrdenados.reverse();
console.log((numerosOrdenados));

// DESTRUCTURING EN ARRAYS  TOMO VALORES DE ESE ARRAY Y LOS GUARDO EN VARIABLES
const numeros = [1,2,3,4,5]
const [primerNumero, segundoNumero, ...restoDeNumeros] = numeros; //sintaxis del destructuring , con el spred operator se guardan el resto de elementos en la variable restoDeNumeros

console.log(primerNumero);
console.log(segundoNumero);
console.log(restoDeNumeros);

//   FOREACH() NO ES UN BUCLE PERO SE COMPORTA INTERNAMENTE COMO UN BUCLE METODO EXCLUSIVO PARA ARRAYS
// (elementoNumero, indice, array) es indistinto el nombre que le demos lo que si importa es el orden de las instancias

//arrow function
numeros.forEach( (elementoNumero, indice, array) => {
    console.log(elementoNumero, indice, array);
});

// function
numeros.forEach(function(elementoNumero) {
    console.log(elementoNumero);
});

// EJERCICIO DADO EL ARRA DE NUMEROS DEBEREMOS UTILIZAR EL METODO FOREACH() PARA SUMAR 5 UNIDADES A CADA NUMERO DE DICHO ARRAY Y MOSTRAR RESULTADO
numeros.forEach( numero => {
    numero += 5;
    console.log(numero);
});

// SOME() SE UTILIZA SI SE QUIERE SABER SI ALGUNO DE LOS DATOS CUMPLEN CON LA CONDICION DADA Y OBTENEMOS UN VALOR BOOLEANO
//siempre va con una function
//y siempre devuelve un booleano
const nombres = ["Ana", "Juana", "Rodolfo", "Martin", "Elena"];
console.log(nombres.some(nombreUsuario => nombreUsuario === "Juana")); //true

// EVERY() SI TODOS LOS ELEMENTOS DE UN ARRAY CUMPLEN CON UNA CONDICION DEVUELVE UN BOOLEANO

console.log(nombres.every(nombreUsuario => nombreUsuario.length >= 4)); //false

// FILTER() TRABAJAMOS CON UNA FUNCTION INTEGRADA TAMBIEN
//ejercicio dado el array de numeros filtrar solos los numeros pares
const numerosPares = numeros.filter(numeroElemento => numeroElemento % 2 === 0);
console.log(numerosPares); //[2, 4]

// EJERCICIO dado el array de nombres lograr filtar y mostrar a elena
const filtrarNombres = nombres.filter(nombres => nombres === "Elena");
console.log(filtrarNombres);

// REDUCE() TOMA UN ARRAY Y RETORNA UN SOLO VALOR 
//SE SUELE UTILIZAR PARA CALCULOS MATEMATICOS
//SE USA CON FUNCIONES

//teniendo en cuenta el array de numeros aplicar una funcion reductora para poder lledar a un solo valor
// suma por defecto inicia en 0; si quieramos que no empezara en 0 deberiamos añadir la cifra al final
//numero es el elemento del array
const resultadoSuma = numeros.reduce( (suma, numero) => suma + numero,0 );
console.log(resultadoSuma);

// MAP() TAMBIEN TRABAJA CON UNA FUNCTION DE MANERA OBLIGATORIA COMO LOS ANTERIORMENTE NOMBRADOS

//EJERCICIO teniendo en cuenta el array de numeros queremos lograr sacar y almacenar en otro array el cuadrado de ellos
//genera un array
//se evita crear un array vacio

//resultado sin usar map
const cuadrados = [];

for (let elementoNumero of numeros) {
    cuadrados.push(elementoNumero*elementoNumero);
}

console.log(numeros);//array original no ha sido modificado
console.log(cuadrados);//obtenemos un nuevo array con los resultados

//resultado usando map (ES MAS OPTIMO)
const obtenerCuadrados = numeros.map(elementoNumero => elementoNumero*elementoNumero);
console.log(obtenerCuadrados);