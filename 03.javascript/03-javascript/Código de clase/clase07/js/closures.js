'use strict';

//CLOSURES (clausuras o funciones de cierre)
//1er ejemplo: crear la suma de dos números y mostrar el resultado.

function exterior(numero1) {
    
    function interior(numero2) {
        return numero1 + numero2;
    }

    return interior;

};

const closureEjemplo = exterior(10);
console.log(closureEjemplo(20));

//2do ejemplo: crear una cuenta regresiva tomando como valor inicial el número ingreso por parámetro y cuando llegue a 0 debemos mostrar un mensaje que diga "Ha finalizado la cuenta regresiva"
function cuentaRegresiva(segundos) {
    
    let tiempoRestante = segundos;

    return function() {

        if (tiempoRestante>0) {
            console.log(tiempoRestante); // 10
            tiempoRestante--;
        } else {
            console.log("La cuenta regresiva ha finalizado!");
        }
    }

}

const cuenta = cuentaRegresiva(10);
// console.log(cuenta);
cuenta();
cuenta();
cuenta();
cuenta();
cuenta();
cuenta();
cuenta();
cuenta();
cuenta();
cuenta();
cuenta();

//3er ejemplo 
function contadorDeNumeros() {
    
    let contador = 0;

    function incrementar() {
        return contador++;
    }

    function decrementar() {
        return contador--;
    }

    function valor() {
        return contador;
    }

    return {
        incrementar, decrementar, valor
    }

}

const miContador = contadorDeNumeros();
console.log(miContador.valor()); // 0
console.log(miContador.incrementar());
console.log(miContador.incrementar());
console.log(miContador.valor()); // 2
console.log(miContador.decrementar());
console.log(miContador.valor()); // 1

// Adelanto de asincronismo
setTimeout(function () {
    console.log("Adelanto de asincronismo");
}, 3000 ); // 3000 milisegundos = 3 segundos