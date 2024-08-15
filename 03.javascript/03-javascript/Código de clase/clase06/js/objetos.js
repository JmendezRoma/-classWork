'use strict';

const usuario = { 
    nombre: "Juan",
    apellido: "Alonso",
    edad: 30,
    email: "juancito@gmail.com",
    cualidades: ["responsable", "atento"],
    registrar: function(){
        // alert(`${usuario.nombre} te registraste con éxito!`);
        alert(`${this.nombre} te registraste con éxito!`);
    }
}

console.log(usuario); // vemos el objeto completo
// usuario.registrar(); // ejecutamos la función

// Mostrar el valor "Alonso" por consola
console.log(usuario.apellido); // dot notation
console.log(usuario["apellido"]); //Bracket notation

//Cambiar el valor de la clave edad por otro valor
usuario.edad = 34;
console.log(usuario);

//Agregarle al usuario su ciudad de origen
usuario.ciudad = "Madrid";
console.log(usuario);

// Eliminar la clave email 
delete usuario.email;
console.log(usuario);

// ITERAR UN OBJETO 
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2023,
    color: "negro"
}

for (const claveCoche in coche) {
    console.log(coche[claveCoche]);
}

//DESTRUCTURING DE OBJETOS 
const producto = {
    nombre: "iPad",
    marca: "Apple",
    precio: 1200,
    stock: 10
}

const {nombre, marca, precio, stock} = producto;
console.log(nombre);
console.log(marca);
console.log(precio);
console.log(stock);

//SPREAD OPERATOR

//Crear una copia del objeto producto
const copiaProducto = {...producto};
console.log(copiaProducto);

//Modifica la copia recién creada
copiaProducto.precio = 900;
console.log(copiaProducto);