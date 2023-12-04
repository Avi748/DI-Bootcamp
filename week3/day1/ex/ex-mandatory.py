#1
# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# cat1 = Cat("Monday", 3)
# cat2 = Cat("Tuna", 8)
# cat3 = Cat("Austin", 6)

# def oldest_cat():
#     old = max(cat1.age, cat2.age, cat3.age)
#     if old == cat1.age:
#         return f"The oldest cat is {cat1.name}, and is {old} years old"
#     elif old == cat2.age:
#         return f"The oldest cat is {cat2.name}, and is {old} years old"
#     elif old == cat3.age:
#         return f"The oldest cat is {cat3.name}, and is {old} years old"

# print(oldest_cat())



#2
# class Dog():
#     def __init__(self, name, height):
#         self.name = name
#         self.height = height

#     def bark(self):
#         print(f'{self.name} goes woof!')

#     def jump(self):
#         x = self.height * 2
#         print(f'{self.name} jumps {x} cm high!')


# davids_dog = Dog("Rex", 50)
# print(f'David dog name is {davids_dog.name} and his height is {davids_dog.height}cm')
# davids_dog.bark()
# davids_dog.jump()

# sarahs_dog = Dog("Teacup", 20)
# print(f'David dog name is {sarahs_dog.name} and his height is {sarahs_dog.height}cm')
# sarahs_dog.bark()
# sarahs_dog.jump()

# if davids_dog.height > sarahs_dog.height:
#     print("David dog is bigger")
# else:
#     print("Sarah dog is bigger")




#3

# class Song():
#     def __init__(self, lyrics):
#         self.lyrics = lyrics

#     def sing_me_a_song(self):
#         print(f'{self.lyrics[0]} \n {self.lyrics[1]} \n {self.lyrics[2]}')

# stairway= Song(["There's a lady who's sure","all that glitters is gold", "and she's buying a stairway to heaven"])

# stairway.sing_me_a_song()



#4
class Zoo():
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
        else:
            print("The zoo already have that animal")

    def get_animals(self):
        print(*self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        else:
            print("The zoo don't have that animal")
            
    def sort_animals(self):
        print(sorted(self.animals))


ramat_gan_safari = Zoo("zoo")
ramat_gan_safari.add_animal("Ape")
ramat_gan_safari.get_animals()

ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Eel")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.get_animals()

ramat_gan_safari.sort_animals()
ramat_gan_safari.sell_animal("Ape")
ramat_gan_safari.get_animals()