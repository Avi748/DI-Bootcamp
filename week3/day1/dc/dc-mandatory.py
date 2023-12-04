
class Farm():
    def __init__(self, name):
        self.name = name
        self.animals = {}

    def add_animal(self, animal_name, amount = 1):
        self.anime_name = animal_name
        self.amount = amount
        self.animals[animal_name] = amount

    def get_info(self):
        for a in self.animals.items():
            print(*a)

macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
macdonald.get_info()