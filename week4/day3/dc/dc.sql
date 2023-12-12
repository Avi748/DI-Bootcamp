--dc
--P1
CREATE TABLE Customer (
	id serial PRIMARY KEY,
	first_name varchar(50) NOT NULL,
	last_name varchar(50) NOT NULL
)

CREATE TABLE Customer_profile (
	id serial PRIMARY KEY,
	isLoggedIn boolean DEFAULT false,
	customer_id integer NOT NULL,
	
	FOREIGN KEY (customer_id) REFERENCES Customer(id)
)

INSERT INTO Customer(first_name, last_name)
VALUES ('John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive')

SELECT * FROM Customer

INSERT INTO Customer_profile (isLoggedIn, customer_id)
VALUES (true, 1), (false, 2)

SELECT * FROM Customer AS c
INNER JOIN Customer_profile AS cp
ON c.id = cp.customer_id
WHERE cp.isLoggedIn IS true

SELECT * FROM Customer AS c
FULL JOIN Customer_profile AS cp
ON c.id = cp.customer_id

SELECT SUM(c.id) FROM Customer AS c
INNER JOIN Customer_profile AS cp
ON c.id = cp.customer_id
WHERE cp.isLoggedIn IS false



--P2
--1
CREATE TABLE Book (
	book_id serial PRIMARY KEY,
	title varchar(100) NOT NULL,
	author varchar(50) NOT NULL
)

--2
INSERT INTO Book (title, author)
VALUES ('Alice In Wonderland', 'Lewis Carroll'),
		('Harry Potter', 'J.K Rowling'),
		('To kill a mockingbird', 'Harper Lee')
		
SELECT * FROM Book

--3
CREATE TABLE Student (
	student_id serial PRIMARY KEY,
	name varchar(50) UNIQUE NOT NULL,
	age integer CHECK (age <= 15)
)

--4
INSERT INTO Student (name, age)
VALUES ('John', 12), ('Lera', 11), ('Patrick', 10), ('Bob', 14)

SELECT * FROM Student

--5
CREATE TABLE Library (
	book_fk_id integer,
	student_id integer,
	borrowed_date date,
	
	FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (student_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
)

--6
INSERT INTO Library(book_fk_id, student_id, borrowed_date)
VALUES (1, 1, '2022-02-15'), (3, 4, '2021-03-03'), (1, 2, '2021-05-23'), (2, 4, '2021-08-12')

--7
SELECT * FROM Library

SELECT s.name, b.title FROM Student AS s
INNER JOIN Library AS l
ON s.student_id = l.student_id
INNER JOIN Book AS b
ON l.book_fk_id = b.book_id

SELECT AVG(s.age) FROM Student AS s
INNER JOIN Library AS l
ON s.student_id = l.student_id
INNER JOIN Book AS b
ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland'


DELETE FROM Student
WHERE name = 'John'

SELECT s.name, b.title FROM Student AS s
INNER JOIN Library AS l
ON s.student_id = l.student_id
INNER JOIN Book AS b
ON l.book_fk_id = b.book_id