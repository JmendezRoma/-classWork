'use strict';

// IIFE (Inmediately Invoked Function Expression  = Expresión de función ejecutada inmediatamente) 

/* Sintaxis

    (function(){
        código a ejecutar
    })();


*/

//1er ejemplo
// (function(nombreUsuario) {
//     nombreUsuario=prompt("Ingresa tu nombre");
//     console.log(`Hola ${nombreUsuario}`);
// })();

//2do ejemplo
(function (numero) {
    const cuadrado = numero*numero;
    console.log(cuadrado);
})(5);


