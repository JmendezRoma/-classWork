"use strict";

//los datos guardados en el localstorage son permanentes se pueden elimnar con codigo clear()
//sesionStorage() los datos solo son persistentes mientras la sesion este activa
//guardar datos
const guardarDatos = () => {
  localStorage.setItem("marcaCoche", "Ford"); //Aca asignamos clave y valor en formato string
  localStorage.setItem("anioFabriocacion", 2021);
};

//Pedir un dato mediante su clave

//si queremos mostrar simplemente el resultado

// const pedirValor = () => {
//     return localStorage.getItem('marcaCoche')
// }
// console.log(pedirValor());

//si queremos usar el resultado en otro sitio lo guardamos en una variable
let mostrarValor;
const pedirValor = () => {
  mostrarValor = localStorage.getItem("marcaCoche");
  return mostrarValor;
};
console.log(pedirValor());

//guardar un objeto literal
const guardarUsuario = () => {
  const usuario = {
    nombre: "Maria",
    email: "maria@hotmail.com",
    edad: 28,
  };

  localStorage.setItem("usuario1", JSON.stringify(usuario)); // stringify tranforma un objeto literal en un string
};

guardarUsuario();

//obtener el string guardado en el localstora y transformarlo a objeto literal
const obtenerObjetoLiteral = () => {
  const usuarioObjetoJs = JSON.parse(localStorage.getItem("usuario1"));
  console.log(usuarioObjetoJs);
};

obtenerObjetoLiteral();

//Eliminar un dato
const eliminarDato = () => {
  localStorage.removeItem("Ford");
};

eliminarDato();

//Elimnar todos los datos existentes
const eliminacioCompleta = () => {
  localStorage.clear();
};

eliminacioCompleta();
