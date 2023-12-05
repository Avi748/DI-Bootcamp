#1
# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# class Siamesa(Cat):
#     pass

# cat1 = Bengal("Monday", 3)
# cat2 = Chartreux("Tuna", 8)
# cat3 = Siamesa("Austin", 6)

# all_cats = [cat1, cat2, cat3]

# sarah_pets = Pets(all_cats)
# sarah_pets.walk()



#2
# class Dog():
#     def __init__(self, name, age, weight):
#         self.name = name
#         self.age = age
#         self.weight = weight

#     def bark(self):
#         print(f'{self.name} is barking!')

#     def run_speed(self):
#         speed = (self.weight / self.age) * 10
#         return speed
    
#     def fight(self, other_dog):
#         d1 = self.run_speed()
#         d2 = other_dog.run_speed()
#         if d1 > d2:
#             print(f"{self.name} is the winner")
#         elif d2 > d1:
#             print(f"{other_dog.name} is the winner")
#         else:
#             print("Its a Tie")


#     def other_dog(self):
#         x = self.run_speed()
#         winner = x * self.weight
#         # print(winner)
#         return winner

# dog1 = Dog("Rex", 4, 40)
# dog2 = Dog("Lac", 8, 50)
# dog3 = Dog("Sam", 12, 49)

# dog1.other_dog()
# dog2.other_dog()
# dog3.other_dog()

# dog1.fight(dog2)


#4
class Family():
    family_m = []
    def __init__(self, last_name) -> None:
        self.last_name = last_name
        

    def born(self, **kwargs):
        self.family_m.append(kwargs)
        print(f"Congratulations {kwargs} is added to the family")

    def is_18(self, family_name):
        for i in self.family_m:
            if i["name"] == family_name:
                age = i["age"]
                if age >= 18:
                    return True
                else:
                    return False
    
    def family_presentation(self):
        print(f"last name is: {self.last_name} and family members are: {self.family_m}")


class TheIncredibles(Family):
    def __init__(self, last_name) -> None:
        super().__init__(last_name)

    def use_power(self, name, power):
        if self.is_18(name):
            print(f"{self.last_name} power is: {power}")
        else:
            raise Exception("Power can be use if age is over 18")
        
    def increadible_presentation(self):
        print("Here is our powerful family")
        self.family_presentation()


member_1 = TheIncredibles("MikeFly")
member_1.born(name = "Michael", age = 35, gender = "Male", is_child = False)
member_1.use_power("Michael","fly")

member_2 = TheIncredibles("SuperWomen")
member_2.born(name = "Sarah", age = 32, gender = "Female", is_child = False)
member_2.use_power("Sarah","read minds")
member_1.increadible_presentation()

# member_3 = TheIncredibles("Baby Jack")
# member_3.born(name = "Jack", age = 1, gender = "Male", is_child = True)
# member_3.use_power("Jack","unknow power")
# member_3.increadible_presentation()
