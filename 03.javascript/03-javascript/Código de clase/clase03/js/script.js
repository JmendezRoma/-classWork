'use strict';

// BUCLES
//1. Bucle while (mientras)

//Mostrar todos los números del 0 al 20 
let contador = 0; // 21

while (contador <= 20) {
    console.log(contador);
    // contador++;
    contador+=2;
}

// Quiero mostrar la suma de los números que irán desde el 1 hasta el 5 inclusive. Mostrar el resultado final de la suma. 
let numero = 1; // 6
let suma = 0; // 10

while (numero <= 5) {
        //  10 + 5 = 15
    // suma = suma + numero;
    suma+=numero;
    numero++;
    
}

console.log(`La suma de los números del 1 al 5 es: ${suma}`);

//2. Bucle Do While
// Mostrar todos los números del 0 al 20 
let auxiliar = 0;

do {
    console.log(auxiliar);
    auxiliar++;

} while (auxiliar <= 20);

//3. Bucle For (para)
/*

    for(se declara una variable iteradora; la condición; incremento/decremento ) {
        aquí tendremos el código a ejecutar una y otra vez
    }

*/

// Mostrar todos los números del 0 al 20 
for(let i=0; i<=20; i++) {
    console.log(i);
}

// Quiero mostrar la suma de los números que irán desde el 1 hasta el 5 inclusive. Mostrar el resultado final de la suma. Para este ejercicio se utilizará el bucle for
let sumandoNumeros = 0;

for(let i=1; i<=5; i++){
    // sumandoNumeros = sumandoNumeros +i;
    sumandoNumeros+=i;
}

console.log(`La suma de los números entre 1 y 5 inclusive utilizando el bucle for es: ${sumandoNumeros}`);

// Uso del break en un bucle for
// Buscando el primer número par en una secuencia de números enteros. La secuencia irá del 1 al 6

let numeroParEncontrado = null;

for(let i=1; i<=6; i++){

    if(i % 2 === 0){
        numeroParEncontrado = i; // 2
        break;
    }

}

console.log(`El primer número par encontrado es: ${numeroParEncontrado}`);

// Uso del continue en un bucle for
// Mostrar todos los números del 1 al 10 , menos el número 4
for(let i=1; i<=10;i++){

    if(i === 4){
        continue; //Salta la iteración cuando i es igual a 4
    }

    console.log(i);
}

// Crear un patrón visual de una escalera con asteriscos. Habrá 5 escalones en total. 

let escalonesAsteriscos = 5;

for(let i=1; i <= escalonesAsteriscos; i++){
    let escalon = '*'.repeat(i);
    console.log(escalon);
}

// CASOS ESPECIALES DE COERCIÓN DE JS
console.log(1+2+"3"); // "33" 
console.log("4"+5+6); // "456"
console.log("9" - 9); // 0 
console.log(10 - "10"); // 0
console.log(11 + "12" - 13); // 1099
console.log("1" * 2); // 2
console.log("4" / 2); // 2
console.log("6" * "6"); // 36
console.log(true+true); // 1+1= 2
console.log(true+false); // 1+0 = 1
console.log(false+false); // 0+0 = 0
const num = 20 - "x";
console.log(num); // NaN

