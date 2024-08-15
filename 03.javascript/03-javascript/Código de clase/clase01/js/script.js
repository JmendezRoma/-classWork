'use strict';

// Comentario en una línea
/* 
    Comentario que ocupa varias líneas
*/

/*  TIPOS DE DATOS:

    - tipos primitivos: string, number, boolean, null, undefined
    - tipos de objetos: objeto, arrays

*/


// undefined
let variableSinValor;
console.log(variableSinValor);

// null
let variableNula = null;
console.log(variableNula);

// VARIABLES: es el contenedor de un valor (let - const)
// let
let nombreUsuario = "Stella";
console.log(nombreUsuario);
nombreUsuario = "Pablo";
console.log(nombreUsuario);

// const
const apellidoUsuario = "Suárez";
console.log(apellidoUsuario);
// apellidoUsuario = "Sánchez";


// CONCATENACIÓN
const mensaje1 = "Hola";
const mensaje2 = "Mundo";
// const saludo = mensaje1 + mensaje2;
// const saludo = mensaje1.concat(mensaje2);
const saludo = `${mensaje1} ${mensaje2}`;
console.log(`El mensaje de saludo es: ${saludo}`);


// USO DE LA PROPIEDAD LENGTH
// ¿Cuántos caracteres tiene la variable "mensaje1"?
console.log(mensaje1.length); // 4
console.log(mensaje2.length); // 5

// Quiero acceder a un caracter especifico de la variable "mensaje2"
// Posición: 01234 --> "mundo"
console.log(mensaje2.charAt(3));  // muestra la letra D

// Quiero acceder al último índice del valor que esté guardado en la variable "mensaje2" y mostrar ese caracter
console.log(mensaje2.charAt(mensaje2.length-1)); 

// ¿Cuántos valores tenemos en el siguiente array?
const nombres = ["Lautaro", "Romina", "Carlos"];
console.log(nombres); // Muestra el array completo
console.log(nombres.length); // 3 valores en total

// NÚMEROS ENTEROS Y DECIMALES
//parseInt 
console.log(parseInt(15.7)); // 15
console.log(parseInt("20.4")); // 20

// parseFloat
//Number
// +


// Ejercicio: realizar la suma de dos números y mostrar el resultado por consola
// const num1 = +prompt("Ingresa un número para operar");
// const num2= +prompt("Ingresa un segundo número para finalizar la operación de la suma");
// const resultado = num1 + num2;
// console.log(resultado);

//NaN (not a number)
console.log(0/0); 

// isNaN --> comprobación de NaN
const valor1 = 20;
const valor2 = "Hola";

// Comprobar si los valores de las variables "valor1" y "valor2" son NaN
console.log(isNaN()); // true --> no hay un número
console.log(isNaN(valor1)); // false --> porque si hay un número
console.log(isNaN(valor2)); // true --> no hay número

