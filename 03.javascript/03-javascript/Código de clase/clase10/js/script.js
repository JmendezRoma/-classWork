'use strict';

// DOM -> Document Object Model 

// Seleccionar elementos con querySelector (de este modo nos va solo a devolver el primer elemento HTML que encuentre en base a su tipo)
console.log(document.querySelector('p')); // 1er párrafo
console.log(document.querySelector('.textos')); //1er párrafo
console.log(document.querySelector('#texto2')); // 2do párrafo

// Seleccionar a más de un elemento a la vez. Nos muestra la información en formato de array
console.log(document.querySelectorAll('p'));

// Acceder al elemento en base a su clase. Nos muestra un array final.
console.log(document.getElementsByClassName('textos'));

// Acceder al elemento en base a su ID
console.log(document.getElementById('texto3'));

// Acceder al elemento en base al nombre de su etiqueta
console.log(document.getElementsByTagName('p'));

// Pasar un estilo a un elemento
document.getElementById('tituloPrincipal').style.color='green';
document.getElementById('tituloPrincipal').style.backgroundColor = 'black';

// Crear una variable donde le pasaremos estilos a un elemento a través de la misma
const parrafo1 = document.getElementById('texto1');
parrafo1.style.color='white';
parrafo1.style.backgroundColor='grey';
parrafo1.style.padding='20px';

// Aplicar estilos mediante una clase ya creada previamente en el archivo style.css
const parrafo2 = document.getElementById('texto2');
parrafo2.classList.add('estiloParrafo2');

// Eliminar un estilo mediante una clase que está en el archivo style.css
parrafo2.classList.remove('estiloParrafo2');

// Acceder al contenido de un elemento con innerHTML
console.log(parrafo2.innerHTML);

// Acceder al contenido de un elemento con textContent
console.log(parrafo2.textContent);

//Cambiar un valor por otro valor (se puede usar el innerHTML como el textContent)
const parrafo3 = document.getElementById('texto3');
parrafo3.innerHTML = "Estamos probando suplantar un texto por otro";

// Iterar elementos del documento html, en este caso será la lista desordenada
const itemLista = document.querySelectorAll('li'); // devuelve un array

for (const listaDesordenada of itemLista) {
    listaDesordenada.style.color='orange';
}

// Iterar una sección que contiene 2 etiquetas de párrafo
const parrafosSeccion = document.querySelectorAll('#seccion2>p'); // Nos devuelve un array

for (const parrafo of parrafosSeccion ) {
    parrafo.style.fontSize='1.5rem';
}

// Agregar un nuevo elemento al DOM
const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent= 'Hola, ¿cómo están?';
document.getElementById('saludo').appendChild(nuevoParrafo);

/* Otra forma de agregar elementos a la página vamos a utilizar una función

 elemento.insertAdjacentHTML(posición,contenidoAgregado);

Tenemos 4 posiciones:
    beforebegin: antes que el propio elemento en si 
    afterbegin: justo detro del elemento, antes de su primer elemento hijo
    beforeend: justo dentro del elemento, después de su último elemento hijo
    afterend: después del propio elemento 

*/

const informacionWebHack = document.getElementById('mostrarDatos');
informacionWebHack.insertAdjacentHTML('afterend', `
    
        <h3> Web oficial de HACK A BOSS </h3>
        <p> Si queres ver más información sobre los bootcamps ingresa al siguiente acceso</p>
        <a href="https://www.hackaboss.com/"> Ingresa aquí</a>
    
    `);


