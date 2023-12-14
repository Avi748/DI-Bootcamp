CREATE TABLE Menu_items(
	item_id serial PRIMARY KEY,
	item_name varchar(30) NOT NULL,
	item_price smallint DEFAULT 0
)

DROP TABLE Menu_items

SELECT * FROM Menu_items