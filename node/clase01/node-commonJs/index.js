"use strict";

const operaciones = require ('./src/services/funciones');

let suma = operaciones.sumar(12.25,30);

console.log(suma);


let resta = operaciones.restar(12.25,7);

console.log(resta);

let mayor = operaciones.getMayor(234,68);

console.log(mayor);

/**
 * const {restar} = require('./src/services/funciones')
 * 
 * si solo quiero traerme una sola funcion, esto se llama destructuring
 * 
 * let resta = restar(24,4);
 * console.log("La resta es:", resta)
 * 
 */
