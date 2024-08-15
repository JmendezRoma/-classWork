"use strict"

// const ob = {
//     name: "Jonathan",
//     age: 31,
//     sleeping: false
// };


// console.log(ob["name"], ob.name);

// ob.name = "Federico";
// console.log(ob.name);
// ob.pet = "perro";
// console.log(ob);

// if ("sleeping" in ob) {
//     console.log("si que esta la propiedad");
//     console.log("y vale :", ob.sleeping);
// }


// console.log(Object.keys(ob).length);
// console.log(Object.values(ob));
// console.log(Object.entries(ob));


// for(const key of Object.keys(ob)) {//eliminar las propiedad  del objeto forma complicada
//     delete ob[key];
// }

// console.log(ob);

// const priceList = new Map(); // no confidir metodo map del array // permite insertar cualquier tipo de dato

// console.log(priceList);

// //introducir datos  set= dame
// priceList.set("tomates", 2);
// priceList.set("manzanas", 1.5);
// priceList.set("Naranjas", 1.37);
// priceList.set([], "borrame")

// console.log(priceList);

// //distintas formas de inteactuar con las claves valor

// for(const item of priceList) {
//     console.log(`${item[0]} cuestan ${item[1]} $`);
// }

// for(const [price, value] of priceList) {
//     console.log(price, value);
// }


// for(const fruit of priceList.keys()) {
//     console.log(fruit);
   
// }

// for(const price of priceList.values()) {
//     console.log(price);
   
// }



// //extraer datos get = muestrame
// console.log(priceList.get("Tomates"));//da undefined

// const fruit = "Manzanas";


// //comprobar si exiten datos en el maps es con el metodo has
// if (priceList.has(fruit)) {
//     console.log(`Precio ${fruit} : ${priceList.get(fruit)}$`);
// }else {
//     console.log(`no hay Ahora mismo no tenemos ${fruit}`);
// }

// //borrar un dato del map
// priceList.delete("Narajas");

// console.log(priceList);

// //tamaño del map
// console.log(priceList.size);

// //resetar mapa
// priceList.clear()

// console.log(priceList);



//------------------------------------------------------------------//

//SETS son como los arrays pero los elementos no se pueden repetir super potentes no necesitan implemnetar logica de filtrado en los arrays

// const arr = ["berto", "lula", "telefono"];

// arr[3] = "federico";
// console.log(arr);

// console.log(arr.length);

const lista = new Set();



lista.add("berto");
lista.add("berta");

lista.add([0, 0, 0]);
lista.add([0, 0, 0]);

lista.delete("berto")



// if (lista.has("berto")) {
//     console.log("la lista contiene berto");
// }else {
//     console.log("no existe");
// }
console.log(lista);

// lista.clear();
// console.log(lista);

//pero si se pueden añadir dos arrays iguales porque lo permiten

//funcionan exactamente igual que un map


//recorrer las lista Set

for (const value of lista) {
    console.log(value);
}