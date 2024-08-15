<div align= "center"> [📋 Ejercicios](./README.md) | [Siguiente ▶️](./02-Practica-SQL-Parte-2.md)</div>

---

## Ejercicio 1

Sigue los pasos:

1. Crea una base de datos llamada `libaryDB`.

<details><summary>Mostrar solución</summary>

```sql
CREATE DATABASE IF NOT EXISTS libaryDB;
```
</details>

---

2. Hemos cometido un error al escribir el nombre de la nueva base de datos, elimina la base de datos llamada `libaryDB`.

<details><summary>Mostrar solución</summary>

```sql
DROP DATABASE IF EXISTS libaryDB;
```
</details>

---

3. Crea nuevamente la nueva base de datos con el nombre de `libraryDB`.

<details><summary>Mostrar solución</summary>

```sql
CREATE DATABASE IF NOT EXISTS libraryDB;
```
</details>

---

4. Selecciona la base de datos que acabas de crear para trabajar con ella.

<details><summary>Mostrar solución</summary>

```sql
USE libraryDB;
```
</details>

---

5. Crea una tabla llamada `books` con las siguiente columnas:
    
    - `bookID`: INT, PRIMARY KEY, AUTO_INCREMENT
        
    - `title`: VARCHAR(50), NOT NULL
        
    - `author`: VARCHAR(30), NOT NULL
        
    - `publishDate`: DATE
        
    - `createdAt`: DATETIME, DEFAULT CURRENT_TIMESTAMP

<details><summary>Mostrar solución</summary>

```sql
CREATE TABLE IF NOT EXISTS books (
    bookID INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    author VARCHAR(30) NOT NULL,
    publishDate DATE, 
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
```
</details>

---

6. Crea otra tabla llamada `members` con las siguientes columnas:
    
    - `memberID`: INT, PRIMARY KEY, AUTO_INCREMENT
        
    - `name`: VARCHAR(30), NOT NULL
        
    - `email`: VARCHAR(50)
        
    - `createdAt`: DATETIME, DEFAULT CURRENT_TIMESTAMP

<details><summary>Mostrar solución</summary>

```sql
CREATE TABLE IF NOT EXISTS members(
    memberID INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
```
</details>

---

7. Añade una nueva columna `isbn` de tipo `VARCHAR(20)` a la tabla `books`.

<details><summary>Mostrar solución</summary>

```sql
ALTER TABLE books ADD isbn VARCHAR(20);
```
</details>

---

8. Cambia el tipo de la columna `title` de `VARCHAR(50)` a `VARCHAR(100)` en la tabla `books`.

<details><summary>Mostrar solución</summary>

```sql
ALTER TABLE books MODIFY title VARCHAR(100);
```
</details>

---

9. Cambia el nombre de la columna `publishDate` a `datePublished` en la tabla `books`.

<details><summary>Mostrar solución</summary>

```sql
ALTER TABLE books RENAME COLUMN publishDate TO datePublished;
```
</details>

---

10. Crea una tabla `borrowedBooks` que tenga un `borrowID` como clave principal y un `memberID` y `bookID` como claves foráneas.
    
    - `borrowID`: INT UNSIGNED PRIMARY KEY AUTO_INCREMENT
        
    - `memberID`: INT UNSIGNED NOT NULL
        
    - `bookID`: INT UNSIGNED NOT NULL

<details><summary>Mostrar solución</summary>

```sql
CREATE TABLE IF NOT EXISTS borrowedBooks(
    borrowID INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    memberID INT UNSIGNED NOT NULL,
    bookID INT UNSIGNED NOT NULL,
    FOREIGN KEY(memberID) REFERENCES members(memberID),
    FOREIGN KEY(bookID) REFERENCES books(bookID)
);
```
</details>

