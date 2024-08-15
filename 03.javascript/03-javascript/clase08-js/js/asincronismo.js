" use strict";


//hasta ahora hemos programado de manera sincronica

// ahora lo haremos de manera asincronica y para ello se usan callbacks

/**Tambien se usan metodos propios
 *
 * setTimeout --> no es repetitivo
 *  sintaxis:
 *
 *          setTimeout(callback,delay);
 *
 * serInterval--> es similar a un bucle pero no es lo mismo
 *
 *
 *
 *
 */

// //1er ejemplo
// setTimeout(function() {
//     console.log("Hola");
// }, 3000);


// //2do ejemplo callback
// const ejecutarEn2Seg = callback => {
//     setTimeout(callback,2000);
// }

// const mensaje = () => { //funcion callback ;es una variable que es usada como argumento para otra funcion
//      console.log("han pasado 2 segundos");
// }

// ejecutarEn2Seg(mensaje);


//setInterval
//1er ejemplo
// const intervaloPrueba = setInterval(() => {
//     console.log("Estoy probando el intervalo");
//     clearInterval(intervaloPrueba); //sirve para parar el intervalo
// }, 4000);

// //2do ejemplo es un closure
let intervaloDeTiempo;    
const cuentaRegresiva = () => {
    let segundos = 10;
    const tiempoAgotado = () => {
        
        
        if (segundos === 0) { //si el contador llega a 0 imprime en consola el mensaje
            console.log("El tiempo se ha agotado");
            clearInterval(intervaloDeTiempo);// Finaliza el intervalo una vez acaba la cuenta 
        } else{
            console.log(segundos);// si no es === 0 muestra 0 y resta 1 a variable segundos
            segundos--;
        }
    } 
    return tiempoAgotado;
};



  const actualizarCuentaRegresiva = cuentaRegresiva();
  // TAREA: agregar a la función cuentaRegresiva un setTimeout para que espere 5 segundos y luego se ejecute.
  setTimeout(() => intervaloDeTiempo=setInterval(actualizarCuentaRegresiva,1000), 5000 )



  

//   const cuentaRegresiva = () => {
//     let segundos = 10;
//     let esperarCincoSegundos = true;
//     let started = false;
//     const tiempoAgotado = () => {
//       started = true;
//       if (segundos === 0) {
//         console.log("El tiempo se ha agotado!");
//         clearInterval(intervaloDeTiempo);
//       } else {
//         console.log(segundos);
//         segundos--;
//       }
//     };
//     const tiempoAgotadoConDelay = () => {
//       if (esperarCincoSegundos) {
//         esperarCincoSegundos = false;
//         setTimeout(tiempoAgotado, 5000);
//       } else {
//         if (started) tiempoAgotado();
//       }
//     };
//     return tiempoAgotadoConDelay;
//   };
//   const actualizarCuentaRegresiva = cuentaRegresiva();
//   console.log(actualizarCuentaRegresiva);
//   const intervaloDeTiempo = setInterval(actualizarCuentaRegresiva, 1000);
//  





// const iniciarCuentaRegresiva = () => {
//     const actualizarCuentaRegresiva = cuentaRegresiva();
//     intervaloTiempo = setInterval(actualizarCuentaRegresiva, 1000)
//     //return intervaloTiempo;
// };
// let intervaloTiempo; 
// setTimeout(iniciarCuentaRegresiva, 5000);




    // const actualizarCuentaRegresiva = cuentaRegresiva();  
    // setTimeout(actualizarCuentaRegresiva, 5000)
    // const intervaloDeTiempo = setInterval(actualizarCuentaRegresiva, 1000);
  
    


// const ejecutarLoading = (callback) => {
//     setTimeout(callback,5000)

// }
// const mensaje2 = () => {
//     console.log("cargando");

// }
// ejecutarLoading(mensaje2)



//TAREA CON ESTE EJERCICIO ; AGREGAR A LA FUNCION CUENTAREGRESIVA UN SETTIMEOUT PARA QUE ESPERE 5 SEGUNDOS Y LUEGO SE EJECUTE