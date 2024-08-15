<div align= "center"> [◀️ Anterior](./01-Practica-JS-Parte-1.md) | [📋 Ejercicios](./README.md) | [Siguiente ▶️](./03-Practica-JS-Parte-3.md)</div>

---

## Ejercicio 6

Crea dos variables con los valores 7 y 4 respectivamente y muestra su suma en la consola del navegador.

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
    <title>Ejercicio 6 - JS</title>
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
    <script src="./sumaNumeros.js"></script>
  </body>
</html>
```

<em>sumaNumeros.js</em>

```js
'use strict';

const num1 = 7;
const num2 = 4;

console.log(`El total de la suma ${num1} + ${num2} es ${num1 + num2}`);
```
</details>

---
---

## Ejercicio 7

Genera un número aleatorio entre 1 y 10 y muéstralo en la consola del navegador. Al refrescar la página debe mostrar un número aleatorio nuevo.


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
    <title>Ejercicio 7 - JS</title>
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
    <script src="./numeroAleatorio.js"></script>
  </body>
</html>
```

<em>numeroAleatorio.js</em>

```js
'use strict';

const min = 1;
const max = 10;
const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);

console.log(`El número aleatorio entre ${min} y ${max} es ${numeroAleatorio}`);
```
</details>

---
---

## Ejercicio 8

Dadas las siguientes variables, verifica si la suma de a y b es igual a c mostrando en consola el resultado (`true` o `false`). En este ejercicio debes trabajar tanto con los valores booleanos como con el operador de comparación. Trata de mostrar el resultado en la consola con la interpolación de variables usando las comillas _'backticks'_ (\`).

```js
const a = 5;
const b = 10;
const c = 15;
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
    <title>Ejercicio 8 - JS</title>
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
    <script src="./boolean.js"></script>
  </body>
</html>
```

<em>boolean.js</em>

```js
'use strict';

const a = 5;
const b = 10;
const c = 15;

console.log(`Es el valor de ${a} + ${b} = ${c}?  ${a + b === c}`);
```
</details>

---
---

## Ejercicio 9

Utiliza el operador de módulo (%) para determinar si un número es par o impar. Imprime en consola el mensaje: "El número [`numeroComprobar`] es PAR/IMPAR" según corresponda por medio de un condicional.


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
    <title>Ejercicio 9 - JS</title>
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
    <script src="./modulo.js"></script>
  </body>
</html>
```

<em>modulo.js</em>

```js
'use strict';

const numeroChequear = 7;

if (numeroChequear % 2 === 0) {
  console.log(`El número ${numeroChequear} es PAR`);
} else {
  console.log(`El número ${numeroChequear} es IMPAR`);
}
```
</details>

---
---

## Ejercicio 10

Dado el siguiente código que indica los valores mínimos que deben cumplirse, utiliza operadores lógicos para determinar si una persona indicando su edad (`edad`), peso (`peso`) y si tiene alguna enfermedad crónica (enfermedad) es apta para donar sangre. Muestra en consola si la persona es apta para donar o no. Cambia los datos de la persona para comprobar que todas las condiciones funcionan correctamente.

```js
const edadMinima = 18;
const edadMaxima = 65;
const pesoMinimo = 50;
const enfermedadCronica = false;
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
    <title>Ejercicio 10 - JS</title>
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
    <script src="./condicionales.js"></script>
  </body>
</html>
```

<em>condicionales.js</em>

```js
'use strict';

const edadMinima = 18;
const edadMaxima = 65;
const pesoMinimo = 50;
const enfermedadCronica = false;

const edad = 34;
const peso = 78;
const enfermedad = false;

if (
  !enfermedad &&
  edadMinima < edad &&
  edad < edadMáxima &&
  peso > pesoMinimo
) {
  console.log('La persona es apta para donar sangre!');
} else {
  console.log('La persona NO es apta para donar sangre!');
}
```
</details>

---
---

