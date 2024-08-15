'use strict';

// Más métodos de arrays
// Teniendo en cuenta el siguiente array, ordenar los valores de inicio a fin 

const letrasOrdenadas = ["x", "a", "y", "n", "z", "b"];
letrasOrdenadas.sort();
console.log(letrasOrdenadas);

const numerosOrdenados = [5,2,8,1,2300,20,15,12,8,-1];
numerosOrdenados.sort( (a,b) => a - b );
console.log(numerosOrdenados);

/*
    a --> representa el primer elemento a comparar
    b --> representa el segundo elemento a comparar

    return --> regresa un número negativo, cero o número positivo

        - Cuando el resultado es negativo, entonces a se coloca antes que b
        - Cuando el resultado es positivo, entonces b se coloca antes que a
        - Cuando el resultado es cero, a y b se mantienen en el mismo lugar

*/

// splice()
const colores = ["rojo", "verde", "azul", "naranja", "amarillo"];
colores.splice(3,0,"turquesa"); // splice(índice, eliminarValor, nuevoValorAgregado)
console.log(colores);

//includes() 
console.log(colores.includes("azul")); // true
console.log(colores.includes("beige")); // false

//indexOf()
console.log(colores.indexOf("naranja")); // posición 4

// Convertir un string en un array | split()
const nombreCompleto = "Martina Suárez";
const nombreArray = nombreCompleto.split(" ");
console.log(nombreArray);

// Convertir un array en un string | join()
const cadenaNumeros = numerosOrdenados.join(" | ");
console.log(cadenaNumeros);

//Invertir el orden de los elementos del array numerosOrdenados
numerosOrdenados.reverse();
console.log(numerosOrdenados);

// DESTRUCTURING EN ARRAYS
const numeros = [1,2,3,4,5];
const [primerNumero, segundoNumero, ...restoDeNumeros] = numeros;
console.log(primerNumero); // 1
console.log(segundoNumero); // 2
console.log(restoDeNumeros); // [3,4,5]
console.log(numeros); // array completo

//forEach()
// arrow function
numeros.forEach( (elementoNumero, indice, array) => {
    console.log(elementoNumero, indice, array);
});

//function
numeros.forEach(function(elementoNumero){
    console.log(elementoNumero);
});

//Ejercicio: dado el array de números deberemos utilizar el método forEach() para sumar 5 unidades a cada número de dicho array y luego mostrar el resultado. 
numeros.forEach( numero => {
    numero+=5;
    console.log(numero);
});

//some()
const nombres = ["Ana", "Juana", "Rodolfo", "Martín", "Elena"];
console.log(nombres.some(nombreUsuario => nombreUsuario === "Juana")); // true
console.log(nombres.some(nombreUsuario => nombreUsuario === "Marta")); // false

//every()
console.log(nombres.every(nombreUsuario => nombreUsuario.length>=4)); // false
console.log(nombres.every(nombreUsuario => nombreUsuario.length>=3)); // true

//filter()
// Dado el array de numeros lograr filtrar solos los números pares. 
const numerosPares = numeros.filter( numero => numero % 2 === 0 );
console.log(numerosPares); // [2,4]

// Dado el array de nombres lograr filtrar y mostrar a Elena. 
const filtrarNombres = nombres.filter(nombre => nombre === "Elena");
console.log(filtrarNombres);

//reduce()
//Teniendo en cuenta el array de numeros aplicar una función reductora para poder llegar a un solo valor. 
const resultadoSuma = numeros.reduce( (suma, numero) => suma + numero, 0 ); // 15
console.log(resultadoSuma);

//map()
//Teniendo en cuenta el array de números queremos lograr sacar y almacenar en otro array el cuadrado de ellos. 

//Resultado del ejercicio sin utilizar map()
const cuadrados = [];

for (let elementoNumero of numeros) {
    cuadrados.push(elementoNumero * elementoNumero);
}

console.log(cuadrados); // Obtenemos un nuevo array con los resultados
console.log(numeros); // Array original, no ha sido modificado

//Resultado del ejercicio utilizando map()
const obtenerCuadrados = numeros.map(elementoNumero => elementoNumero*elementoNumero);
console.log(obtenerCuadrados);
console.log(numeros); // Array original, no ha sido modificado