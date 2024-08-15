"use strict";

// creamos un objeto date y lo guardamos en una variable

const goblalTime = new Date();

//visualizamos con log atraves de los gets

console.log(
  goblalTime.getDate() +
    "/" +
    goblalTime.getMonth() +
    "/" +
    goblalTime.getFullYear() +
    "⏳" +
    goblalTime.getHours() +
    ":" +
    goblalTime.getMinutes() +
    ":" +
    goblalTime.getSeconds()
);

//insertamos datos con los setters
const birthday = new Date();

birthday.setDate(26);
birthday.setMonth(2);
birthday.setFullYear(2003);
birthday.setHours(15);
birthday.setMinutes(59);
console.log(birthday);

//-----///-----------------//----//
console.log(goblalTime.toString()); // lo cambia a string
console.log(goblalTime.toLocaleString()); //muestra en el formato de la horal local del pc
console.log(goblalTime.toLocaleDateString()); //fecha en formato local pc
console.log(goblalTime.toLocaleTimeString()); // hora en formato local pc

// Formato de fecha universal UTC

console.log(goblalTime.toISOString());

//forma recomendada de crear una fecha

//creamos un nuevo object e insertamos la fecha iso directamente

const recommendDate = new Date("2024-06-25T00:55:49.520Z");

console.log(recommendDate);
