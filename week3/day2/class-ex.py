class Door():
    def __init__(self, is_opend) -> None:
        self.is_open = is_opend

    def open_door(self):
        if self.is_open is True:
            return self.is_open

    def close_door(self):
        if self.is_open is False:
            return self.is_open


class BlockedDoor(Door):
    def __init__(self, is_opend) -> None:
        super().__init__(is_opend)
        raise Exception("Blocked door can't open")
    
a = Door(False)
print(a.open_door())
print(a.close_door())

d = BlockedDoor(True)
d.open_door()