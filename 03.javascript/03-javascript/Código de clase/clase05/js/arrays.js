'use strict';

// Hay varias formas de crear un array
// 1- Arrays Literales
const dias = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
console.log(dias);
console.log(dias.length); // 7 valores 

// 2- Constructor de Array
const numeros = new Array(20,40,55);
console.log(numeros);

//3- Operador de propagación 
const array1 = [1,2,3];
const array2 = [...array1, 20, 40]; // Crear una copia del array1
console.log(array1);
console.log(array2);

const array3 = [4,5,6];
const array4 = [...array1, ...array3]; // Unir los elementos del array1 y el array3 para que finalmente me muestre un array final de números.
console.log(array4); 

// 4- Método from()
const arraySaludo = Array.from("hola");
console.log(arraySaludo);

const arrayNumeros = Array.from([1,2,3]);
console.log(arrayNumeros);

// Crear un array vacío 
const datos = [];
console.log(datos);

// Sobreescribir un valor 
const productos = ["Tv", "Notebook", "Impresora", "Smartphone", "Aire Acondicionado", "Tablet"];
productos[2] = "Monitor";
console.log(productos);

// Agregar un valor al array conociendo su índice
productos[6] = "Cafetera";
console.log(productos);

// Agregar un valor a la primera posición 
productos.unshift("Licuadora");
console.log(productos);

// Agregar un valor a la última posición de manera automática
productos.push("Tostadora", "Audífonos");
console.log(productos);

// Eliminar el primer valor del array 
productos.shift();
console.log(productos);

// Eliminar el último valor del array 
productos.pop();
console.log(productos);

// Eliminar un valor X según su índice
delete productos[3]; // se generó un array disperso. Por ende quedó vacía. 
console.log(productos);

productos[3] = "Mouse"; // Ocupe el espacio vacío que tenía la posición 3
console.log(productos);

// Extraer un rango de valores 
const productosExtraidos = productos.slice(3,6); // posición 6 no inclusive
console.log(productosExtraidos);

// Modificar el último elemento del array
productos[productos.length-1] = "PS5";
console.log(productos);

//Iterar un array (bucles)

//1- For loop 
for(let i=0; i<productos.length; i++){
    console.log(productos[i]);
}
//2- for of
for ( let nombreProducto of productos ) {
    console.log(nombreProducto);
}

// EJERCICIO TAREA: crear un array con los siguientes números: 1200, 650, 70, 20, 900, 730, 150, 583, 710. Deberás mostrar los números mayores que 200 y menores que 800.