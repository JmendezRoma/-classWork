'use strict';

// ASYNC - AWAIT
//1er ejemplo: crear una función que devuelva una promesa que se resuelve después de un tiempo de espera. 
function retraso(tiempoEnMilisegundos) {
    return new Promise(resolver => setTimeout(resolver,tiempoEnMilisegundos));
}

async function respuestaDelRetraso(){

    try {
        
        console.log("Inicio de la espera...");
        await retraso(3000); //Acá esperamos la resolución de la promesa devuelta por la función retraso()
        console.log("Fin de la espera.");


    } catch (err) {
        console.error(`Hubo un error: ${err}`);
    }
};

respuestaDelRetraso();