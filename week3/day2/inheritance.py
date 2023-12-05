class Animal:
    def __init__(self, name, family, legs):
        self.name = name
        self.family = family
        self.legs = legs

    def make_sound(self):
        print(f" {self.name} is making a sound")

    def breath(self):
        print(f" {self.name} is breathing")


class Dog(Animal):
    def __init__(self, name, family = "Canidae", legs = 4, trained = False):
        super().__init__(name, family, legs)
        self.trained = trained
    
    def make_sound(self):
        print(f" {self.name} is BARKING!")

    def fetch_ball(self):
        print(f" {self.name} fetched the ball")

    def give_paw(self):
        if self.trained:
            print(f" {self.name} give a paw")
        else:
            print(f" {self.name} is not trained")


animal1 = Animal("Bobo", "Felidae", 4)
# print(animal1.family)

dog1 = Dog("Rex")
dog1.give_paw()
dog2 = Dog("Lassy", True)
dog2.give_paw()

# dog1.make_sound()
# dog1.breath()
# animal1.make_sound()

# raise Exception("Blocked door can't open")