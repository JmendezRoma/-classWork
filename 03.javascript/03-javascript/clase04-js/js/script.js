"use strict";

//FUNCIONES (SE PUEDEN EJECUTAR TANTAS VECES QUE QUIERAS, EN EL MOMENTO QUE QUIERAS Y GUARDAN UN COJUNTO DE INTRUCCIONES)

/**
 * EJEMPLO DE HOISTING..... LA VARIABLE "CONTADOR" DENTRO DE LA FUNCION AFECTA DE FORMA GLOBAL A LA VARIABLE GLOBAL "CONTADOR" AL LLAMAR DOS VECES A LA FUNCION "CONTADORMASUNO"
 * 
 * let contador = 0;

function contadorMasUno() {
  contador++;
  console.log("Valor de la variable global contador:", contador);
}

contadorMasUno(); // Imprime "Valor de la variable global contador: 1" en la consola
contadorMasUno(); // Imprime Valor de la variable global contador: 2" en la consola

 * 
 */

// los () indican que se esta ejecutando una function

//FUNCIONES SIN PARAMETROS

function saludarUsuario(params) {
  console.log("Hola!");
}
saludarUsuario();
saludarUsuario();
saludarUsuario();
saludarUsuario();

//FUNCIONES CON PARAMETROS
// parametros = variables locales
//REALIZAR LA SUMA DE DOS NUMEROS Y MOSTRAR EL RESULTADO POR CONSOLA

// function suma(num1, num2) {
//     const resultado = num1 + num2;
//     console.log(resultado);
// }

// suma(20, 30);

function suma(num1, num2, resultado) {
  resultado = num1 + num2;
  console.log(resultado);
}

suma(50, 30.5);

// 3ra version

function sumarDosNumeros(num1, num2, resultado) {
  resultado = num1 + num2;
  return resultado; // expulsa el resultado
}

console.log(sumarDosNumeros(10, 20));

// TOMAR EL RESULTADO  MULTIPLICARLO A 2 Y MOSTRAR EL RESULTADO

//version 3 (en la vesion 2 no se puede mostrar porque el resultado no lo extraes a global)
const duplicar = sumarDosNumeros(10, 20) * 2;
console.log(duplicar);

//4ta version

function resta() {
  const num1 = +prompt("infresa el primer numero");
  const num2 = +prompt("infresa el primer numero");
  const resultado = num1 - num2;
  return resultado;
}

console.log(resta());

//----------------------------------------//

function cuadrado(userCuadrado) {
  let resultCuadrado = userCuadrado * userCuadrado;
  return resultCuadrado;
}

console.log(cuadrado(2));
