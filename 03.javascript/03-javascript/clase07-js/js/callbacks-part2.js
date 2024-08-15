"use strict";


//la palabra callback no es propia del lenguaje solo indica que esa funcion recibe como argumento otra.


function realizarSuma(num1, num2,callback) {
    const resultado = num1 + num2;
    callback(resultado);
}

function realizarResta(num1,num2, callback) {
    const resultado = num1 - num2;
    callback(resultado);
}

function imprimirResultado(resultado) {
  console.log(`El resultado de la operacion es: ${resultado}`);
}
realizarSuma(5,7,imprimirResultado);
realizarResta(10,2,imprimirResultado);

//FUNCION ANONIMA UTILIZANDO CALLBACK SE GUARDA EN UNA VARIABLE
const ejecutarProceso = callback => {
    console.log("iniciar proceso..");
    callback();
    console.log("fin del proceso.");
}

const procesoEnEjecucion = () => {
    console.log("proceso en ejecucion...");
}

ejecutarProceso(procesoEnEjecucion);

//--------------------------------------------//
const verificarNumero = (numero,callback) => {
    if (numero>10) {
        callback ("el numero ingresado es mayor que 10")
    } else {
        callback ("el numero ingresado no es mayor que 10")
    }
}

const mostrarMensaje = mensaje => {
    console.log(mensaje);
}

verificarNumero(20, mostrarMensaje)