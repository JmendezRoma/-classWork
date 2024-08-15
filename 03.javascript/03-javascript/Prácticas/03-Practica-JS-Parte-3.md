<div align= "center"> [◀️ Anterior](./02-Practica-JS-Parte-2.md) | [📋 Ejercicios](./README.md) | [Siguiente ▶️](./04-Practica-JS-Parte-4.md)</div>

---

## Ejercicio 11

Escribe un _loop_ que imprima por consola solo los números impares del 1 al 20.

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
    <title>Ejercicio 11 - JS</title>
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
    <script src="./loopImpares.js"></script>
  </body>
</html>
```

<em>loopImpares.js</em>

```js
'use strict';

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
```
</details>

---
---

## Ejercicio 12

Imprime por consola la tabla de multiplicar del 6.


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
    <title>Ejercicio 12 - JS</title>
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
    <script src="./tablaMultiplicar.js"></script>
  </body>
</html>
```

<em>tablaMultiplicar.js</em>

```js
'use strict';

const numero = 6;

for (let i = 1; i <= 10; i++) {
  const resultado = numero * i;
  console.log(`${numero} x ${i} = ${resultado}`);
}
```
</details>

---
---

## Ejercicio 13

Crea un objeto Date con la fecha de hoy e imprímelo en la consola.


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
    <title>Ejercicio 13 - JS</title>
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
    <script src="./fechaActual.js"></script>
  </body>
</html>
```

<em>fechaActual.js</em>

```js
'use strict';

const fechaHoy = new Date();

console.log('La fecha de hoy es:', fechaHoy);
```
</details>

---
---
