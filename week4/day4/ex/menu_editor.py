import psycopg2
import os 
from dotenv import load_dotenv

load_dotenv()

def connect_to_db():
    conn = psycopg2.connect(
        dbname = os.getenv('DB_NAME'),
        user = os.getenv('DB_USER'),
        password = os.getenv('DB_PASS'),
        host = os.getenv('DB_HOST'),
        port = os.getenv('PORT')
    )
    return conn

def show_user_menu():
    print("1. Add an item")
    print("2. Update an item")
    print("3. Delete an item")
    print("4. Show the Menu")
    print("0. Exit \n")


def add_item_to_menu(conn, name, price):
    cur = conn.cursor()
    cur.execute("INSERT INTO Menu_items(item_name, item_price) VALUES (%s, %s)", (name, price))
    conn.commit()
    cur.close()


def remove_item_from_menu(conn, id):
    cur = conn.cursor()
    cur.execute("DELETE FROM Menu_items WHERE item_id = %s", (id))
    conn.commit()
    cur.close()


def update_user(conn, new_item, new_price, old_item_name, old_item_price, id):
    cur = conn.cursor()
    cur.execute("UPDATE Menu_items SET item_name = %s, item_price = %s WHERE item_name = %s OR item_price = %s OR item_id = %s",
                (new_item, new_price, old_item_name, old_item_price, id))
    conn.commit()
    cur.close()

def show_restaurant_menu(conn):
    cur = conn.cursor()
    cur.execute("SELECT * FROM Menu_items")
    rows = cur.fetchall()
    for row in rows:
        print(f'{row}\n')
    cur.close()

def get_user_input(prompt):
    return input(prompt)


def main():
    conn = connect_to_db()
    while True:
        show_user_menu()
        choice = get_user_input("Enter your choice: ")

        if choice == "1":
            print("Add a item:")
            item = get_user_input("Enter item name: ")
            price = get_user_input("Enter a price: ")
            add_item_to_menu(conn, item, price)
            print("item was added successfully.")

        elif choice == "2":
            print("Update an item:")
            new_item_name = get_user_input("Enter a new item name to update: ")
            new_item_price = get_user_input("Enter a new item price to update: ")
            old_item_name = get_user_input("Enter the old item name you want to change: ")
            old_item_price = get_user_input("Enter the old item price you want to change: ")
            item_id = get_user_input("Enter the id of the item you want to change: ")
            update_user(conn, new_item_name, new_item_price, old_item_name, old_item_price, item_id)
            print("User updated successfully.")

        elif choice == "3":
            print("Delete an item: ")
            item_id = get_user_input("Enter item id to delete: ")
            remove_item_from_menu(conn, item_id)
            print("User deleted successfully.")

        elif choice == "4":
            print("All Users:")
            show_restaurant_menu(conn)

        elif choice == "0":
            break
        else:
            print("Invalid choice. Please try again.")

    conn.close()


if __name__ == "__main__":
    main()