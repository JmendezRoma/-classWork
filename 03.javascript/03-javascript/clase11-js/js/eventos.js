"use strict";

//EVENTOS

//Existen dos maneras de aplicar evenetos

//Metodo tradicional (asigna directamente una funcion)
//ESTE METODO NO SE USA

const btnEnviar = document.getElementById("botonEnviar");

btnEnviar.onclick = function () {
  console.log("acabas de realizar un click");
};

//Metodo actual

/**
 *  sintaxis:
 *          elemento.addEventListener("evento", callback);
 *
 *
 *
 */
const btnIniciar = document.getElementById("botonIniciar");

btnIniciar.addEventListener("click", () => {
  console.log("acabas de realizar un click sobre el button iniciar proceso");
});

//Agregar un color al parrafo
const parrafo = document.getElementById("texto");
const btnColor = document.getElementById("botonColor");

const cambiarColor = function () {
  parrafo.style.color = "blue";
};
btnColor.addEventListener("click", cambiarColor);

//Eliminar un evento , dos argumento evento y funcion a remover
btnColor.removeEventListener("click", cambiarColor);

//EVENT OBJECTS
const informacionClick = function (event) {
  console.log(event);
};

btnColor.addEventListener("click", informacionClick);

// Teniendo en cuenta los 3 botones creados html, css y js que estan en el index.html debemos acceder al elemento especifico al que se esta haciendo click

function mostrarMensaje(event) {
  //"event" palabra propia del lenguaje que detecta cualquiier evento y lo transforma en objeto

  const elemento = event.target.id; //apuntamos directamente al elemento especifico en el preciso momento en el que el usuario hace click al boton

  if (elemento === "botonHtml") {
    console.log("hiciste click sobre html");
  } else if (elemento === "botonCss") {
    console.log("hiciste click sobre Css");
  } else if (elemento === "botonJs") {
    console.log("hiciste click sobre JS");
  }
}

const btnLenguajes = document.querySelectorAll(".botonesLenguaje");

btnLenguajes.forEach((boton) => {
  boton.addEventListener("click", mostrarMensaje);
});

//vamos a realizar un doble click
btnColor.addEventListener("dblclick", () => {
  parrafo.style.color = "violet";
});

//detectar cuando el mando se acerca a un elemento
btnIniciar.addEventListener("mouseover", () => {
  console.log("hola");
});

//Detectar cuadno el raton se aleja del elemento
btnIniciar.addEventListener("mouseout", () => console.log("Adiossss"));

//detectar cuando ingresamos a un input
const recolectarDatos = document.getElementById("ingresoDato");
recolectarDatos.addEventListener("focus", () =>
  console.log("estamos dentro del inputu")
);

//detectar cuando dejamos el input
recolectarDatos.addEventListener("blur", () =>
  console.log("estamos fuera del inputu")
);

//detectar cuando movemos el raton
parrafo.addEventListener("mousemove", () =>
  console.log("estamos pasando el raton por encima del texto")
);

//Detectar cuando tocamos una tecla del ordnador
recolectarDatos.addEventListener("keyup", (event) =>
  console.log(`Presionamos la tecla: ${event.key}`)
);

//PREVENTDEFAULT();
const sitioWebAmazonOficial = document.getElementById("webAmazon");
sitioWebAmazonOficial.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("no me llevo a ningun lado");
});

//stopPropagation();
const contendorBtnClick = document.getElementById("contenedorBoton");
const btnClick = document.getElementById("botonClick");

btnClick.addEventListener("click", (event) => {
  alert("hiciste click al boton");
  event.stopPropagation();
});

contendorBtnClick.addEventListener("click", () => {
  alert("hiciste click al contendor");
});

//dado un objeto en la constante libro debemos mostrar el titutlo en un h1 el autor en h2 y el resto de los datos en parrafos dentro de un contenedor.
const mostrarLibro = () => {
  const libro = {
    titulo: "Javascript Avanzado",
    autor: "Rodrigo Suarez",
    anioPublicacion: 2023,
    cantidadDePaginas: 350,
  };

  document.getElementById("contenedorLibro").innerHTML = `
  <h1>Nombre del libro: ${libro.titulo} </h1>
  <h2>Auto: ${libro.autor} </h2>
  <p>Año: ${libro.anioPublicacion} </p>
  <p>Numero de paginas: ${libro.cantidadDePaginas} </p>

  `;
};

mostrarLibro();