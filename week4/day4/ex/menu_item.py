import psycopg2
import os 
from dotenv import load_dotenv

# Load variables from the .env file into the connect
load_dotenv()

conn = psycopg2.connect(
    dbname = os.getenv('DB_NAME'),
    user = os.getenv('DB_USER'),
    password = os.getenv('DB_PASS'),
    host = os.getenv('DB_HOST'),
    port = os.getenv('PORT')
)

# Create a cursur object to execute SQL queries
cur = conn.cursor()

class MenuItem:
    def __init__(self, name, price) -> None:
        self.name = name
        self.price = price
        insert_query = 'INSERT INTO Menu_items(item_name, item_price) VALUES(%s, %s)'
        data_to_insert = (self.name, self.price) 
        cur.execute(insert_query, data_to_insert)

    
    def save(self):
        conn.commit()

    def update(self ,new_name, new_price , item_id):
        self.name = new_name
        self.price = new_price
        self.id = item_id
        cur.execute('UPDATE Menu_items SET item_name = %s, item_price = %s WHERE item_id = %s',(new_name, new_price, self.id))

    def delete(self , del_id):
        cur.execute('DELETE FROM Menu_items WHERE item_id = %s',[del_id])
        
if __name__ == "__main__":    
    item1 = MenuItem('pc', 4000)
    item2 = MenuItem('mac', 2000)
    item1.save()
    # item1.commit()
    # item1.update('iwatch', 1000, 2)
    # item1.delete(2)

