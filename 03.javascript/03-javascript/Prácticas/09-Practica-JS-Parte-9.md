<div align= "center"> [◀️ Anterior](./08-Practica-JS-Parte-8.md) | [📋 Ejercicios](./README.md)</div>

---

## Ejercicio 37

Utiliza `setTimeout` para mostrar en consola un mensaje "¡Hola, Mundo!" después de 3 segundos.


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
    <title>Ejercicio 37 - JS</title>
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
    <script src="./setTimeout.js"></script>
  </body>
</html>
```

<em>setTimeout.js</em>

```js
'use strict';

setTimeout(function() {
  console.log("¡Hola, Mundo!");
}, 3000);
```
</details>

---
---

## Ejercicio 38

Crea una función que reciba un número entero y muestre en consola todos los números desde ese número hasta 0, utilizando `setInterval` para decrementar el número cada segundo.


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
    <title>Ejercicio 38 - JS</title>
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
    <script src="./setInterval.js"></script>
  </body>
</html>
```

<em>setInterval.js</em>

```js
'use strict';

function countdown(numero) {
  console.log(numero);
  const intervalId = setInterval(() => {
    numero--;
    if (numero >= 0) {
      console.log(numero);
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}

countdown(10); // Ejemplo con el número 10
```
</details>

---
---

## Ejercicio 39

Crear una función que acepte un número como argumento y retorne una promesa. Esta promesa deberá resolverse si el número es par y rechazarse si es impar. Después, invoca la función y muestra el resultado en la consola.

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
    <title>Ejercicio 39 - JS</title>
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
    <script src="./nuevaPromesa.js"></script>
  </body>
</html>
```

<em>nuevaPromesa.js</em>

```js
'use strict';

function esPar(numero) {
  return new Promise((resolve, reject) => {
    if (numero % 2 === 0) {
      resolve(`El número ${numero} es par.`);
    } else {
      reject(`El número ${numero} es impar.`);
    }
  });
}

// Invocamos la función y mostramos el resultado en la consola:
esPar(4)
  .then(resultado => {
    console.log(resultado);
  })
  .catch(error => {
    console.log(error);
  });

esPar(5)
  .then(resultado => {
    console.log(resultado);
  })
  .catch(error => {
    console.log(error);
  });
```
</details>

---
---

## Ejercicio 40

Crea una función que realice una petición HTTP a la API de "_Rick and Morty_" con `fetch` y muestre en la consola la información obtenida del personaje con _id 3_, utilizando el método `then()`. A continuación se muestra la dirección que devuelve un JSON con la información del personaje:

```js
'https://rickandmortyapi.com/api/character/3'
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
    <title>Ejercicio 40 - JS</title>
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
    <script src="./fetchAPI.js"></script>
  </body>
</html>
```

<em>fetchAPI.js</em>

```js
'use strict';

function getCharacterData(id) {
  const url = `https://rickandmortyapi.com/api/character/${id}`;

  fetch(url)
    .then((response) => response.json())
    .then((character) => {
      console.log('Información del personaje:', character);
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
}

// Llama a la función con el ID del personaje que deseas consultar
getCharacterData(3);

/* Reemplaza el 3 en getCharacterData(3) con el ID del personaje que deseas obtener de la API de "Rick and Morty". */
```
</details>

---
---

## Ejercicio 41

Reescribe el código JavaScript del ejercicio anterior utilizando la sintaxis `Async/Await`, no olvides utilizar un bloque de `try/catch` para manejar los errores adecuadamente.

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
    <title>Ejercicio 41 - JS</title>
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
    <script src="./fetchAsyncAwait.js"></script>
  </body>
</html>
```

<em>fetchAsyncAwait.js</em>

```js
'use strict';

async function getCharacterData(id) {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  try {
    const response = await fetch(url);
    const character = await response.json();
    console.log('Información del personaje:', character);
  } catch {
    console.error('Error:', error.message);
  }
}

// Llama a la función con el ID del personaje que deseas consultar
getCharacterData(3);
```
</details>

---
---

## Ejercicio 42

Crea un módulo para gestionar tareas:

1. Crea un archivo llamado `tareas.js` y define las funciones para agregar, eliminar y listar tareas. Cada tarea debe ser un objeto con dos propiedades: `id` y `task`. Cuando se añade una tarea, debe generar automáticamente un `id` único para cada tarea. Cuando se elimina una tarea, se debe buscar dicha tarea por `id`. Exporta estas funciones utilizando la sintaxis de módulos ES6.
    
2. Crea un archivo llamado `appTareas.js` e importa las funciones del módulo `tareas.js`. Utiliza las funciones importadas para agregar, eliminar y listar tareas. Cuando elimines una tarea, recuerda que ahora debes pasar el `id` de la tarea en lugar del texto de la tarea. Para poner a prueba tu código, puedes agregar las siguientes tareas:
    
    1. 'Hacer la compra'
        
    2. 'Estudiar JavaScript'
        
    3. 'Hacer ejercicio'.
        
3. No olvides agregar en `index.html` la etiqueta `<script>` y que `appTareas.js` es de tipo "_module_". Comprueba en la consola el resultado.

```html
<script src="./appTareas.js" type="module"></script>
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
    <title>Ejercicio 42 - JS</title>
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
    <!-- Debemos añadir que es de type="module" para poder utilizar export e import -->
    <script src="./appTareas.js" type="module"></script>
  </body>
</html>
```

<em>tareas.js</em>

```js
'use strict';

// Inicializamos una variable "tareas" que es un array vacío
let tareas = [];

// Función para agregar una tarea
function agregarTarea(tarea) {
  // Creamos un objeto con 2 propiedades: id y task
  // El "id" es el tamaño actual de la lista "tareas" más uno
  const objTarea = {
    id: tareas.length + 1,
    task: tarea,
  };

  // Añadimos el objeto "objTarea" a la lista "tareas"
  tareas.push(objTarea);
}

// Definimos una función "eliminarTarea" que toma un parámetro "idTarea"
function eliminarTarea(idTarea) {
  // Buscamos el índice de la tarea con el "id" dado en la lista "tareas"
  const index = tareas.findIndex((tarea) => tarea.id === idTarea);
  // Si el índice es mayor que -1 (es decir, la tarea existe), la eliminamos de la lista "tareas"
  if (index > -1) {
    tareas.splice(index, 1);
  }
}

// Definimos la función "listarTareas"
function listarTareas() {
  console.log('Tareas:');
  // Recorremos la lista "tareas" y mostramos en la consola cada tarea con su "id" y su "task"
  tareas.forEach((tarea) => {
    console.log(`${tarea.id}. ${tarea.task}`);
  });
}

// Exportamos las funciones para que puedan ser usadas en otros módulos
export { agregarTarea, eliminarTarea, listarTareas };
```

<em>appTareas.js</em>

```js
'use strict';

// Importamos las funciones del módulo 'tareas.js'
import { agregarTarea, eliminarTarea, listarTareas } from './tareas.js';

// Utilizamos la función agregarTarea para agregar varias tareas
agregarTarea('Hacer la compra');
agregarTarea('Estudiar JavaScript');
agregarTarea('Hacer ejercicio');

// Utilizamos listarTareas para mostrar las tareas que se han agregado
listarTareas();

// Mostramos en consola un mensaje para indicar que se ha eliminado una tarea con id 3
eliminarTarea(3);

// Utilizamos la función listarTareas para mostrar las tareas que quedan después de eliminar la tarea con id 3
console.log("\nDespués de eliminar la tarea: 'Hacer ejercicio'\n");
listarTareas();
```
</details>
