//ASYNC - AWAIT (se utiliza dentro de una funcion async)// otra forma de usar el new Promise() simplifica muchisimo las promesas
//objetivo es evitar los callback

//1er ejemplo: crear una funcion que devuelva una promesa que se resuelve despues de un tiempo de espera
function retraso(tiempoEnMilisegundos) {
    return new Promise(resolver => setTimeout(resolver,tiempoEnMilisegundos));
}

async function respuestaDelRetraso() {
    try {
        console.log("Inicio de la espera...");
        await retraso(3000);//esperamos la resolucion de la promesa devuelta por la funcion retraso()
        console.log("Ejecutado el await");
        console.log("Fin de la espera");

    } catch (error) {
        console.error(`Hubo un error: ${err}`);
    }
}

respuestaDelRetraso();

