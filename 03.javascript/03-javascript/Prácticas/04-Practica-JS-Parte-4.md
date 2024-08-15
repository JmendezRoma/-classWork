<div align= "center"> [◀️ Anterior](./03-Practica-JS-Parte-3.md) | [📋 Ejercicios](./README.md) | [Siguiente ▶️](./05-Practica-JS-Parte-5.md)</div>

---

## Ejercicio 14

Crea una función llamada `saludar` que acepte un parámetro `nombre`. La función debe imprimir un mensaje de bienvenida en la consola que incluya el nombre proporcionado.

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
    <title>Ejercicio 14 - JS</title>
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
    <script src="./funcionSaludo.js"></script>
  </body>
</html>
```

<em>funcionSaludo.js</em>

```js
'use strict';

function saludar(nombre) {
  console.log('¡Bienvenid@, ' + nombre + '!');
}

// Llamada a la función saludar con el argumento "Jack"
saludar('Jack');
```
</details>

---
---

## Ejercicio 15

Crea una función anónima que acepte dos parámetros, `a` y `b`, y retorne la suma de los dos números. Asigna esta función a una variable llamada `suma`.


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
    <title>Ejercicio 15 - JS</title>
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
    <script src="./funcionSuma.js"></script>
  </body>
</html>
```

<em>funcionSuma.js</em>

```js
'use strict';

const suma = function (a, b) {
  return a + b;
};

const resultado = suma(3, 5);

console.log(resultado);
```
</details>

---
---

## Ejercicio 16

Crea una función de flecha concisa llamada `calcularPromedio` que acepte dos parámetros, `numero1` y `numero2`. La función debe retornar el promedio de los dos números.


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
    <title>Ejercicio 16 - JS</title>
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
    <script src="./funcionPromedio.js"></script>
  </body>
</html>
```

<em>funcionPromedio.js</em>

```js
'use strict';

const calcularPromedio = (numero1, numero2) => (numero1 + numero2) / 2;

const resultado = calcularPromedio(6, 10);

console.log(resultado);
```
</details>

---
---

## Ejercicio 17

Crea una función llamada `mostrarNumerosPares` que acepte un parámetro `limite`. La función debe imprimir en la consola todos los números pares desde 2 hasta el límite proporcionado.


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
    <title>Ejercicio 17 - JS</title>
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
    <script src="./funcionNumerosPares.js"></script>
  </body>
</html>
```

<em>funcionNumerosPares.js</em>

```js
'use strict';

function mostrarNumerosPares(limite) {
  for (let i = 2; i <= limite; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

mostrarNumerosPares(20);
```
</details>

---
---
