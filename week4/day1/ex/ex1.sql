--1
SELECT * FROM items

--2
SELECT * FROM items
WHERE price > 80

--3
SELECT * FROM items
WHERE price <= 300

--4 empty result
SELECT * FROM customers
WHERE last_name = 'Smith'

--5
SELECT * FROM customers
WHERE last_name = 'Jones'

--6
SELECT * FROM customers
WHERE NOT name = 'Scott'
