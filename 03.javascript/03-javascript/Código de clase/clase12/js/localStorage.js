'use strict';

// Guardar datos 
const guardarDatos = () => {
    localStorage.setItem('marcaCoche','Ford'); // Acá asignamos clave y valor en formato de string
    localStorage.setItem('anioFabricacion',2021);
}

guardarDatos();

// Pedir un dato mediante su clave
// let mostrarValor;

// const pedirValor = () => {
    
//     mostrarValor = localStorage.getItem('marcaCoche');
//     return mostrarValor;
// }

// console.log(pedirValor());

const pedirValor = () => {
    return localStorage.getItem('marcaCoche');
}

console.log(pedirValor());

// Guardar un Objeto Literal 
const guardarUsuario = () => {

    const usuario = {
        nombre: 'María',
        email: 'maria@outlook.com',
        edad: 28
    }

    localStorage.setItem('usuario1', JSON.stringify(usuario));

}

guardarUsuario();

// Obtener el string guardado en el localstorage y transformarlo a objeto literal
const obtenerObjetoLiteral = () => {

    const usuarioObjetoJS =  JSON.parse(localStorage.getItem('usuario1'));
    console.log(usuarioObjetoJS);

};

obtenerObjetoLiteral();

// Eliminar un dato

const eliminarDato = () => {
    localStorage.removeItem('Ford');
}

eliminarDato();

// Eliminar todos los datos existentes 

const eliminacionCompleta = () => {
    localStorage.clear();
}
eliminacionCompleta();