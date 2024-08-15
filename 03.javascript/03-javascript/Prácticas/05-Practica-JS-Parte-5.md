<div align= "center"> [◀️ Anterior](./04-Practica-JS-Parte-4.md) | [📋 Ejercicios](./README.md) | [Siguiente ▶️](./06-Practica-JS-Parte-6.md)</div>

---

## Ejercicio 18

Crea un objeto llamado `estudiante` con la siguiente estructura de propiedades y valores:
- nombre: "Marta"
- apellido: "Silva"
- edad: 22
- carrera: "Ingeniería en Computación"
- promedio: 9.1

Luego, añádele un método dentro del objeto `estudiante` llamado `presentacion` que, al ser llamado, imprima en consola: "Hola, mi nombre es Marta Silva y estudio Ingeniería de Computación.


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
    <title>Ejercicio 18 - JS</title>
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
    <script src="./src.js"></script>
  </body>
</html>
```

<em>src.js</em>

```js
'use strict';

const estudiante = {
  nombre: 'Marta',
  apellido: 'Silva',
  edad: 22,
  carrera: 'Ingeniería en Computación',
  promedio: 9.1,
};

// Añadimos el método presentación al objeto "estudiante"
estudiante.presentacion = function () {
  console.log(
    `Hola, mi nombre es ${this.nombre} ${this.apellido} y estudio ${this.carrera}.`
  );
};

// Llamamos al método presentacion del objeto estudiante
estudiante.presentacion();
```
</details>

---
---

## Ejercicio 19

Utiliza el bucle `for/in` para recorrer las propiedades del objeto `estudiante` e imprimir en la consola la clave y el valor de cada propiedad.


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
    <title>Ejercicio 19 - JS</title>
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
    <script src="./src.js"></script>
  </body>
</html>
```

<em>src.js</em>

```js
'use strict';

const estudiante = {
  nombre: "Marta",
  apellido: "Silva",
  edad: 22,
  carrera: "Ingeniería en Computación",
  promedio: 9.1,
  presentacion: function () {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y estudio ${this.carrera}.`);
  }
};

// Recorremos las propiedades del objeto estudiante
for (const propiedad in estudiante) {
  console.log(`${propiedad}: ${estudiante[propiedad]}`);
}
```
</details>

---
---

## Ejercicio 20

Utiliza el objeto `estudiante` para acceder a la propiedad `calle`, que se espera esté dentro de la propiedad `direccion`. Asegúrate de que no se lance ningún error si la propiedad no existe utilizando el operador de encadenamiento opcional (`?.`).

El acceso a la propiedad `calle` debería ser la siguiente: `estudiante.direccion.calle`.


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
    <title>Ejercicio 20 - JS</title>
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
    <script src="./src.js"></script>
  </body>
</html>
```

<em>src.js</em>

```js
'use strict';

const estudiante = {
  nombre: 'Marta',
  apellido: 'Silva',
  edad: 22,
  carrera: 'Ingeniería en Computación',
  promedio: 9.1,
  presentacion: function () {
    console.log(
      `Hola, mi nombre es ${this.nombre} ${this.apellido} y estudio ${this.carrera}.`
    );
  },
  // direccion puede estar presente o no
  //   direccion: {
  //     calle: 'Rúe del percebe nº 13',
  //   },
};

// Utilizamos el operador de encadenamiento opcional (?.) para acceder a la propiedad "calle" dentro de la propiedad "direccion"
const calle = estudiante.direccion?.calle;

console.log(calle); // Se imprime 'undefined' si la propiedad "direccion" no existe
```
</details>

---
---

## Ejercicio 21

Crea una copia del objeto `estudiante` llamada `estudianteCopia` utilizando el _spread operator_ (`...`). Modifica la propiedad `nombre` de `estudianteCopia` a "Pepe" y verifica que el objeto original `estudiante` no haya sido modificado.


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
    <title>Ejercicio 21 - JS</title>
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
    <script src="./src.js"></script>
  </body>
</html>
```

<em>src.js</em>

```js
'use strict';

const estudiante = {
  nombre: 'Marta',
  apellido: 'Silva',
  edad: 22,
  carrera: 'Ingeniería en Computación',
  promedio: 9.1,
  presentacion: function () {
    console.log(
      `Hola, mi nombre es ${this.nombre} ${this.apellido} y estudio ${this.carrera}.`
    );
  },
};  

const estudianteCopia = { ...estudiante };

estudianteCopia.nombre = 'Pepe';

console.log('Datos de estudianteCopia:');
console.log(estudianteCopia); // Imprime el objeto con el nombre modificado a "Pepe"
console.log('-------------------------');
console.log('Datos de estudiante:');
console.log(estudiante); // Imprime el objeto original con el nombre "Marta"
```
</details>

---
---

## Ejercicio 22

Utiliza el _destructuring_ para extraer las propiedades `nombre`, `apellido` y `carrera` del objeto `estudiante` y asígnalas a variables con los mismos nombres.


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
    <title>Ejercicio 22 - JS</title>
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
    <script src="./src.js"></script>
  </body>
</html>
```

<em>src.js</em>

```js
'use strict';

const estudiante = {
  nombre: "Marta",
  apellido: "Silva",
  edad: 22,
  carrera: "Ingeniería en Computación",
  promedio: 9.1,
  presentacion: function () {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y estudio ${this.carrera}.`);
  }
};

const { nombre, apellido, carrera } = estudiante;

console.log(nombre);   // Imprime "Marta"
console.log(apellido); // Imprime "Silva"
console.log(carrera);  // Imprime "Ingeniería en Computación"
```
</details>

---
---
