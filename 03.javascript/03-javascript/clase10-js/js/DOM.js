"use strict";

//DOM -> Document Object Model
//es encargado de mostrar la estructura html y convertir a objetos para que js lo pueda entender

// Seleccionar elementos
//el query selector nos muestra el primer elemento
console.log(document.querySelector("p"));
console.log(document.querySelector(".textos"));
console.log(document.querySelector("#parrafo2"));

// Seleccionar mas de un elemento a la vez
console.log(document.querySelectorAll("p")); //nos muestra la info en formato array

//acceder al elemento en base a su clase
console.log(document.getElementsByClassName("textos")); //nos muestra un array final

//acceder al elemento en base a su id
console.log(document.getElementById("parrafo3"));3

//acceder al elemento en base al nombre de su etiqueta
console.log(document.getElementsByTagName("p"));

//pasar un estilo a un elemento
document.getElementById("tituloPrincipal").style.color = "green";
document.getElementById("tituloPrincipal").style.backgroundColor = "black";

//crear una variable donde le pasaremos estilos a un elemento a traves de la misma
const parrafo1 = document.getElementById("parrafo1");

parrafo1.style.color = "white";
parrafo1.style.backgroundColor = "grey";
parrafo1.style.padding = "20px";

//aplicar estilos mediante una clase ya creada previamente en el archivo style.css
const parrafo2 = document.getElementById("parrafo2");
parrafo2.classList.add("estiloParrafo2");

//Eleiminar uin estilo mediante una clase que esta en el archivo css
parrafo2.classList.remove("estiloParrafo2");

// Acceder al contenido de un elemento con inner
console.log(parrafo2.innerHTML);

// Acceder al contenido de un elemento con textContent
console.log(parrafo2.textContent);

//Cambiar un valor por otro valor, se puede hacer lo mismo con innerHtml
const parrafo3 = document.getElementById("parrafo3");
parrafo3.textContent = "estamos probando suplantar un teto por otro";

// Iterar elementos del documento html (lista desordenada)
const itemLista = document.querySelectorAll("li");//devuelve un array
console.log(itemLista);

for (const listaDesordenada of itemLista) {
    listaDesordenada.style.color="orange";
}

//Iterar una seccion que contiene 2 etiquetas de parrafo
const parrafosSeccion = document.querySelectorAll("section>p");//se puede llamar un id una clase o un comando de etiquetas

for (const parrafo of parrafosSeccion) {
    parrafo.style.fontSize="2rem";
}

//agregar un nuevo elemento al DOM
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent="Holaaaaaaaaaaaaaaa"
document.getElementById("saludo").appendChild(nuevoParrafo);

/**
 * Otra forma de agregar elementos a la pagina
 * utilizando una funcion
 * 
 * elemento.insertAdjacentHTML(posicion,contenido);
 * 
 * tenemos 4 posiciones:
 * 
 *  beforebegin: antes que el propio elemento en si
 * 
 * afterbegin: justo dentro del elemtno, antes de su primer elemento hijo
 * 
 * beforeend: justo dentro del elemento, despues de su ultimo elemento hijo
 * 
 * afterend: despues del propio elemento
 * 
 */
const informacionWebHack = document.getElementById("mostrarDatos");

informacionWebHack.insertAdjacentHTML("beforebegin", `

    <h3> web oficial </h3>    
    <p> si quieres ver mas informacion sobre los bootcamps...</p>
    <a href="https://www.hackaboss.com/">click aca </a>
    
    `);