'use strict';

// Crear una función que permita obtener el 10% de un número dado
function calcularPorcentaje(numero) {
    const porcentaje = 0.1;
    const resultado = numero*porcentaje; 
    return resultado;
}

console.log(calcularPorcentaje(150));
console.log(calcularPorcentaje(10));

// SCOPE (ambito)
// 1er ejemplo
let nombre = "Raúl"; // Global Scope

function saludo() {
    let nombre = "Juana"; // Local Scope
    return nombre;
}

console.log(saludo()); 
console.log(nombre);

//2do ejemplo
let apellido = "Ramírez"; 
console.log(apellido);
function retornarVariableApellido() {
    apellido = "Sánchez";
    return apellido;
}

console.log(retornarVariableApellido());
console.log(apellido);
apellido = "Silva";
console.log(apellido);

// Pedir al usuario un número y mostrar el cuadrado de ese número. 

function guardarCuadrado() {

    const obtenerNumero = +prompt("Inserta un número:");

    function cuadrado(numero) {

        const resultado = numero * numero;
        return resultado;
    }

    console.log(cuadrado(obtenerNumero)); 
    const resultadoFinalCuadrado = cuadrado(obtenerNumero);
    console.log(resultadoFinalCuadrado);

}

// guardarCuadrado();

// FUNCIÓN ANÓNIMA
const producto = function(nombreProducto) {
    return `El nombre del producto es: ${nombreProducto}`
}

console.log(producto("cafetera"));

// FUNCIONES ANIDADAS
// Crear una pequeña calculadora pasando valores como argumentos. 
function calcularOperacion(num1, num2) {
    

    function sumar() {
        let resultado = num1 + num2;
        return resultado;
    }

    function restar() {
        return num1 - num2;
    }

    function multiplicar() {
        return num1 * num2;
    }

    function dividir() {
       if(num2 !== 0){
            return num1 / num2;
       }
       else{
            return "Error: no puedes dividir un número por cero"
       }
    }


    const resultadoSuma = sumar();
    const resultadoResta = restar();
    const resultadoMultiplicacion = multiplicar();
    const resultadoDivision = dividir();

    console.log(resultadoSuma);
    console.log(resultadoResta);
    console.log(resultadoMultiplicacion);
    console.log(resultadoDivision);
};

calcularOperacion(12, 4);

// FUNCIÓN FLECHA (arrow function)
//1er versión
const saludarUsuario = () => { 
    return "Hola!";
}

console.log(saludarUsuario());

//2da versión
const saludarUsuario2 = () => "Hola!";


console.log(saludarUsuario2());

// Haremos un ejemplo de función flecha pasando un parámetro
const electrodomestico = nombreElectrodomestico => `El nombre del electrodoméstico es: ${nombreElectrodomestico}`;

console.log(electrodomestico("cafetera"));

