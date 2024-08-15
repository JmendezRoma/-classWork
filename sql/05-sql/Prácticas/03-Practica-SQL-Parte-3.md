<div align= "center">[◀️ Anterior](./02-Practica-SQL-Parte-2.md) | [📋 Ejercicios](./README.md) | [Siguiente ▶️](./04-Practica-SQL-Parte-4.md)</div>

---

Para este ejercicio, debes utilizar la base de datos que contiene las tablas `books` y `members` que utilizaste en la práctica anterior.

## Ejercicio 3

Realiza las siguientes operaciones:

1. Selecciona solo el título y la fecha de publicación de la tabla `books`.

<details><summary>Mostrar solución</summary>

```sql
SELECT title, datePublished FROM books;
```
</details>

---

2. Encuentra todos los libros publicados antes del año 1950.
   
<details><summary>Mostrar solución</summary>

```sql
SELECT * FROM books WHERE datePublished < '1950-01-01';
```
</details>

---

3. Busca todos los miembros con el dominio de correo "[email.com](http://email.com)".

<details><summary>Mostrar solución</summary>

```sql
SELECT * FROM members WHERE email LIKE '%@email.com';
```
</details>

---

4. Agrupa los libros por autor y cuenta cuántos libros hay de cada autor.

<details><summary>Mostrar solución</summary>

```sql
SELECT author, COUNT(*) FROM books GROUP BY author;
```
</details>

---

5. Encuentra autores que tienen más de 1 libro en la tabla `books`.

<details><summary>Mostrar solución</summary>

```sql
SELECT author, COUNT(*) FROM books GROUP BY author HAVING COUNT(*) > 1;
```
</details>

---

6. Muestra los libros ordenados por su fecha de publicación, de más reciente a más antiguo.

<details><summary>Mostrar solución</summary>

```sql
SELECT * FROM books ORDER BY datePublished DESC;
```
</details>

---

7. Muestra los libros ordenados por autor y luego por título, ambos en orden ascendente.

<details><summary>Mostrar solución</summary>

```sql
SELECT * FROM books ORDER BY author ASC, title ASC;
```
</details>

---
---
