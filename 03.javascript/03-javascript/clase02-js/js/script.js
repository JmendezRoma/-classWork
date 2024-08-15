"use strict";

//OBJETO MATH

// console.log(Math.pow(2,3));//potencia
// console.log(Math.round(1.6));// entero mas cercano
// console.log(Math.ceil(2.1)); //redondea a un entero mayor o igual
// console.log(Math.floor(5.2));// saca la parte decimal
// console.log(Math.abs(-10));// valor absoluto
// console.log(Math.max(200, 100, 300)); //saca el numero maximo entre los numeros que le digas
// console.log(Math.min(50, 25, 90));// saca el valor minimo
// console.log(Math.random()); // numeros aleatorios de 0 a 1 no inclusive, NO COJE ARGUMENTOS

//EJERCICIO: MOSTRAR LOS NUMEROS ALEATORIOS ENTRE 5 Y 10

const min = 10000;
const max = 100000;

const resultAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
console.log(resultAleatorio);


//OPERADORES: 

//OPERADORES ARITMETICOS :suma , resta, division, multiplicacion, exponente, modulo,
//incremento, decremento

//exponente
const numeroElevado = 3 ** 3;
console.log(numeroElevado);

//modulo = resto de la division
const obtenerModulo = 10 % 3;
console.log(obtenerModulo);

//incremento
//post incremento ( let numero = 10;  --> numero++ --> 10  --> numero --> 11)
let incremento = 0;
incremento++; // incremento = incremento + 1;
console.log(incremento);
incremento++;
console.log(incremento);

incremento=incremento+2;
console.log(incremento);

incremento+=3;
console.log(incremento);

// pre incremento se incrementa la variable al instante
++incremento
console.log(incremento);

//DECREMENTO
//post decremento
incremento--;
console.log(incremento);
//pre decremento
--incremento;
console.log(incremento);



//OPERADORES DE COMPARACION:

/**
 * mayor que --> 100 > 10;
 * menor que --> 10 < 100;
 * mayor igual --> 200 >= 200;
 * menor igual --> 120 <= 100;
 * igual que --> 20 == 20; valor real no en tipo de dato
 * totalmente igual --> 30 === 40; valor real y en el tipo de dato
 * distinto que --> 50 != 20;
 */

//OPERADORES LOGICOS

/**
 * && --> and si una es true el resultado es true
 * || --> or mientras una sea true el resultado es true
 * ! --> not (!true--> false // !!true --> true) da vuelta al resultado
 */



//CONDICIONALES

//if else

//detectar si un numero dado es par o impar

const numero = 10;

if (numero % 2 === 0) {
    console.log("par");
} else {
    console.log("impar");
}

//anidacion

//tener en cuenta que para conducir un coche debemos cumplir con:
//ser mayor de edad y tambien tener el carnet de conducir.
//sino no no puede conducir

const edad = 18;
const carnet = true;

if (edad >= 18) {
    console.log("la persona es mayor de edad y podria conducir");
    if (carnet) {
        console.log("puede conducir porque tiene el carnet");
    } else {
        console.log("no puede conducir porque no tiene carnet");
    }
} else {
    console.log("no puede conducir por la edad");
}

//if, else if, else (estan separadas no depende una de la otra como la anterior)

// EJERCICIO: dado un numero se debera detectar si el numero es positivo
//negativo o si es un dato incorrecto

// const num = +prompt("ingresa un numero");

// if (num  > 0) {
//     console.log("es positivo");
// } 

// else if(num < 0) {
//     console.log("es negativo");
// }
// else if (num === 0) {
//     console.log("es un cero tolete, es neutro");
// }

// else {
//     console.log("no es un numero valido");
// }


//OPERADOR TERNARIO (ES IGUAL AL IF ELSE IF PERO MAS SIMPLIFICADO PERO NO FUNCIONA PARA IF ANIDADO)
//detectar si un numero dado es par o impar
// se pueden usar dentro de un if  pero no desde un ternario meter un if
// ? es igual a un if , : es igual a un else

const n = 10;
const parImpar = n % 2 ===0 ? "El numero ingresado es par" :  "el numero ingresado es impar";
console.log(parImpar);



//SWITCH   la ventaja que tiene es que se pueden condicionar numerosos casos
//recrear el accionar de un semaforo
const colorSemaforo = "rojo";
let accion = null;


switch (colorSemaforo) {
    case "verde":
        accion = "puedes avanzar con tu coche";
        break;
    case "amarillo":
        accion = "con precaucion";
        break;
    case "rojo":
        accion = "tate quieto";
        break;

    default:
        accion = "roto"
        break;
}

console.log(accion);