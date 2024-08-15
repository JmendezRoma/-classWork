"use stritct";

//ARRAYS

//indice = posision dentro del array

// hay varias formas de crear un array

//arrays literales
const dias = ["lun", "mart", "mier", "juev", "vier", "sab", "domin"];

console.log(dias);
console.log(dias.length);

//Constructor de arrays

const numeros =  new Array(20, 30, 50);// paso los numeros que quiera cargar
console.log(numeros);

//Operador Spread (propagacion)

const array1 = [1,2,3];
const array2 = [...array1, 20, 40];//crear una copia del array1 y que se guarde en array2

const array3 = [4,5,6];
const array4 = [...array1, ...array3];// unir array1 y array3

console.log(array4);

//Metodo from()   sirve para crear un nuevo array a partir de un objeto iterable, Se trabaja con string
const arraySaludo = Array.from("holaqtal");
console.log(arraySaludo);

const arrayNumeros = Array.from([1,2,3,4]) // no se pueden añadir numeros directamente tenemos que integrarlos como un array en si mismos
console.log(arrayNumeros);

//Crear un array vacio
const datos =[];

// sobreescribir un valor

const productos = ["Tv", "iphone", "pc", "aire acondicionado", "android"]
productos[2] = "monitor";
console.log(productos);

//agregar un valor al array conociendo su indice
productos[6] = "cafetera"
console.log(productos);

//agregar un valor a la primera posicion
productos.unshift("licuadora")
console.log(productos);

//agregar un valor a la ultima posicion de manera automatica
productos.push("ovni", "alien")
console.log(productos);

//eliminar el primer valor
productos.shift();
console.log(productos);

//eliminar el ultimo
productos.pop();
console.log(productos);

//eliminar un valor x segun su indice ,,, no puedes eliminar el indice de un array siempre va a quedar vacio a menos de que crees otro array nuevo
delete productos[3]; //genera un array disperso (cuando los indices del array no son contiguos)
console.log(productos);

//Extrar un rango de valores  el ultimo indice no esta incluido

const productosExtraidos = productos.slice(3,6);
console.log(productosExtraidos);

//Modificar el ultimo elemento del array
productos[productos.length -1] = "PS5"
console.log(productos);

//ITERAR UN ARRAY (BUCLES)

//for
for(let i = 0; i < productos.length; i++) {
    console.log(productos[i]);
}

//for of 
for(let producto of productos){
    console.log(producto);
}

/**
 * 
 * // EJERCICIO TAREA: crear un array con los siguientes números: 1200, 650, 70, 20, 900, 730, 150, 583, 710. Deberás mostrar los números mayores que 200 y menores que 800.
 * 
 */

const numbers = [1200, 650, 70, 20, 900, 730, 150, 583, 710]

for(let number of numbers) {
    number >= 200 && number <= 800 ? console.log(`Elemento del array: ${number}`):0;
}

