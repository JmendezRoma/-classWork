'use strict';

function realizarSuma(num1,num2,callback) {
    const resultadoSuma = num1+num2;
    callback(resultadoSuma);
}

function realizarResta(num1, num2, callback) {
    const resultado= num1-num2;
    callback(resultado);
}

// Función callback
function imprimirResultado(resultadoFinal) {
    console.log(`El resultado de la operación es: ${resultadoFinal}`);
}

realizarSuma(5,7,imprimirResultado);
realizarResta(10,2,imprimirResultado);

//Función anónima utilizando callback
const ejecutarProceso = callback => {
    console.log("Iniciar proceso...");
    callback();
    console.log("Fin del proceso.");
}

const procesoEnEjecucion = () => {
    console.log("Proceso en ejecución...");
}

ejecutarProceso(procesoEnEjecucion);

//Ejercicio: teniendo en cuenta un número dado, informar al usuario cuando el número es mayor a 10 y cuando no.

const verificarNumero = (numero, callback) => {

    if (numero>10) {
        callback("El número ingresado es mayor que 10");
    } else {
        callback("El número ingresado no es mayor que 10");
    }
}

const mostrarMensaje = mensaje => { // función callback
    console.log(mensaje);
}

verificarNumero(20, mostrarMensaje);
verificarNumero(5, mostrarMensaje);
