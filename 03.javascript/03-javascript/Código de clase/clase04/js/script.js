'use strict';

// FUNCIONES
// Funciones sin parámetros 
function saludarUsuario() {
    console.log("Hola!");
}

saludarUsuario();

// Funciones con parámetros
// Parámetros = variables locales (local scope)
// Argumentos: es el valor actual que se envía a la función. Los argumentos completan a los parámetros. 

// Realizar la suma de dos números y mostrar el resultado por consola

//1er versión
function suma(num1, num2) {
    const resultado = num1 + num2;
    console.log(resultado);
}

suma(20, 30);

//2da versión
function sumandoNumeros(num1, num2, resultado) {
    resultado = num1 + num2;
    console.log(resultado);
}

sumandoNumeros(50, 30.5);

// Tomar el resultado del ejercicio Versión 3 y multiplicarlo a 2 y mostrar el resultado del mismo.
const duplicandoResultado = sumandoNumeros(50, 30.5);
console.log(duplicandoResultado);

//3er versión
function sumarDosNumeros(num1, num2, resultado) {
    resultado= num1+num2;
    return resultado;
}

console.log(sumarDosNumeros(10, 20));

 
const duplicar = sumarDosNumeros(10,20)*2;
console.log(duplicar);


//4ta versión
function resta() {
    
    const num1 = +prompt("Ingresa un número para la operación de resta");
    const num2 = +prompt("Ingresa el segundo número para finalizar la operación");
    const resultado = num1 - num2;
    return resultado;
}

console.log(resta());
