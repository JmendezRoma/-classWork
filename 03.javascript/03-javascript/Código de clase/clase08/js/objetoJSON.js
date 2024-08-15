'use strict';

// Objeto literal (del lado del front en JS)
const coche = {
    marca: "Chevrolet",
    modelo: "Onix",
    color: "rojo"
}

console.log(coche);

/* Objeto JSON (del lado del back) | JavaScript Object Notation
*/

// Tomar el objeto literal coche y transformarlo a un objeto JSON

const cocheJSON = JSON.stringify(coche);
console.log(cocheJSON); // Mostramos el objeto JSON

// Transformar el objeto JSON denominado "cocheJSON" a un objeto literal de JS
const cocheJS = JSON.parse(cocheJSON); // Convierte objeto json en js
console.log(cocheJS); // Muestro el objeto literal de JS
console.log(cocheJS.modelo);



