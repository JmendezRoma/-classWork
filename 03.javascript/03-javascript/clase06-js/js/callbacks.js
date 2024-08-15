"use strict";

//CALLBACK ES UNA FUNCION QUE SE PASA COMO ARGUMENTO A OTRA FUNCION
function imprimirNumero(numero, funcionCallback) {
    funcionCallback(numero);
}
imprimirNumero(50, function (num) {
    console.log(`el numero a imprimir: ${num}`);
});
