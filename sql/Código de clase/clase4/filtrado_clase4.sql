##Filtrado de datos --> where
use sakila;

SELECT * FROM actor;

SELECT first_name AS Nombre, last_name AS Apellido FROM actor;

SELECT first_name AS Nombre, last_name AS Apellido
FROM actor
WHERE first_name="cameron"
ORDER BY first_name DESC;

SELECT first_name AS Nombre, last_name AS Apellido
FROM actor
WHERE (first_name="cameron" AND last_name="streep") OR (first_name="penelope" AND last_name="monroe");

SELECT first_name AS Nombre, last_name AS Apellido
FROM actor
WHERE  NOT(first_name = "cameron"); ## first_name != "cameron"

SELECT * FROM film;

SELECT title, length
FROM film
WHERE length > 50
ORDER BY length;

SELECT title, description, length, rental_duration
FROM film
WHERE rental_duration > 4 AND rental_duration < 7
ORDER BY rental_duration;

SELECT title, description, length, rental_duration
FROM film
WHERE (rental_duration > 4 AND rental_duration < 7) OR length > 100
ORDER BY rental_duration;

SELECT *
FROM actor
WHERE first_name LIKE "%ed";

SELECT * from actor;

SELECT first_name, last_name, last_update
FROM actor
WHERE first_name LIKE "c%" AND month(last_update) = 2;

select hour(now());
select minute(now());

##campos calculados
SELECT first_name, last_name, round(datediff(curdate(),last_update)/365) AS "Date"
FROM actor;

Select * from film;

SELECT count(rating) FROM film WHERE rating='PG';
SELECT count(rating) FROM film WHERE rating='G';

SELECT rating, avg(length) FROM film;

SELECT rating, count(rating) FROM film GROUP BY rating;

SELECT rating, round(sum(length)/60) FROM film GROUP BY rating;

## max dev el mayor valor encontrado
##min dev el menor valor encontrado
SELECT rating, max(length) FROM film GROUP BY rating;
SELECT rating, min(length) FROM film GROUP BY rating;

SELECT max(length) FROM film;
SELECT min(length) FROM film;


use mecanicos;
select * from mecanicos;
select * from autobus WHERE nro_interno = 1;

## conculta a multiples tablas
SELECT mecanicos.nombre, autobus.marca, autobus.patente
FROM mecanicos, autobus
WHERE mecanicos.nro_interno = autobus.nro_interno;



