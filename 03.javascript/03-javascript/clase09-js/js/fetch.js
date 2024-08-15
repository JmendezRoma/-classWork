"use strict";

/**
 *  FETCH SINTAXIS:
 *
 *  fetch("https://randomuser.me/api")
 *
 *  .then(function(data) {
 *
 *    return data.json  })
 *
 * //realiza  las   promesas, es una funcion que transforma el JSON a un objeto literal js (conversor)
 *
 *   .then(function(data) {
 *
 * })
 * // recibe el objeto literal, y se manejan los datos
 *
 *   .catch(function() {
 *      console.log(error)
 * })
 *
 * //se usa por si hay algun error
 * al consumir la api
 *
 *
 *
 */

//obteniendo datos de la api random user

function obtenerDatosUsuarios() {
  fetch("https://randomuser.me/api")
    .then(function (response) {
      // el argumento de la funcion accede a todos los datos de la api (response)
      return response.json(); //convertimos el objeto json en objeto litral js

      //no se usa ;
    })

    .then(function (dataUsers) {
      console.log(dataUsers.results[0].email);
    })

    .catch(function (err) {
      console.error(err.message);
    }); //si surge al un error al consumir la api
}

obtenerDatosUsuarios();

//2do ejemplo api pokemon
function pokemonDataV1() {
  fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log("--- Pokemon: Version 1 ---");
      console.log(`El nombre del pokemon es: ${data.results[5].name}`);
    });
}

pokemonDataV1();

//TAREA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
//teniendo en cuenta la api de pokemon usando la Verdion 2 se debera agregar y mostrar todas las habilidades el personaje seleccionado

const pokemonDataV2 = (pokemonName) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())

    .then((data) => {
      console.log("--- Pokemon: Version 2 ---");
      console.log(`El nombre del pokemon es: ${data.name}`);
      console.log(` El tipo de este personaje es: ${data.types[0].type.name}`);
      const abilitiesFilter = data.abilities.map(
        (allData) => allData.ability.name
      );
      console.log(` Sus habilidades son: ${abilitiesFilter},  `);
    })

    .catch((err) => {
      console.error(` ESE POKEMON NO EXISTE. Error :${err.message} `);
    });
};

let userPetition = prompt("escribe aqui el pokemon");
pokemonDataV2(userPetition.toLowerCase());

/*PROMESAS : objeto de js nos sirve para prometer y poder cumplir ciertas acciones de manera asyncronica

    -Promesa pendiente
    cuando comienza a construirse la promesa

    -Promesa cumplida
    cuando la promesa se resuelve

    -Promesa rechaza
    si la promesa tiene un error en el codigo

*/

//CREAR UNA PROMESA : necesitamos un constructor new Promise()

//espera una function

//1er ejemplo
const creandoPromesa = new Promise((resolver, rechazar) => {
  const respuesta = "Aca obtenemos una respuesta del servicio API";
  resolver(respuesta); //quien es la que tiene los datos
  rechazar("Falló la respuesta. No pudimos obtener datos...");
});

console.log(creandoPromesa); //muestra el estado de la promesa en este caso estaba cumplida

creandoPromesa
  .then((resultado) => {
    console.log(resultado);
  })

  .catch((err) => {
    // el estado de rechazar se conecta automaticamente con el catch
    console.error(err);
  });

//2do ejemplo consumiendo la api random user
function fetchUserData() {
  return new Promise((resolve, reject) => {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(`Hubo un error: ${err}`));
  });
}

setTimeout(() => {
  fetchUserData() // como ya hice el fetch se comporta como el anterior  y a partir de ahora se manejan los datos
    .then((userData) => {
      console.log(userData.results[0].email);
    });
}, 2000);
