"use strict";

//IIFE expresion de funcion ejecutada inmediatamente (declaro la funcion e inmediatamente se ejecuta , no se expulsa el resultado )


/**
 * sintaxis
 * 
 *  (function(){
 *      codigo a ejecutar
 *  
 * })
 */

//1er ejemplo
(function (nombreUsuario) {
    console.log(`Hola ${nombreUsuario}`);
})("juancito");

//2do ejemplo
(function (numero) {
    const cuadrado = numero * numero;
    console.log(cuadrado);
})(5);