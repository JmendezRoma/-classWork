"use strict";

//functions

// Crear una funcion que permita obtener el 10% de un numero dado

function calcularPorcentaje(numero) {
    const porcentaje = 0.1;
    const resultado = numero * porcentaje;
    return resultado;
}

;
console.log(calcularPorcentaje(274510));
console.log(calcularPorcentaje(150));

// SCOPE(ambito de la variable)

//1er ejemplo
let nombre = "Raul"; //global scope

function saludo() {
    let nombre = "Juana"; // local scope
    return nombre;
}

console.log(saludo());
console.log(nombre);

//2do ejemplo

let apellido = "ramirez"; // si ya tiene un valor se conserva por el la ejecucion , pero si el log se hace despues de la funcion suplanta el valor de la variable
console.log(apellido);
function retornarVariableApellido() {
    apellido = "Sanchez"; // llama a la variable global no la declara
    return apellido; // retorna sanchez a la global
}

console.log(retornarVariableApellido());
console.log(apellido);
apellido = "silva";
console.log(apellido);

// PEDIR AL USUARIO UN NUMERO Y MOSTRAR EL CUADRADO DE ESE NUMERO

function guardarCuadrado() { // funcion anidada
    
const obtenerNumero = +prompt("inserta un numero: ");

function cuadrado(numero) {
    const resultado = numero * numero;
    return resultado;
}

console.log(cuadrado(obtenerNumero)); // obtener numero externo para la function

const resultadoFinalCuadrado = cuadrado(obtenerNumero); // guardar el return de la function
console.log(resultadoFinalCuadrado);

}

//guardarCuadrado();3


//FUNCION ANONIMA
//no tiene nombre y se guarda en una variable y se ejecuta con el nombre de la variable

const producto = function (nombreProducto) {
    return `el nombre del producto es : ${nombreProducto}`
}

console.log(producto("cafetera"));

//FUNCIONES ANIDADAS

//crear una pequeña calculadora pasando valores como argumentos

// solo podemos tener un return por funcion porque corta el proceso de ejecucion

function calcularOperacion(num1, num2) {//funcion padre
    
    function sumar() {// funcion hijo
        return num1 + num2;
    }

    function restar() {// funcion hijo
        return num1 - num2;
    }

    function multiplicar() {// funcion hijo
        return num1 * num2;
    }

    function dividir() {// funcion hijo
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Error: no puedes dividir por 0"
        }
    }

    const resultadoSuma = sumar();
    const resultadoResta = restar();
    const resultadoMultiplicar = multiplicar();
    const resultadoDividir = dividir();

    console.log(resultadoSuma);
    console.log(resultadoResta);
    console.log(resultadoMultiplicar);
    console.log(resultadoDividir);
};

calcularOperacion(50, 5);


// FUNCION FLECHA ARROW FUNCTION
//1a version

const saludarUsuario = () => {
    return "hola!";
}

console.log(saludarUsuario());

//2da version
// si se trabaja en una sola linea omitiendo llaves y return
const saludarUsuario2 = () => "hola";

console.log(saludarUsuario2());

//haremos un ejemplo de funcion flecha pasando un parametro 

//cuando solo tenemos un parametro no hace falta los parentesis
const electrodomestico = nombreElectrodomestico => `el nombre del electrodomestico es : ${nombreElectrodomestico}`

console.log(electrodomestico("sanduchera"));