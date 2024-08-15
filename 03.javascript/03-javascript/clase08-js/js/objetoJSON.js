"use strict";

//es similiar a un objeto literal


//objeto literal del lado del frontend 
//no es una cadena de texto
const coche = {
    marca:"opel",
    model:"meriva",
    color:"red"
}


//objeto JSON es del lado del backend || Javascript Object Notation
//es una cadena texto
//sus claves van entre comillas
//javascript no sabe lo que es un objeto JSON
//cuando tengo un objeto json no puedo acceder a ningun elemento
console.log(coche);
/**
 * 
 *   {
 *      "nombreUsuario": "Maria",
 *       "apellidoUsuario": "rodriguez",
 *        "edad": 40,
 *        "nacionalidad": ["España", "Uruguay"]
 *   }
 * 
 * 
 */

//tomar el objeto literal coche y transformarlo a un objeto json
const cocheJSON = JSON.stringify(coche);
console.log(cocheJSON);

//transformar el objeto json denominado "cocheJSON" a un objeto literal de js
const cocheJS = JSON.parse(cocheJSON)//convierte objeto json en js
console.log(cocheJS); //muestro el objeto literal js
console.log(cocheJS.model);
console.log(cocheJS.color);