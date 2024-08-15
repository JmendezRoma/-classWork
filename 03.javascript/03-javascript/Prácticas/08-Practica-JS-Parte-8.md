<div align= "center"> [◀️ Anterior](./07-Practica-JS-Parte-7.md) | [📋 Ejercicios](./README.md) | [Siguiente ▶️](./09-Practica-JS-Parte-9.md)</div>

---

## Ejercicio 33

Dada la siguiente cadena de texto JSON, imprime por consola los nombres de los empleados cuyo salario es mayor a 3000. Recuerda que para poder trabajar con los datos de la cadena de texto JSON debes convertirlos primero.

```js
const jsonEmpleados = '[{"nombre":"Ana","salario":3500},{"nombre":"Pedro","salario":2000},{"nombre":"Marta","salario":4000}]';
```

### Solución
---

<details><summary>Mostrar solución</summary>

<em>index.html</em>

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 33 - JS</title>
  </head>
  <body
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: Arial, sans-serif;
    "
  >
    <section style="text-align: center">
      <p style="font-size: 2em; margin: 0; color: #333">
        Abre las herramientas de desarrollador para ver el resultado
      </p>
      <p style="font-size: 1.5em; margin-top: 50px; color: #555">
        Para abrir las herramientas de desarrollador, presiona
        <strong>F12</strong> o haz clic derecho y selecciona
        <strong>Inspeccionar</strong>.
      </p>
    </section>
    <script src="./propiedadesJson.js"></script>
  </body>
</html>
```

<em>propiedadesJson.js</em>

```js
'use strict';

// Cadena de texto en formato JSON con la información de los empleados
const jsonEmpleados = '[{"nombre":"Ana","salario":3500},{"nombre":"Pedro","salario":2000},{"nombre":"Marta","salario":4000}]';

//Utilizamos JSON.parse para convertir la cadena de texto JSON en un array de objetos JavaScript
const empleados = JSON.parse(jsonEmpleados);

// Utilizamos forEach para iterar sobre cada empleado en el array
empleados.forEach(empleado => { 
  // Dentro del bucle, comprobamos si el salario del empleado es mayor que 3000
  if (empleado.salario > 3000) {
    // Si el salario es mayor que 3000, imprimimos el nombre del empleado
    console.log(empleado.nombre);
  } 
});
```
</details>

---
---

## Ejercicio 34

Dada la siguiente cadena de texto formato JSON, conviértela en un objeto JS y muestra el resultado en consola:

```js
const textoJson = '[{"nombre":"Ana","salario":3500},{"nombre":"Pedro","salario":2000},{"nombre":"Marta","salario":4000}]';
```


### Solución
---

<details><summary>Mostrar solución</summary>

<em>index.html</em>

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 34 - JS</title>
  </head>
  <body
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: Arial, sans-serif;
    "
  >
    <section style="text-align: center">
      <p style="font-size: 2em; margin: 0; color: #333">
        Abre las herramientas de desarrollador para ver el resultado
      </p>
      <p style="font-size: 1.5em; margin-top: 50px; color: #555">
        Para abrir las herramientas de desarrollador, presiona
        <strong>F12</strong> o haz clic derecho y selecciona
        <strong>Inspeccionar</strong>.
      </p>
    </section>
    <script src="./parseJson.js"></script>
  </body>
</html>
```

<em>parseJson.js</em>

```js
'use strict';

const textoJson = '[{"nombre":"Ana","salario":3500},{"nombre":"Pedro","salario":2000},{"nombre":"Marta","salario":4000}]';

const objetoJson = JSON.parse(textoJson);

console.log(objetoJson);
```
</details>

---
---

## Ejercicio 35

Utiliza una IIFE para generar un número aleatorio entre dos números dados como parámetros y muestra el resultado en consola.

### Solución
---

<details><summary>Mostrar solución</summary>

<em>index.html</em>

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 35 - JS</title>
  </head>
  <body
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: Arial, sans-serif;
    "
  >
    <section style="text-align: center">
      <p style="font-size: 2em; margin: 0; color: #333">
        Abre las herramientas de desarrollador para ver el resultado
      </p>
      <p style="font-size: 1.5em; margin-top: 50px; color: #555">
        Para abrir las herramientas de desarrollador, presiona
        <strong>F12</strong> o haz clic derecho y selecciona
        <strong>Inspeccionar</strong>.
      </p>
    </section>
    <script src="./funcionIIFE.js"></script>
  </body>
</html>
```

<em>funcionIIFE.js</em>

```js
'use strict';

(function (min, max) {
  const numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(numeroRandom);
})(5, 10);
```
</details>

---
---

## Ejercicio 36

Crea una función que retorne un _closure_ que actúe como contador de veces que se ha llamado. Cada vez que se llame al _closure_, debe mostrar en consola el número de veces que ha sido llamado hasta el momento.


### Solución
---

<details><summary>Mostrar solución</summary>

<em>index.html</em>

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 36 - JS</title>
  </head>
  <body
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: Arial, sans-serif;
    "
  >
    <section style="text-align: center">
      <p style="font-size: 2em; margin: 0; color: #333">
        Abre las herramientas de desarrollador para ver el resultado
      </p>
      <p style="font-size: 1.5em; margin-top: 50px; color: #555">
        Para abrir las herramientas de desarrollador, presiona
        <strong>F12</strong> o haz clic derecho y selecciona
        <strong>Inspeccionar</strong>.
      </p>
    </section>
    <script src="./closures.js"></script>
  </body>
</html>
```

<em>closures.js</em>

```js
'use strict';

function crearContador() {
  let contador = 0;

  return function() {
    contador++;
    console.log("Este closure ha sido llamado " + contador + " veces.");
  };
}

const contador = crearContador();

contador(); // Salida: Este closure ha sido llamado 1 veces.
contador(); // Salida: Este closure ha sido llamado 2 veces.
contador(); // Salida: Este closure ha sido llamado 3 veces.
```
</details>

---
---
