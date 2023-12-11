-- output 0 i'm not sure but i think is because the secondtab output is null
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

-- output 2 i think it only count id 6 and 7 because id 5 is also in secondtab and null values are not been counted
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

-- output 0
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

-- out put 2 same idea as before secondtab out return only the id with the value 5 
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

SELECT * FROM FirstTab
SELECT * FROM SecondTab