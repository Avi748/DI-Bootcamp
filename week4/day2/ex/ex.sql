--EX1

SELECT * FROM items
ORDER BY price

SELECT * FROM items
WHERE price >= 80
ORDER BY price DESC

SELECT * FROM customers
ORDER BY name

SELECT last_name FROM customers
ORDER BY last_name DESC



--EX2
--1
SELECT * FROM customer

--2
SELECT first_name || ' ' || last_name AS full_name FROM customer

--3
SELECT DISTINCT create_date FROM customer

--4
SELECT * FROM customer
ORDER BY first_name DESC

--5
SELECT film_id, title, description, release_year, rental_rate FROM film
ORDER BY rental_rate ASC

--6
SELECT address, phone, district FROM address
WHERE district LIKE 'Texas'

--7
SELECT * FROM film
WHERE film_id = 15 OR film_id = 150

--8
SELECT film_id, title, description, length, rental_rate FROM film
WHERE title = 'The equalizer'

--9
SELECT film_id, title, description, length, rental_rate FROM film
WHERE title LIKE 'Th%'

--10
SELECT title, replacement_cost
FROM film
ORDER BY replacement_cost ASC
LIMIT 10

--12
SELECT * FROM payment
SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date
FROM customer as c
INNER JOIN payment as p ON c.customer_id = p.customer_id
ORDER BY customer_id

--13
SELECT * 
FROM film as f
LEFT JOIN inventory as i ON f.film_id = i.film_id
WHERE inventory_id IS NULL

--14
SELECT city.city, country.country FROM city
INNER JOIN country
ON city.country_id = country.country_id

--15
SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date, s.staff_id
FROM customer as c
INNER JOIN payment as p 
ON p.customer_id = c.customer_id
INNER JOIN staff as s
ON s.staff_id = p.staff_id
ORDER BY staff_id











