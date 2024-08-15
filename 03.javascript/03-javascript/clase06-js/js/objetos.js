"use strict"

//  OBJETOS ES UNA COLECCION QUE TIENE PROPIEDADES Y VALORES
//es una variable que tiene muchas propiedades dentro 
//imitan al mundo real 
//tener en cuenta que cada propiedad tiene un valor/clave
//no existen los indices como en los arrays
//solo se accede por su clave/valor
//integran todos los tipos de datos

const usuario = {
    nombre: "Juan",
    apellido: "Alonso",
    edad: 30,
    email: "juanchito@gmai.com",
    caulidades: ["responsable", "atento"],
    registrar: function () {
        // alert(`${usuario.nombre} te registraste con exito`);
        alert(`${this.nombre} te registraste con exito`);
    }
}

console.log(usuario);// vemos el objeto completo
//usuario.registrar();//llamar a la funcion registar dentro del objeto usuario

//EJERCICIO mostrar el valor "Alonso" por consola
console.log(usuario.apellido); //dot notation punto para ingresar a clave
console.log(usuario["apellido"]);//bracket notation

//Cambiar el valor de la clave edad por otro valor
usuario.edad = 32;
console.log(usuario);

//agregar al usuario su ciudad origen
usuario.ciudad = "Madrid";
console.log(usuario);

//eliminar clave email
delete usuario.email;
console.log(usuario);

// ITERAR UN OBJETO

const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2023,
    color: "negro"
}

// for (in) {} bucle para iterar objeto es igual que el for of

for (const claveCoche in coche) {
    console.log(coche[claveCoche]);
}

//DESTRUCTURING DE OBJETOS
const producto = {
    nombre: "ipad",
    marca: "Apple",
    precio: "1200",
    stock :10
}

const {nombre, marca, precio, stock} = producto;
console.log(nombre);
console.log(marca);
console.log(precio);
console.log(stock);

//SPREAD OPERATOR
//quiero crear una copia del objeto producto
const copiaProducto = {...producto}
console.log(copiaProducto);

//modifica la copia
copiaProducto.precio = 900;
console.log(copiaProducto);