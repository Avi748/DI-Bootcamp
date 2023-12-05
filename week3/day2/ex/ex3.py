from ex import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight, trained = False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True
        return self.trained
    
    def play(self, *args):
        dog_names = [self.name]
        for dog in args:
            dog_names.append(dog.name)
        display_dogs = " and ".join(dog_names)
        print(f"{display_dogs} all play together")

    def do_a_trick(self):
        trick_list = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
        if self.trained:
            rando = random.choice(trick_list)
            print(f"{self.name} {rando}")
        else:
            print(f"{self.name} is not trained")


avi_dog = PetDog("Rex", 4, 40, True)
yon_dog = PetDog("Lac", 8, 50)
iris_dog = PetDog("Sam", 12, 49)

avi_dog.play(yon_dog, iris_dog)
avi_dog.do_a_trick()
