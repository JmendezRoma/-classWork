<div align= "center"> [◀️ Anterior](./05-Practica-JS-Parte-5.md) | [📋 Ejercicios](./README.md) | [Siguiente ▶️](./07-Practica-JS-Parte-7.md)</div>

---

## Ejercicio 23

Crea un array con los números del 1 al 6 e imprime por consola el valor del quinto elemento.


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
    <title>Ejercicio 23 - JS</title>
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
    <script src="./arrayNumeros.js"></script>
  </body>
</html>
```

<em>arrayNumeros.js</em>

```js
'use strict';

const numeros = [1, 2, 3, 4, 5, 6];

console.log(numeros[4]); // => 5
```
</details>

---
---

## Ejercicio 24

Usa el bucle `for/of` para recorrer e imprimir en la consola los elementos del array 'colores', que incluye "rojo", "azul", "verde", "amarillo" y "naranja".


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
    <title>Ejercicio 24 - JS</title>
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
    <script src="./arrayColores.js"></script>
  </body>
</html>
```

<em>arrayColores.js</em>

```js
'use strict';

const colores = ["rojo", "azul", "verde", "amarillo", "naranja"];

for (const color of colores) {
  console.log(color);
}
```
</details>

---
---

## Ejercicio 25

Dado el siguiente array de frutas, utiliza el método `push()` para agregar las frutas "fresa" y "mango" al final del array. Luego, imprime en la consola el array modificado y la nueva longitud del array.

```js
const frutas = ['manzana', 'naranja', 'uva', 'plátano', 'kiwi'];
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
    <title>Ejercicio 25 - JS</title>
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
    <script src="./arrayFrutas.js"></script>
  </body>
</html>
```

<em>arrayFrutas.js</em>

```js
'use strict';

const frutas = ['manzana', 'naranja', 'uva', 'plátano', 'kiwi'];

frutas.push('fresa', 'mango');

console.log(frutas); // => ['manzana', 'naranja', 'uva', 'plátano', 'kiwi', 'fresa', 'mango']

console.log(frutas.length); // => 7
```
</details>

---
---

## Ejercicio 26

En el siguiente array de frutas, utiliza el método `splice()` para eliminar las frutas en las posiciones 1 y 2 y agregar las frutas "fresa" y "mango" en su lugar. Luego, imprime en la consola el array modificado y el array de frutas eliminadas.

```js
const frutas = ['manzana', 'naranja', 'uva', 'plátano', 'kiwi'];
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
    <title>Ejercicio 26 - JS</title>
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
    <script src="./spliceArray.js"></script>
  </body>
</html>
```

<em>spliceArray.js</em>

```js
'use strict';

const frutas = ['manzana', 'naranja', 'uva', 'plátano', 'kiwi'];

const frutasEliminadas = frutas.splice(1, 2, 'fresa', 'mango');

console.log(frutas); // ['manzana', 'fresa', 'mango', 'plátano', 'kiwi']

console.log(frutasEliminadas); // ['naranja', 'uva']
```
</details>

---
---

## Ejercicio 27

Dado el siguiente array de frutas, utiliza el método `includes()` para determinar si el array contiene las frutas 'uva' y 'cereza'. Luego, imprime en la consola los resultados.

```js
const frutas = ['manzana', 'naranja', 'uva', 'plátano', 'kiwi'];
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
    <title>Ejercicio 27 - JS</title>
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
    <script src="./findArray.js"></script>
  </body>
</html>
```

<em>findArray.js</em>

```js
'use strict';

const frutas = ['manzana', 'naranja', 'uva', 'plátano', 'kiwi'];

const contieneUva = frutas.includes('uva');
const contieneCereza = frutas.includes('cereza');

// El array frutas contiene 'uva'? : true
console.log(`El array frutas contiene 'uva'? : ${contieneUva}`); 

// El array frutas contiene 'cereza'? : false
console.log(`El array frutas contiene 'cereza'? : ${contieneCereza}`); 
```
</details>

---
---
