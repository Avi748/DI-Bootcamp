--1
SELECT * FROM students

--2
SELECT first_name, last_name FROM students

--1--
SELECT first_name, last_name FROM students
WHERE id = '2'

--2--
SELECT first_name, last_name FROM students
WHERE last_name = 'Benichou' AND first_name = 'Marc'

--3--
SELECT first_name, last_name FROM students
WHERE last_name = 'Benichou' OR first_name = 'Marc'

--4--
SELECT first_name, last_name FROM students
WHERE first_name LIKE '%a%'

--5 NOTE: the name Amelia start with an upper A but it not showing with lower a --
SELECT first_name, last_name FROM students
WHERE first_name LIKE 'A%'

--6--
SELECT first_name, last_name FROM students
WHERE first_name LIKE '%a'

--7--
SELECT first_name, last_name FROM students
WHERE first_name LIKE '%a_'

--8--
SELECT first_name, last_name FROM students
WHERE id = '1' and id = '3'


--4
SELECT * FROM students
WHERE birth_date >= '1-01-2000'