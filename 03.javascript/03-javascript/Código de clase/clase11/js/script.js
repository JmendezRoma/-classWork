'use strict';

//Existen dos maneras de aplicar eventos
// Método tradicional
const btnEnviar = document.getElementById('botonEnviar');
btnEnviar.onclick = function(){
    console.log('Acabas de realizar un click');
}

/* Método actual

    Sintaxis:
        elemento.addEventListener('evento', callback);


*/
const btnIniciar = document.getElementById('botonIniciar');
btnIniciar.addEventListener('click', function(){
    console.log('Acabas de realizar un click sobre el botón "Iniciar Proceso"');
});

// Agregar un color al párrafo
const parrafo = document.getElementById('texto');
const btnColor = document.getElementById('botonColor');

const cambiarColor = function(){
    parrafo.style.color='blue';
}
btnColor.addEventListener('click', cambiarColor);

//Eliminar un evento
btnColor.removeEventListener('click', cambiarColor);

// Event objects
const informacionClick = function(event){
    console.log(event);
}

btnColor.addEventListener('click', informacionClick);

// Teniendo en cuenta los 3 botones creados de html, css y js que están el archivo index.html, debemos acceder al elemento específico al que se está haciendo click.

function mostrarMensaje(event){

    const elemento = event.target.id; // Accedemos al elemento específico en el preciso momento en el que el usuario le hace click al botón

    if (elemento === 'botonHTML') {
        console.log('Hiciste click sobre HTML');
    } 

    else if(elemento === 'botonCSS'){
        console.log('Hiciste click sobre CSS');
    }
    

    else if(elemento === 'botonJS'){
        console.log('Hiciste click sobre JS');
    }
};

const btnLenguajes = document.querySelectorAll('.botonesLenguajes');

btnLenguajes.forEach(boton => {
    boton.addEventListener('click', mostrarMensaje);
});

// Vamos a realizar un doble click
btnColor.addEventListener('dblclick', () => {
    parrafo.style.color= "violet";
});

//Detectar cuando el mouse se acerca a un elemento 
btnIniciar.addEventListener('mouseover', () => {
    console.log('Hola!');
});

// Detectar cuando el mouse se aleja del elemento 
btnIniciar.addEventListener('mouseout', () => {
    console.log('Adiós!');
});

// Detectar cuando ingresamos a un input 
const recolectarDatos = document.getElementById('ingresoDato');
recolectarDatos.addEventListener('focus', () => {
    console.log('Estamos dentro del input');
});

// Detectar cuando dejamos el input 
recolectarDatos.addEventListener('blur', () => {
    console.log('Dejamos el input');
});

// Detectar cuando movemos el mouse/ratón
parrafo.addEventListener('mousemove', () => {
    console.log('Estamos pasando el ratón por encima del texto');
});

// Detectar cuando tocamos una tecla del ordenador
recolectarDatos.addEventListener('keyup', event => {
    console.log(`Presionamos la tecla: ${event.key}`);
});

// preventDefault();
const sitioWebAmazonOficial = document.getElementById('webAmazon');
sitioWebAmazonOficial.addEventListener('click', event => {
    event.preventDefault();
    console.log('Acabamos de realizar un click en el enlace y no me llevo a ningún lado');
});

// stopPropagation();
const contenedorBtnClick = document.getElementById('contenedorBoton');
const btnClick = document.getElementById('botonClick');

btnClick.addEventListener('click', event => {
    alert('Hiciste click al botón');
    event.stopPropagation();
});

contenedorBtnClick.addEventListener('click', () => {
    alert('Hiciste click al contenedor');
});

//EJERCICIO: dado un objeto en la constante libro, debemos mostrar el título en un h1, el autor en un h2 y el resto de los datos en párrafos dentro de un contenedor. 
const mostrarLibro = () => {

    const libro = {

        titulo: "JavaScript Avanzando",
        autor: "Rodrigo Suarez",
        anioPublicacion: 2023,
        cantidadDePaginas: 350 
    }

    document.getElementById('contenedorLibro').innerHTML = `
            <h1>Nombre del libro: ${libro.titulo} </h1>
            <h2>Autor: ${libro.autor} </h2>
            <p> Año de Publicación: ${libro.anioPublicacion} </p>
            <p> Cantidad de Páginas: ${libro.cantidadDePaginas}</p>
    `
};

mostrarLibro();
