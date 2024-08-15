"use strict";

//CLOSURES (clausuras o funciones de cierre)
//que una funcion hijo tenga acceso a la variable de su padre

//1er ejemplo (crear la suma de dos numeros y mostrar el resultado)


function exterior(numero1) {
    
    function interior(numero2) {
        //tiene el dato que finaliza numero 2
        return numero1 + numero2;
    }
    return interior;
}

const closureEjemplo = exterior(10);
console.log(closureEjemplo(20));

//2do ejemplo   , crear una cuenta regresiva tomando com ovalor inicial el numero ingreso por paeametro y cuenando llegue a 0 debemos mmostrar un mensaje que diga ha finalizado la cuenta regresiva
function cuentaRegresiva(segundos) {
    
    let tiempoRestante = segundos;

    return function () {
        if (tiempoRestante > 0) {
            console.log(tiempoRestante);
            tiempoRestante--;
        } else {
            console.log("la cuenta regresiva ha finalizado");
        }
    }
}

const cuenta = cuentaRegresiva(10);
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
//contador de numeros
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

const miContador = contadorDeNumeros()

console.log(miContador.valor());
console.log(miContador.incrementar());
console.log(miContador.incrementar());
console.log(miContador.incrementar());
console.log(miContador.decrementar());
console.log(miContador.valor());


//adelanto de asincronismo

setTimeout(function () {
    console.log("adelanto de asincronismo");
}, 4000);
