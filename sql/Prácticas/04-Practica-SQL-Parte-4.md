<div align= "center">[◀️ Anterior](./03-Practica-SQL-Parte-3.md) | [📋 Ejercicios](./README.md) | [Siguiente ▶️](./05-Practica-SQL-Parte-5.md)</div>

---

Hasta ahora, hemos utilizado la convención `lowerCamelCase` para nombrar variables y otros identificadores en nuestros ejemplos y ejercicios de programación. Sin embargo, para asegurar coherencia con las tablas y campos de la base de datos Sakila que utilizaremos, es necesario que adoptes la convención `snake_case` en vez de `lowerCamelCase`.

La base de datos Sakila, que es una base de datos de ejemplo proporcionada por MySQL, utiliza `snake_case` para la nomenclatura de sus tablas y campos.

Utilizar la misma convención nos permite interactuar de manera más fluida con la base de datos y evita posibles confusiones o errores.

**Ejemplos:**

- Si antes usabas `customerName` en tus códigos, ahora deberás utilizar `customer_name`.
    
- En lugar de `getOrderDetails`, utiliza `get_order_details`.

## Ejercicio 4

Para este ejercicio debes utilizar la base de datos de ejemplo Sakila, asegúrate de activar la base de datos correcta para trabajar con ella. Realiza las siguientes consultas:

1. Escribe una consulta que devuelva los `first_name` y `last_name` de todos los actores que tienen el nombre "ED".

<details><summary>Mostrar solución</summary>

```sql
SELECT first_name, last_name FROM actor WHERE first_name = 'ED';
```
</details>

---

2. Encuentra todos los clientes en la tabla `customer` que son activos y cuyo primer nombre es "MARY".

<details><summary>Mostrar solución</summary>

```sql
SELECT first_name, last_name FROM customer WHERE first_name = 'MARY' AND active = 1;
```
</details>

---

3. Extrae los nombres y apellidos de los actores que tienen el primer nombre "ED" o "BOB".

<details><summary>Mostrar solución</summary>

```sql
SELECT first_name, last_name FROM actor WHERE first_name = 'ED' OR first_name = 'BOB';
```
</details>

---

4. Encuentra todos los alquileres (`rental`) que se hicieron entre '2005-05-25' y '2005-05-27'.

<details><summary>Mostrar solución</summary>

```sql
SELECT * FROM rental WHERE rental_date BETWEEN '2005-05-25' AND '2005-05-27';
```
</details>

---

5. Selecciona todos los films cuyas clasificaciones (`rating`) son "G", "PG", o "PG-13".

<details><summary>Mostrar solución</summary>

```sql
SELECT title, rating FROM film WHERE rating IN ('G', 'PG', 'PG-13');
```
</details>

---

6. Encuentra los apellidos de los clientes que terminan con "ING".

<details><summary>Mostrar solución</summary>

```sql
SELECT last_name FROM customer WHERE last_name LIKE '%ING';
```
</details>

---
---

