--EX1
--1
SELECT * FROM language

--2
SELECT f.title, f.description, l.name
FROM film AS f
INNER JOIN language AS l
ON f.language_id = l.language_id

--3
SELECT f.title, f.description, l.name
FROM film AS f
RIGHT JOIN language AS l
ON f.language_id = l.language_id

--4
CREATE TABLE new_film (
	id serial PRIMARY KEY,
	name varchar(100)
)

INSERT INTO new_film (name)
VALUES('The Book of Eli'), ('The Equalizer'), ('Flight')

SELECT * FROM new_film

--5
CREATE TABLE customer_review (
	review_id serial PRIMARY KEY NOT NULL,
	film_id int NOT NULL,
	language_id int NOT NULL,
	title varchar(1000),
	score int NOT NULL CHECK (score >= 1 and score <= 10) ,
	review_text text,
	last_update timestamp,
	
	FOREIGN KEY (film_id) REFERENCES new_film(id),
	FOREIGN KEY (language_id) REFERENCES language(language_id)
)

--6
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES (1, 1,'Training Day', 9, 'Great movie'),
		(2, 2, 'The Equalizer 2', 8, 'Good movie')

--7 I get an Error because the table customer_review have a reference with the id in new_film table
DELETE FROM new_film
WHERE id = 1;



--EX2
--1
SELECT * FROM film AS f
INNER JOIN language AS l
ON f.language_id = l.language_id
WHERE f.title = 'Chamber Italian'

UPDATE film
SET language_id = 2
WHERE title = 'Chamber Italian'

--2
-- customer have a references with store id in store table and address id from the address table,
-- if i want to create a new customer i need to insert id for store and address
SELECT * FROM customer

--3
DROP TABLE customer_review

--4
SELECT * FROM rental
WHERE return_date IS NULL

--5
SELECT f.film_id, f.title, f.replacement_cost, i.inventory_id, r.rental_id, r.return_date FROM film AS f
INNER JOIN inventory AS i ON f.film_id = i.film_id
INNER JOIN rental AS r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NULL
ORDER BY f.replacement_cost DESC
LIMIT 30;

--6
--1
SELECT * FROM film AS f
INNER JOIN film_actor AS fa
ON f.film_id = fa.film_id
INNER JOIN actor AS a
ON fa.actor_id = a.actor_id
WHERE a.first_name = 'Penelope' AND a.last_name = 'Monroe' AND f.description LIKE '%Sumo Wrestler%'

--2
SELECT * FROM film AS f
WHERE f.length < 60 AND f.rating = 'R' AND f.description LIKE '%Documentary%'

--3
SELECT f.film_id, f.title, c.first_name, c.last_name, f.rental_rate, r.return_date FROM film AS f
INNER JOIN inventory AS i
ON f.film_id = i.film_id
INNER JOIN rental AS r
ON r.inventory_id = i.inventory_id
INNER JOIN customer AS c
ON c.customer_id = r.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan' AND f.rental_rate > 4
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01'

--4
SELECT f.film_id, f.title, f.description, f.replacement_cost, c.first_name, c.last_name FROM film AS f
INNER JOIN inventory AS i
ON f.film_id = i.film_id
INNER JOIN rental AS r
ON r.inventory_id = i.inventory_id
INNER JOIN customer AS c
ON c.customer_id = r.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan' AND f.description LIKE '%Boat%'
ORDER BY f.replacement_cost DESC
LIMIT 1;




