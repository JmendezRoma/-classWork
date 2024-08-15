<div align= "center"> [📋 Ejercicios](./README.md) | [Siguiente ▶️](./02-Practica-JS-Parte-2.md)</div>

---

En este módulo encontrarás varias secciones donde se te propondrán ejercicios prácticos sencillos para que puedas aplicar y afianzar los conocimientos adquiridos en los temas estudiados. Aunque estos ejercicios no son obligatorios ni evaluados, recomendamos que los realices, ya que te permitirán desarrollar habilidades y comprensión más sólidas en JavaScript.

En cada sección práctica, se proporcionará un enunciado con un problema o tarea específica a resolver, utilizando los conceptos aprendidos en las lecciones correspondientes. Al final de cada ejercicio, encontrarás una posible solución para que puedas compararla con la tuya y ver si has entendido correctamente el tema. Recuerda que en la programación, hay múltiples formas de resolver un problema, por lo que es posible que tu solución sea diferente pero igualmente válida.

Los ejercicios prácticos cubrirán temas como variables, operadores, estructuras de control, funciones, objetos, eventos, entre otros. Estos ejercicios te ayudarán a familiarizarte con la sintaxis de JavaScript y a entender cómo se pueden aplicar los conceptos teóricos en situaciones reales de desarrollo web.

Algunos consejos para sacar el máximo provecho de estos ejercicios:

1. No te preocupes si no entiendes un ejercicio al principio. Puedes volver a revisar la lección correspondiente y repasar los conceptos antes de intentarlo de nuevo.
    
2. Asegúrate de tomarte el tiempo necesario para entender cada ejercicio y su solución. La práctica efectiva es esencial para desarrollar habilidades sólidas en programación.
    
3. No te desanimes si no consigues resolver un ejercicio. La programación puede ser un desafío, especialmente al principio. La clave es la persistencia y la paciencia.
    
4. No dudes en pedir ayuda si te encuentras atascado. Preguntar a tus compañeros, profesores o buscar en Internet pueden ser excelentes recursos para aclarar dudas y encontrar soluciones.
    
Esperamos que estos ejercicios te sean de utilidad y te ayuden a afianzar tus conocimientos en JavaScript. Recuerda que el éxito en el aprendizaje de la programación depende de tu esfuerzo, dedicación y práctica. ¡Buena suerte y disfruta del proceso!

Comenzamos!

---

## Ejercicio 1

Crea la carpeta `JS-Ejercicio_01`, dentro crear un archivo HTML con un archivo JavaScript externo que muestre un mensaje en la consola al cargar la página:

1. Crea un archivo HTML llamado `index.html` con la estructura mínima.
    
2. Crea un archivo JavaScript externo llamado `script.js` en el mismo directorio que `index.html`.
    
3. Añade una instrucción en `script.js` que muestre un mensaje (el que quieras) en la consola al cargar la página.
    
4. Asegúrate de enlazar el archivo `script.js` en `index.html`.
    

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
    <title>Ejercicio 1 - JS</title>
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
    <script src="./script.js"></script>
  </body>
</html>
```

<em>scripts.js</em>

```js
'use strict';

console.log('Hola, mundo!');
```
</details>

---
---

## Ejercicio 2

Crea la carpeta `JS-Ejercicio_02`, en este caso se trata alertar gracias a 'use strict' cuando se genere algún error al utilizar palabras reservadas como nombres de variables:

1. Crea un archivo HTML llamado `index.html` con la estructura mínima.

2. Crea un archivo JavaScript llamado `strict.js`.

3. Añade la directiva "use strict" al inicio del archivo `strict.js`.

4. Escribe un código que intente utilizar una palabra reservada (por ejemplo, `let`) como nombre de una variable.

5. Ejecuta el código y observa el error generado en la consola del navegador.


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
    <title>Ejercicio 2 - JS</title>
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
    <script src="./strict.js"></script>
  </body>
</html>
```

<em>strict.js</em>

```js
'use strict';

const let = "El nombre de esta variable provocará un error";
```
</details>

---
---

## Ejercicio 3

Crea y muestra por consola los valores utilizando variables con `let` y `const` según consideres si su valor puede cambiar o no:

1. Crea un archivo HTML llamado `index.html` con la estructura mínima.

2. Crea un archivo JavaScript llamado `variables.js`.

3. Declara una variable llamada `nombre` y asígnale tu nombre como valor.

4. Declara una variable llamada `edad` y asígnale tu edad como valor.

5. Declara una variable llamada `diasSemana` y asígnale el valor de 7.

6. Declara una variable llamada `mesesAnio` y asígnale el valor de 12.

7. Utiliza `console.log()` para mostrar el valor de las variables en la consola del navegador.


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
    <title>Ejercicio 3 - JS</title>
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
    <script src="./variables.js"></script>
  </body>
</html>
```

<em>variables.js</em>

```js
'use strict';

let nombre = 'Jack Torrance';
let edad = 43;
const diasSemana = 7;
const mesesAnio = 12;

console.log(nombre);
console.log(edad);
console.log(diasSemana);
console.log(mesesAnio);
```
</details>

---
---

## Ejercicio 4

Crea una cadena de texto que diga "Hola, me llamo [`nombre`] y vivo en [`ciudad`]." utilizando interpolación de variables (nombre y ciudad) y luego muestra la cadena de texto por consola.


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
    <title>Ejercicio 4 - JS</title>
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
    <script src="./backticks.js"></script>
  </body>
</html>
```

<em>backticks.js</em>

```js
'use strict';

const nombre = 'Jack';
const ciudad = 'Portland';

const presentacion = `Hola soy ${nombre} y vivo en ${ciudad}`;

console.log(presentacion);
```
</details>

---
---

## Ejercicio 5

Muestra por consola la longitud de la siguiente cadena de caracteres: "_All work and no play makes Jack a dull boy_".


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
    <title>Ejercicio 5 - JS</title>
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
    <script src="./length.js"></script>
  </body>
</html>
```

<em>length.js</em>

```js
'use strict';

const frase = 'All work and no play makes Jack a dull boy';

console.log(`El total de caracteres de la frase son: ${frase.length}`);
```
</details>

---
---

