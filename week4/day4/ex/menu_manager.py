import menu_item

class MenuManager:
    def __init__(self) -> None:
        pass

    def get_by_name(self, name):
        menu_item.cur.execute('SELECT * FROM Menu_items WHERE item_name = %s', [name])
        rows = menu_item.cur.fetchall()
        for row in rows:
            return row
        
    def all_items(self):
        menu_item.cur.execute('SELECT * FROM Menu_items')
        rows = menu_item.cur.fetchall()
        for row in rows:
            print(row)


manager = MenuManager()
# print(manager.get_by_name('mac'))
manager.all_items()

# Close the cursur and the connection
menu_item.cur.close()
menu_item.conn.close()