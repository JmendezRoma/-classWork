"use strict";

//comentario en una linea
/**
 * comentario de varias lineas
 * 
 * 
 * TIPOS DE DATOS:
 *  -tipo de datos primitivos: string,number,boolean,null,
 *  undefined.
 * 
 *  tipo de objetos: objeto,arrays.
 * 
 * VARIABLES:
 * -let:
 * -const:
 * 
 */

//let
let nombreUsuario = "Pepe";
console.log(nombreUsuario);
nombreUsuario ="Pable";
console.log(nombreUsuario);

//const
const apellidoUsuario ="Suarez";
console.log(apellidoUsuario);
// apellidoUsuario = "Sanchez";


// UNDEFINED: Con la constante no nos permite 
// crear mi variable sin valor ya sea porque 
// queremos que la variable reciba un valor externo


let variableSinValor;
console.log(variableSinValor);

//NULL: Cuando no se le da un valor intencionado aunque 
// despues lo puedas cambiar y puede ser con let que es mas
//  recomendable.
let variableNula = null;
console.log(variableNula);

//USO CONCATENACION

const mensaje1_$ = "Hola";
const mensaje2 = "Mundo";
//const saludo = mensaje1_$ + " " + mensaje2;
//const saludo = mensaje1_$.concat(mensaje2);
const saludo = `${mensaje1_$} ${mensaje2}`; //la mejor forma de concatenar.
console.log(`el mensaje de saludo es:  ${saludo}`);


//uso de la funcion length
//cuantos caracteres tiene la variable

console.log(saludo.length);

//quiero acceder a un caracter especifico dentro de una cadena de texto

console.log(mensaje2.charAt(4)); // ultima letra

//quiero acceder el ultimo indice del valor que este guardado en la variable
//mensaje2 y mostrar ese caracter

console.log(mensaje2.charAt(mensaje2.length-1));


// ARRAYS : varios valores que se guardan en una variable
//cuantos valores hay en el array  
const nombres = ["Lautaro", "Jenni", "Romina"];
console.log(nombres); //3 valores array completo
console.log(nombres.length);

//NUMEROS ENTEROS Y DECIMALES

//parseInt

console.log(parseInt(15.3)); //15  lo obvia el decimal
console.log(parseInt("20.4")); // no solo saca la parte decimal sino que
//paso el string a number


//EJERCICIO realizar la suma de dos numeros y mostrar el resultado por 
//consola   parse, Number, +

//ES CONVENIENTE SIIIIIEMPRE PARSEAR DIRECTAMENTE LA VARIABLE QUE SE QUIERA
//PARCEAR ANTES QUE EL RESULTADO POR SI DESPUES QUIERRES HACER UN FILTRO
//Y LAS VARIABLES SON DE OTRO TIPO A LAS QUE BUSCABAS

// const number1 =  parseFloat(prompt("ingresa un numero para operar"));                       /*12*/
// const number2 =  parseFloat(prompt("ingresa un segundo numero "));                       /*parseFloat("10.5");*/
// const result = number1 + number2;
// console.log(result);

// const number1 =  Number(prompt("ingresa un numero para operar"));                       /*12*/
// const number2 =  Number(prompt("ingresa un segundo numero "));                       /*parseFloat("10.5");*/
// const result = number1 + number2;
// console.log(result);

// const number1 =  +(prompt("ingresa un numero para operar"));                       /*12*/
// const number2 =  +(prompt("ingresa un segundo numero "));                       /*parseFloat("10.5");*/
// const result = number1 + number2;
// console.log(result);


//NaN ---> no es un numero

console.log(0/0);


//isNaN ---> es la comprobacion de NaN

const valor1 = 20;
const valor2 = "hola";

//comprobar si los valores de las variables son NaN

console.log(isNaN()); // no hay un numero dentro del parentesis
console.log(isNaN(valor1));// false es un numero
console.log(isNaN(valor2));// true no es un numero