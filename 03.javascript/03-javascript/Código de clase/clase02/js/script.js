'use strict';

// Objeto Math
console.log(Math.pow(2,3));
console.log(Math.round(1.5));
console.log(Math.ceil(2.1));
console.log(Math.floor(5.2));
console.log(Math.abs(-10.4));
console.log(Math.max(200, 100, 300));
console.log(Math.min(50, 25, 90, 10));
console.log(Math.random()); // Muestra valores de 0 a 1 no inclusive

// EJERCICIO: Mostrar los números aleatorios entre 5 y 10
const min = 5;
const max = 10;
const numeroAleatorio =  Math.floor( Math.random()*(max-min+1) + min);
console.log(numeroAleatorio);



/*

    - Generar número aleatorio entre [5, 10] usamos el Math.random() --> [0, 1)
    - (max - min + 1) --> el resultado es 6 para definir la cantidad total de números que hay entre [5, 10]
    - Math.random()*6 --> [0, 6)
    - [0,6) + min --> [5, 11)
    - Finalizamos teniendo en cuenta el redondeo hacia abajo con Math.floor()

*/

// OPERADORES 
//Operadores Aritméticos: suma, resta, división, multiplicación, exponente, módulo, incremento, decremento

//exponente
const numeroElevado = 3 ** 3;
console.log(numeroElevado);

//módulo
const obtenerModulo = 10 % 3;
console.log(obtenerModulo);

// Incremento
// post incremento
let i = 0;
console.log(i);
i++; // i = i+1;
console.log(i);
i++;
console.log(i);
i = i+2; // i+=2;
console.log(i);
i+=3;
console.log(i);

// pre incremento
++i;
console.log(i);

// Decremento
// post decremento
i--;
console.log(i);

// pre decremento
--i;
console.log(i);

/* Operadores de comparación

        mayor que   --> 100 > 10
        menor que   --> 10 < 100
        mayor igual --> 200 >= 200
        menor igual --> 120 <= 100 
        igual que   --> 20 == 20
        totalmente igual --> 30 === 40
        distinto de --> 50 != 20

    
    Operadores Lógicos

    && --> and 
    || --> or 
    !  --> not 

*/

// Quiero saber que me va a devolver la siguiente expresión
const x = 32;
const y = "a";

console.log( y === "b" || x >= 32);
//  false || true
//  true

// CONDICIONALES
// if else

//Detectar si un número dado es par o impar 
const numero = 10;
if (numero % 2 === 0) {
    console.log("El número dado es par");
} else {
    console.log("El número dado es impar");
}

// if else: anidación 
// Tener en cuenta que para conducir un coche, debemos cumplir con dos cosas, por un lado ser mayor de 18 años o igual y también se debe tener el carnet de conducir. Caso contrario que no se cumpla estos requerimientos, entonces la persona no puede conducir. 

const edad = 17;
const carnetConducir = true;

if (edad >= 18) {
    console.log("La persona es mayor de edad y podría tener la posibilidad de conducir un coche");

    if (carnetConducir) {
        console.log("La persona tiene el carnet vigente por ende puede conducir un coche");
    } else {
        console.log("La persona no tiene el carnet por ende no puede conducir un coche");
    }


} else {
    console.log("La persona es menor de edad. Por ende no puede obtener el carnet de conducir");
}

// if , else if , else
// Dado un número se deberá detectar si el número es positivo, negativo o si es un dato incorrecto deberemos informarlo.  

// const num = +prompt("Ingresa un número");

// if (num > 0) {
//     console.log("El número ingresado es positivo");
// } 

// else if(num < 0){
//     console.log("El número ingresado es negativo");
// }

// else if(num === 0){
//     console.log("El número ingresado es un cero, por ende es neutro");
// }

// else {
//     console.log("El valor ingresado no es un número válido");
// }

// Operador ternario (es igual al if else pero más simplificado)
//Detectar si un número dado es par o impar 

/* A tener en cuenta 
    - el signo de pregunta ? equivale a decir "if"
    - el signo de los dos puntos : equivale a decir "else"


*/
const n = 20;
const parImpar = n % 2 === 0 ? "El número ingresado es par" : "El número ingresado es impar";
console.log(parImpar);

// Switch
// Recrear el accionar de un semáforo 
const colorSemaforo = "negro";
let accion = null;

switch (colorSemaforo) {

    case "verde":
        accion = "Podés avanzar con tu coche";
        break;
    
    case "amarillo":
        accion = "Tene precaución!";
        break;

    case "rojo":
        accion = "No podés avanzar con tu coche. Frena!";
        break;

    default:
        accion = "Estado del semáforo no valido";
        break;
}

console.log(accion);


// EXTRA: tener un if else y un operador ternario dentro del if 
const edadUsuario = 20;
const carnetConducirUsuario = true;

if (edadUsuario >= 18) {
    
    console.log("La persona es mayor de edad y podría tener la posibilidad de conducir un coche");

   const verificacionCarnet = carnetConducirUsuario 
        ? "La persona tiene el carnet vigente por ende puede conducir un coche" 
        : "La persona no tiene el carnet vigente por ende no puede conducir un coche";
        console.log(verificacionCarnet);
} else {
    console.log("La persona es menor de edad. Por ende no puede obtener el carnet de conducir");
}

