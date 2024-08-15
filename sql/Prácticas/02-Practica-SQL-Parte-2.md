<div align= "center">[◀️ Anterior](./01-Practica-SQL-Parte-1.md) | [📋 Ejercicios](./README.md) | [Siguiente ▶️](./03-Practica-SQL-Parte-3.md)</div>

---

El siguiente ejercicio te ayudarán a practicar las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la base de datos `libraryDB` que creaste anteriormente. Asegúrate de haber seleccionado la base de datos adecuada y de tener las tablas `books` y `members` creadas.

## Ejercicio 2

Sigue las instrucciones:

1. Inserta los siguientes libros en la tabla `books` con los siguientes datos para las columnas `title`, `author` y `publishDate`:
    
    - 'Don Quijote', 'Miguel de Cervantes', '1605-01-16'
        
    - 'Cien Años de Soledad', 'Gabriel García Márquez', '1967-06-05'
        
    - 'El Gran Gatsby', 'F. Scott Fitzgerald', '1925-04-10'
        
    - 'Matar a un Ruiseñor', 'Harper Lee', '1960-07-11'
        
    - '1984', 'George Orwell', '1949-06-08'
        
    - 'El Silmarillion', 'J.R.R. Tolkien', '1977-09-15'
        
    - 'Orgullo y Prejuicio', 'Jane Austen', '1813-01-28'
        
    - 'Las Aventuras de Sherlock Holmes', 'Arthur Conan Doyle', '1892-10-14'
        
    - 'El Señor de los Anillos', 'J.R.R. Tolkien', '1954-07-29'

<details><summary>Mostrar solución</summary>

```sql
INSERT INTO books(title, author, datePublished) 
VALUES 
('Don Quijote', 'Miguel de Cervantes', '1605-01-16'),
('Cien Años de Soledad', 'Gabriel García Márquez', '1967-06-05'),
('El Gran Gatsby', 'F. Scott Fitzgerald', '1925-04-10'),
('Matar a un Ruiseñor', 'Harper Lee', '1960-07-11'),
('1984', 'George Orwell', '1949-06-08'),
('El Silmarillion', 'J.R.R. Tolkien', '1977-09-15'),
('Orgullo y Prejuicio', 'Jane Austen', '1813-01-28'),
('Las Aventuras de Sherlock Holmes', 'Arthur Conan Doyle', '1892-10-14'),
('El Señor de los Anillos', 'J.R.R. Tolkien', '1954-07-29');
```
</details>

---

2. Añade nuevos miembros en la tabla `members` con los siguientes datos para las columnas `name` y `email`: 
   
	- 'Sara Pérez', 'sara.perez@email.com'
	  
	- 'María González', 'maria.gonzalez@mymail.com'
	  
	- 'Carlos Rodríguez', 'carlos.rodriguez@email.com'
	  
	- 'Ana Martínez', 'ana.martinez@mail.com'
	  
	- 'Luis García', 'luis.garcia@mymail.com'

<details><summary>Mostrar solución</summary>

```sql
INSERT INTO members(name, email)
VALUES
('Sara Pérez', 'sara.perez@email.com'),
('María González', 'maria.gonzalez@mymail.com'),
('Carlos Rodríguez', 'carlos.rodriguez@email.com'),
('Ana Martínez', 'ana.martinez@mail.com'),
('Luis García', 'luis.garcia@mymail.com');
```
</details>

---

3. Muestra todos los registros de la tabla `books`.

<details><summary>Mostrar solución</summary>

```sql
SELECT * FROM books;
```
</details>

---

4. Consulta y muestra solo los libros cuyo autor es "George Orwell".

<details><summary>Mostrar solución</summary>

```sql
SELECT * FROM books WHERE author = 'George Orwell';
```
</details>

---

5. Actualiza el título del libro "1984" a "1984 - Edición Especial".

<details><summary>Mostrar solución</summary>

<cite>Nota: El "Safe Update Mode" es una configuración de MySQL que impide que se ejecuten consultas UPDATE o DELETE que no contienen una cláusula WHERE que use una clave (KEY). Esto es para prevenir cambios accidentales que puedan afectar a muchas filas a la vez. Si estás seguro de que tu consulta es correcta y deseas proceder, tienes algunas opciones para desactivar el Safe Update Mode temporalmente:

Opción 1:
Puedes desactivar el Safe Update Mode para la sesión actual con el siguiente comando SQL:

<pre><code>
-- Desactivamos SQL_SAFE_UPDATE
SET SQL_SAFE_UPDATES = 0;

-- Consulta de UPDATE O DELETE sin WHERE con KEY

-- Recordar volver a activar SQL_SAFE_UPDATE
SET SQL_SAFE_UPDATES = 1;
</code></pre>

Opción 2: Conocer antes el id del campo que se quiere actualizar:

<pre><code>
SELECT id FROM tabla WHERE campo = valor_del_campo_actual; -- ej.: ID 2

UPDATE tabla SET campo_actualizar = nuevo_valor WHERE id = 2;
</code></pre>

</cite>

```sql
-- Opción 1
SET SQL_SAFE_UPDATES = 0;
UPDATE books SET title = '1984 - Edición Especial' WHERE title = '1984';
SET SQL_SAFE_UPDATES = 1;

-- Opción 2
SELECT bookId FROM books WHERE title = '1984'; -- bookId 5
UPDATE books SET title = '1984 - Edición Especial' WHERE bookId = 5;
```
</details>

---

6. Cambia el correo electrónico de "Sara Pérez" a "[sara.perez2@email.com](mailto:sara.perez2@email.com)".

<details><summary>Mostrar solución</summary>

```sql
UPDATE members SET email = 'sara.perez2@email.com' WHERE name = 'Sara Pérez';
```
</details>

---

7. Elimina el libro "1984 - Edición Especial" de la tabla `books`.

<details><summary>Mostrar solución</summary>

```sql
DELETE FROM books WHERE title = '1984 - Edición Especial';
```
</details>

---

8. Elimina el miembro "Sara Pérez" de la tabla `members`.

<details><summary>Mostrar solución</summary>

```sql
DELETE FROM members WHERE name = 'Sara Pérez';
```
</details>

---
---
