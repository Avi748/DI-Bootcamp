--1
SELECT COUNT(first_name)
FROM actors

--2 Error - because the value can't be null
INSERT INTO actors(first_name, last_name, age, number_oscars)
VALUES ('Keanu', 'Reeves', '1964-09-02')



SELECT * FROM actors

-- INSERT INTO actors(first_name, last_name, age, number_oscars)
-- VALUES ('Angelina', 'Jolie', '1975-06-04', 1)

-- INSERT INTO actors(first_name, last_name, age, number_oscars)
-- VALUES ('Jennifer', 'Aniston', '1969-02-11', 0)

-- INSERT INTO actors(first_name, last_name, age, number_oscars)
-- VALUES ('George', 'Clooney', '1961-06-05', 2),
-- ('Matt', 'Damon', '1970-08-10', 5),
-- ('Denzel', 'Washington', '1954-12-28', 2)

-- CREATE TABLE actors (
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- )