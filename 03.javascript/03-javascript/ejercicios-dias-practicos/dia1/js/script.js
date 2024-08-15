'use strict';

/* Ejercicio 1 */
/* Imprimir por consola por los 3 metodos vistos en clase:
  * pasando parametros
  * concatenando strings
  * usando template strings 

  "El usuario Luis tiene 40 años"
  El nombre del usuario y la edad deben ser variables
*/


// /* Crea las variables */
// const nombre = "Luis";
// const edad = 40;

// /* Pasando parametros */
// console.log("El usuario",nombre, "tiene",edad,"años");

// /* Concatenando strings */
// console.log("El usuario" +  nombre + "tiene" + edad + "años");

// /* Usando template strings */
// console.log(`El usuario ${nombre} tiene ${edad} años`);

// /* Ejercicio 2 */
// /* Escribe un string que tenga en su interior comillas dobles y alrededor simple. Muéstralo en la consola. Haz lo mismo con las comillas al reves*/
// console.log('hola "que" tal');
// console.log("hola 'que' tal");

/* Ejercicio 3 */
// /* Escribe al menos dos líneas de texto con un salto de línea de javascript en un string */
// console.log("hola que tal somos: \n Jonathan \n Pedro \n Pedro");

/* Ejercicio 4 (metodos de string) */
/* Realiza un script que pida un texto y lo muestre en mayúsculas */

//  let t = prompt("escribe un texto");
//  let mayus = t.toUpperCase();
//  console.log(mayus);

/* Ejericio 5 */
/* Escribir un script que diga si un número es par o es impar. */

// let numero = +prompt("escribe un numero");
// if (numero % 2 === 0) {
//     console.log("El número dado es par");
// } else {
//     console.log("El número dado es impar");

// }

/* Ejericio 6 */
/* Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo */

// let numUsuario = +prompt("Escribe numero")
// if (numUsuario >= 0) {
//   console.log("positivo");
// } else {
//   console.log("negativo");
// }


/* Ejericio 7 */
/* Pedir al usuario que elija un numero entre 1 y 4 a ver si acierta el numero que ha elegido la maquina.
Si el usuario introduce mas de 3 veces un número inválido se cerrará el juego.
Si el usuario falla se le dirá cuantos fallos lleva. */
// const min = 1;
// const max =4;
// let intentosInvalido = 0;
// let fallos = 0;
// let numeroElegido;
// const numeroMaquina = Math.floor(Math.random() * (max - min + 1) + min);

// do {

//   numeroElegido = parseInt(prompt("introduce un numero entre 4 y 1"));
//   if (isNaN(numeroElegido) || numeroElegido < min || numeroElegido > max){
//     intentosInvalido++;
//     alert("dato invalido");
//     if (intentosInvalido === 3) {
//       alert("demasiados intentos, end game");
//       break;
//     }
//   }else if(numeroElegido !== numeroMaquina){
//     fallos++;
//     alert(`fallaste, llevas ${fallos} ${fallos > 1 ? "fallos": "fallo"}`);
//   }
// } while (numeroElegido !== numeroMaquina);

// if (numeroElegido === numeroMaquina) {
//   alert("acertasteeeeeeee")
// }




// let numUsuario = parseInt(prompt("escribe un numero"));
// const min = 1;
// const max = 4;
// const minMax = Math.floor(Math.random() * (max - min + 1) + min);

// if (isNaN(numUsuario) || numUsuario < 1 || numUsuario > 4 ) {
//     console.log("El numero es invalido");
// } else {
//   if (numUsuario === minMax) {
//     console.log("ha acertado");
//   } else {
//     console.log("no ha acertado");
//   }
// }


/* Ejericio 8 */
/* En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua

Si no elije el menú de la lista aparecerá la frase 'Elija carne, pescado o verdura'. */


// const carne = "carne";
// const pescado = "pescado";
// const verdura = "verdura";

// let answer = prompt(`escribe el menu: ${carne}  , ${pescado} o ${verdura}`).toLocaleLowerCase();

// switch (answer) {
//   case carne:
//     console.log("vino tinto");
//     break;
//   case pescado:
//     console.log("vino blanco");
//     break;
//   case verdura:
//     console.log("agua");
//     break;

//   default:
//     console.log("ERROR elija carne, pescado o verdura");
//     break;
// }

/* Ejericio 9 */
/* En una sala de juegos existen cuatro salas: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual. Si un usuario paga  4 créditos puede acceder a todas, si paga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala. Imprime una frase que indique el nombre de las salas a las que puede acceder el usuario. */

// const usuario = parseInt(prompt("inserte creditos"));
// if (usuario > 4 || usuario < 0 || usuario === " " ) {
//   console.log("no ha introducido el credito correcto");
// } else {
  
// }

// let salas = " salas: ";
// const creditos = 1;

// switch (creditos) {
//   case 4:
//     salas += "consolas ,";
//   case 3:
//     salas += "juegos 2d, ";
//   case 2:
//     salas += "jeugos 3d, ";
//   case 1:
//     salas += "realidad virtual";
//     break;
//   default:
//   salas = " no puede acceder"
//   break;
// }

// console.log(salas);



/* Ejericio 10 */
/* Haz una cuenta de 0 a 10 y otra de 10 a 0. */

let minNum = 0;

for(minNum; minNum <= 10; minNum++) {
 console.log(minNum);
 if (minNum === 10) {
    for(let i = 9; i >= 0; i--) {
      console.log(i);
    }
 }
 }


/* Ejericio 11 */
/* Pidele un número al usuario y muestra todos los números pares desde 0 hasta ese número. */

// let numberUser = parseInt(prompt("Insert a number and recive a pares numbers from 0 to this number"));

// for(let i = 0; i <= numberUser; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }





/* Ejericio 12 */
/* Dado un numero entero, mostrar su tabla de multiplicar. */

// let tableMultiUser = parseInt(prompt("ingresa el numero para obtener la tabla de multiplicar"));

// for(let i = 0; i <= 10; i++) {
//   let table = i * tableMultiUser;
//   if (i === 0) {
//     console.log(`La tabla de multiplicar de ${tableMultiUser} es: `) ;
//   }
//   else{
//     console.log("inserta un numero por");
//   }
//   console.log(`${tableMultiUser} x ${i} = ${table}`);
// }


/* Ejericio 13 */
/* Indicar un numero entero de 4 cifras y realizar el desglose del mismo por dígitos, es decir mostrar millares, centenas, decenas, etc. si el numero es 1234, debes mostrar 1000, 200, 30 y 4.*/

const numero = "1234";
const size = numero.length;

for(let i = 0; i < size; i++) {
  const cifra = numero[i];
  console.log(cifra * 10 ** (size - i - 1));
}



