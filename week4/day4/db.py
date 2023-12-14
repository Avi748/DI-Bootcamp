import psycopg2
import os 
from dotenv import load_dotenv

# Establish a connection
# conn = psycopg2.connect(
#     dbname = 'ojnieejm',
#     user = 'ojnieejm',
#     password = 'gzOKovxSV4XmLCm-l5YryVc_0jBeEaD1',
#     host = 'flora.db.elephantsql.com',
#     port = '5432'
# )

# Load variables from the .env file into the connect
load_dotenv()

# Retrieve database crendetials from env
# db_name = os.getenv('DB_NAME')
# db_user = os.getenv('DB_USER')
# db_password = os.getenv('DB_PASS')
# db_hot = os.getenv('DB_HOST')
# db_port = os.getenv('PORT')

conn = psycopg2.connect(
    dbname = os.getenv('DB_NAME'),
    user = os.getenv('DB_USER'),
    password = os.getenv('DB_PASS'),
    host = os.getenv('DB_HOST'),
    port = os.getenv('PORT')
)

# Create a cursur object to execute SQL queries
cur = conn.cursor()

# CRUD - create(insert)  Read(select)  Update(update)  Delete(delete)

# Insert query
# insert_query = 'INSERT INTO products(name, price) VALUES(%s, %s)'
# data_to_insert = ('iKey', 750) 
# cur.execute(insert_query, data_to_insert)
# cur.execute('INSERT INTO products(name, price), VALUES(%s, %s)',('iKey', 750) )


# Update query

# update_query = 'UPDATE products SET name = %s, price = %s WHERE id = %s'
# update_value = ('iPhone15', 1500, 4)
# cur.execute(update_query, update_value)

# Delete query
cur.execute('DELETE FROM products WHERE id = %s', ('4'))

#commit
conn.commit()

#rollback
conn.rollback()

# Execute a SELECT query
cur.execute('SELECT * FROM products')
rows = cur.fetchall()

for row in rows:
    print(row)



# Close the cursur and the connection
cur.close()
conn.close()