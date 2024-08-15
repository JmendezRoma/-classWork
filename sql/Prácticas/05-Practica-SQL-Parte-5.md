<div align= "center">[◀️ Anterior](./04-Practica-SQL-Parte-4.md) | [📋 Ejercicios](./README.md)</div>

---

## Ejercicio 5

Para realizar este ejercicio debes usar la base de datos de ejemplo de Sakila. Sigue los siguientes pasos:

1. Utiliza INNER JOIN para obtener las columnas `first_name` y `last_name` de la tabla `customer` y `address` de la tabla `address`.

<details><summary>Mostrar solución</summary>

```sql
SELECT c.first_name, c.last_name, a.address 
FROM customer c
INNER JOIN address a ON c.address_id = a.address_id;
```
</details>

---

2. Encuentra todos los clientes en la tabla `customer` que son activos y cuyo primer nombre es "MARY".

<details><summary>Mostrar solución</summary>

```sql
SELECT c.first_name, c.last_name
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id AND ci.city = 'Abha';
```
</details>

---

3. Encuentra todas las direcciones que no están vinculadas a ningún cliente en la tabla `address`.

<details><summary>Mostrar solución</summary>

```sql
SELECT a.address
FROM address a
LEFT JOIN customer c ON a.address_id = c.address_id
WHERE c.customer_id IS NULL;
```
</details>

---

4. Obtener el nombre y apellido de los clientes junto con el nombre de su ciudad.

<details><summary>Mostrar solución</summary>

```sql
SELECT c.first_name, c.last_name, ct.city
FROM customer c
INNER JOIN address a ON c.address_id = a.address_id
INNER JOIN city ct ON a.city_id = ct.city_id;
```
</details>

---
---

