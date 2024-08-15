//Interface FormData : nos permite crear objetos que van a representar a los campos del formulario y de este modo nos permite obtener los datos ingresados por el usuario para luego estos mismos datos enviarlos al seervidor de una manera lo mas facil posible. Se suele usar con fetch


const miFormulario = document.getElementById('miFormulario');
//una vez que se envia se ejecuta una funcion
miFormulario.addEventListener('submit', event =>{

    event.preventDefault();

    const datosFrom = new FormData(miFormulario);//creamos un objeto donde recopilaremos automaticamente los valores de los campos del formulario.

    //obtener los valores de los campos del formulario
    const nombre = datosFrom.get('name');// get nos permite recuperar un valor de un campo del formulario
    const correo = datosFrom.get('email');

    console.log(`Nombre: ${nombre}`);
    console.log(`Correo: ${correo}`);

    miFormulario.reset(); //quita el contenido de los input al enviarlos a la consola
})

https://www.linkedin.com/in/silvanoelia/