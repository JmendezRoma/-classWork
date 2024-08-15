'use strict';

function imprimirNumero(numero, funcionCallback) {
    funcionCallback(numero);
}

imprimirNumero(50, function(num){
    console.log(`El número a imprimir es: ${num}`);
});