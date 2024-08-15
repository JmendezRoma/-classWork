"use strict";

//Seleccionar formularios
//accediendo teniendo en cuenta la posicion en donde esta el formulario
const primerForm = document.forms[0];
console.log(primerForm);

//accediendo teniendo en cuenta el atributo name del formulario

const formLogin = document.forms.inicioSesion;

console.log(formLogin);

//acceder a los elementos del formulario
const userName = formLogin.elements.nombreUsuario;
console.log(userName);

//Acceder usando la propiedad .form apuntando a uno de sus elemento

const inputEmail = document.getElementById("email");
const formEmail = inputEmail.form;

console.log(formEmail);

//Accediendo a los valores de un formulario
const sendButton = document.getElementById("enviar");
sendButton.addEventListener("click", (event) => {
  event.preventDefault();
  const user = document.getElementById("usuario").value;
  const name = document.getElementById("nombreCompleto").value;
  const country = document.getElementById("pais").value;
  const selectValue = document.querySelector(
    'input[name="opciones"]:checked'
  ).value;

  console.log(user);
  console.log(name);
  console.log(country);
  console.log(selectValue);
});
