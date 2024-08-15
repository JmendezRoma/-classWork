// "use strict";

// //BUCLES

// //WHILE

// //mostrar todos los numeros del 0 al 20

// let count = 0;

// while (count <= 20) {
//     console.log(count);
//     // count++;
//     count+=3;
// }

// // quiero mostrar la suma de los numeros que iran desde el 1 hasta el 5 inclusive . Mostrar el resultado final de la suma.

// let num = 1;
// let sum = 0;
// while (num <= 5) {
//     sum = sum + num;// suma+=numero (forma mas corta de escribirlo)
//     num ++;
//     console.log(sum);// muestra todos lols resultados
// }

// console.log((`la suma es ${sum}`)); // muestra el resultado final porque esta por fuera de bucle 



// //DO WHILE // es al reves , aunque sea una vez se ejecuta y depsues se comprueba la condicion

// //mostrar todos los numeros del 0 añ 20
// let aux = 0;

// do {
//     console.log(aux);
//     aux++;

// } while (aux <= 20);

// //FOR (para)

// //mostrar todos los numeros del 0 añ 20

// //iterar dar vueltas en el bucle

// /**
//  * for(se declara una variable iteradora;la condicion; incremento/decremento) {
//  * 
//  * }
//  */

// for (let i=0; i <= 20; i++) {
//     console.log(i);
// }//i dentro del bucle es de ambito local si estuviera fuera seria global a todo el documento


// quiero mostrar la suma de los numeros que iran desde el 1 hasta el 5 inclusive . Mostrar el resultado final de la suma.

let sum = 0;

for(let num = 1; num <= 5; num++) {
    sum+= num
}
console.log(`la suma de los numeros utilizando bucle for ${sum}`);

//Uso del break en un bucle for

//buscando el primer numero par en una secuencia de numeros enteros.La secuencia ira del 1 al 6

let numeroParEncontrado = null; //esta vacia , si pusieramos un 0 seria para operar con esa variable y no guardar nada

for(let i = 1; i <= 6; i++) {

    if (i % 2 === 0) {
        numeroParEncontrado = i;
        break;
    }

}
console.log(`El primer numero par encontrado es : ${numeroParEncontrado}`);

//uso del continue en un bucle for

//mostrar todos los numeros del 1 al 10 menos el 4

for(let i = 1; i <= 10; i++) {

    if (i === 4) {
        numeroParEncontrado = i;
        continue; //salta la iteracion cuando i es igual a 4
    }
    console.log(i);
}

//Crear un patron visual de una escalera con asteriscos. Habra 5 escalones en total.

let escalonesAsteriscos = 5;

for(let i=1; i <= escalonesAsteriscos; i++) {
    let escalon = "*".repeat(i);
    console.log(escalon);

}

//CASOS ESPECIALES DE COERCION DE JS

console.log(1+2+"3");
console.log("4"+5+6);
console.log("9" - 9);
console.log(10 - "10");
console.log(11+"12"-13);
console.log("1"*2);
console.log("4"/2);
console.log("6"*"6");
console.log(true+true+true);
const num = 20 - "x";
console.log(num);//NaN