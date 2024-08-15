<div align= "center"> [◀️ Anterior](./06-Practica-JS-Parte-6.md) | [📋 Ejercicios](./README.md) | [Siguiente ▶️](./08-Practica-JS-Parte-8.md)</div>

---

## Ejercicio 28

Utiliza el método `find()` para buscar el primer elemento del siguiente array que tenga una longitud mayor a 5 caracteres e imprímelo en la consola:

```js
const animales = ['gato', 'elefante', 'perro', 'jirafa', 'tigre'];
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
    <title>Ejercicio 28 - JS</title>
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
    <script src="./metodoFind.js"></script>
  </body>
</html>
```

<em>metodoFind.js</em>

```js
'use strict';

const animales = ['gato', 'elefante', 'perro', 'jirafa', 'tigre'];

const primerAnimal = animales.find(animal => animal.length > 5);

console.log(primerAnimal); // 'elefante'
```
</details>

---
---

## Ejercicio 29

Utiliza el método `map()` para crear un nuevo array que contenga la longitud de cada elemento del siguiente array y muestra el nuevo array en la consola:

```js
const animales = ['gato', 'elefante', 'perro', 'jirafa', 'tigre'];
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
    <title>Ejercicio 29 - JS</title>
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
    <script src="./metodoMap.js"></script>
  </body>
</html>
```

<em>metodoMap.js</em>

```js
'use strict';

const animales = ['gato', 'elefante', 'perro', 'jirafa', 'tigre'];

const longitudes = animales.map(animal => animal.length);

console.log(longitudes); // [4, 8, 5, 6, 5]
```
</details>

---
---

## Ejercicio 30

Usa el método `filter()` para crear un nuevo array que contenga solo los números mayores a 10 del siguiente array e imprímelo en consola:

```js
const numeros = [5, 12, 8, 16, 7, 11];
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
    <title>Ejercicio 30 - JS</title>
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
    <script src="./metodoFilter.js"></script>
  </body>
</html>
```

<em>metodoFilter.js</em>

```js
'use strict';

const numeros = [5, 12, 8, 16, 7, 11];

const numerosmayoresADiez = numeros.filter(numero => numero > 10);

console.log(numerosmayoresADiez); // [12, 16, 11]
```
</details>

---
---

## Ejercicio 31

Utiliza el método reduce() para calcular el producto de todos los elementos del siguiente array:

```js
const numeros = [1, 2, 3, 4, 5];
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
    <title>Ejercicio 31 - JS</title>
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
    <script src="./metodoReduce.js"></script>
  </body>
</html>
```

<em>metodoReduce.js</em>

```js
'use strict';

const numeros = [1, 2, 3, 4, 5];

const productoNumeros = numeros.reduce((acumulador, valorActual) => {
  return acumulador * valorActual;
});

console.log(productoNumeros); // 120
```
</details>

---
---

## Ejercicio 32

Usa el método `sort()` para ordenar el siguiente array de números en orden ascendente:

```js
const numeros = [18, 5, 32, 7, 15];
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
    <title>Ejercicio 32 - JS</title>
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
    <script src="./metodoSort.js"></script>
  </body>
</html>
```

<em>metodoSort.js</em>

```js
'use strict';

const numeros = [18, 5, 32, 7, 15];

const ordenAscendente = numeros.sort((a, b) => a - b);

console.log(ordenAscendente); // [5, 7, 15, 18, 32]
```
</details>

---
---
