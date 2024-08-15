'use strict';

// Interface formData: nos permite crear objetos que van a representar a los campos del formulario y de este modo nos permite obtener los datos ingresados por el usuario para luego estos mismos datos enviarlos al servidor de una manera lo más facil posible. 

const miFormulario = document.getElementById('miFormulario');

miFormulario.addEventListener('submit', event => {

    event.preventDefault();

    const datosForm = new FormData(miFormulario); // creamos un objeto donde recopilaremos automáticamente los valores de los campos del formulario. 

    // console.log(datosForm);

    // Obtener los valores de los campos del formulario
    const nombre = datosForm.get('name'); // get nos permite recuperar un valor de un campo del formulario 
    const correo = datosForm.get('email');

    console.log(`Nombre: ${nombre}`);
    console.log(`Correo electrónico: ${correo}`);

    miFormulario.reset();


});

