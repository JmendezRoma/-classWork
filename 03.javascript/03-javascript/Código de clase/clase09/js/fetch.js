'use strict';

/* Fetch

Sintaxis:

    fetch("https://randomuser.me/api")

        .then(function(data){
            return data.json();
        })

        .then(function(data){
            Acá haremos lo que queramos con los datos recibimos ya previamente transformados a objeto de JS
        })

        .catch(function(error){
            console.error(error);
        })


*/

// 1er ejemplo: obteniendo datos de la API random user
function obtenerDatosUsuario() {
    
    fetch("https://randomuser.me/api")

        .then(function(respuesta){
            return respuesta.json(); //Convertimos el objeto json en objeto de js
        })

        .then(function(datosUsuarios){
            console.log(datosUsuarios);
            console.log(datosUsuarios.results[0].email);
            console.log(datosUsuarios.results[0].location.country);
        })

        .catch(function(err){
            console.error(err.message);
        })

}

obtenerDatosUsuario();

//2do ejemplo: obteniendo datos de la API de pokémon
function pokemonDataV1() {

    fetch("https://pokeapi.co/api/v2/pokemon")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log("--- Pokemon: Versión 1 ---");
            console.log(`El nombre del pokemon es: ${data.results[5].name}`);
        })   
};

pokemonDataV1();


const pokemonDataV2 = pokemonName => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        .then(response => response.json())
        
        .then(data => {
            
            console.log("--- Pokemon: Versión 2 ---");
            console.log(`El nombre del pokemon es: ${data.name}`);
            console.log(`El tipo de este personaje es: ${data.types[0].type.name}`);
        })

}

pokemonDataV2("pikachu");

/* ESTADOS DE LAS PROMESAS

    - Promesa pendiente
    - Promesa cumplida
    - Promesa rechazada

*/

//CREAR UNA PROMESA -> new Promise()
//1er ejemplo

const creandoPromesa = new Promise((resolver, rechazar) => {
    const respuesta = "Acá obtenemos una respuesta del servicio";
    resolver(respuesta);
    rechazar("Falló la respuesta. No pudimos obtener datos");
});

console.log(creandoPromesa); // Muestra el estado de la promesa, en este caso estaba cumplida

creandoPromesa.then(resultado => {
    console.log(resultado);
})

.catch(err => {
    console.error(err);
})

//2do ejemplo consumiendo la API randomuser
function fetchUserData() {
    
    return new Promise((resolve, reject) => {

        fetch("https://randomuser.me/api")
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(`Hubo un error: ${error}`))
    })
}

setTimeout( () => {

    fetchUserData().then(userData => {
        console.log(userData.results[0].email);
    });

}, 2000);


// EJERCICIO DE TAREA: tomar como base la función pokemonDataV2, se deberá agregar y mostrar todas las habilidades el personaje seleccionado. 