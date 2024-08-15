'use strict';

/* setTimeout

sintaxis:

        setTimeout(callback,delay);

*/

//1er ejemplo
setTimeout(function(){
    console.log("Hola!");
}, 3000);

//2do ejemplo con callback
const ejecutarEn2Seg = callback => {
    setTimeout(callback,2000);
}

const mensaje = () => { // función callback
    console.log("Han pasado 2 segundos.");
}

ejecutarEn2Seg(mensaje);

//setInterval
//1er ejemplo
const intervaloPrueba = setInterval(() => {
    console.log("Estoy probando el intervalo");
    clearInterval(intervaloPrueba); // Detener el intervalo
}, 4000);

//2do ejemplo
const cuentaRegresiva = () => {

    let segundos = 10;

    const tiempoAgotado = () => {

        if (segundos === 0) {
            console.log("El tiempo se ha agotado!");
            clearInterval(intervaloDeTiempo);
        } else {
            console.log(segundos);
            segundos--;
        }

    }

    return tiempoAgotado;

};

const actualizarCuentaRegresiva = cuentaRegresiva();
const intervaloDeTiempo = setInterval(actualizarCuentaRegresiva, 1000);

// TAREA: agregar a la función cuentaRegresiva un setTimeout para que espere 5 segundos y luego se ejecute. 

