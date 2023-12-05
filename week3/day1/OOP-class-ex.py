# class Dogs():
#     def __init__(self, name, color, height, weight, favorite_toys):
#         print("an object was created")
#         self.name = name
#         self.color = color
#         self.height = height
#         self.weight = weight
#         self.favorite_toys = favorite_toys



# johnatan_dog = Dogs("Tyson", "Brown", "21", "45", ["ball", "rope"])
# print(johnatan_dog.name, johnatan_dog.color, johnatan_dog.height, johnatan_dog.weight, johnatan_dog.favorite_toys)
# johnatan_dog.favorite_toys.append("doll")
# print(johnatan_dog.favorite_toys)


# class Person():
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def show_details(self):
#         print("Hello my name is " + self.name)
    
#     def rename(self, new_name):
#         self.name = new_name
#         return self.name


# first_person = Person("John", 36)
# first_person.show_details()
# first_person.rename("Avi")
# first_person.show_details()


# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# cat1 = Cat("Monday", 6)
# cat2 = Cat("Tuna", 3)
# cat3 = Cat("Austin", 13)

# cat_l = [cat1, cat2, cat3]

# def oldest(cats_l:list):
#     oldest = [cats_l[0]]
#     for cat in cat_l:
#         if cat.age > oldest[0].age:
#             oldest[0] = cat
#     return oldest 


# oldest_cat = oldest(cat_l)
# print(f"The oldest cat is {oldest_cat[0].name} and it's {oldest_cat[0].age} years old")



#EX4

class Zoo():
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []

    def add_animal(self, *new_animal):
        for animal in new_animal:
            if animal in self.animals:
                print("Animal already in the list")
            else:
                self.animals.append(animal)

    def get_animals(self):
        print(self.animals)

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        groups = {}
        for i, animal in enumerate(sorted_animals):
            first_letter = animal[0]
            if first_letter not in groups:
                # groups.update({first_letter:animal})
                groups.update({first_letter:[animal]})
            else:
                groups[first_letter].append(animal)

        return groups
    
    def get_groups(self):
        groups_dict = self.sort_animals()
        new_dict = {}
        for i, group in enumerate(groups_dict):
            new_dict.update({i + 1 :groups_dict[group]})
        return new_dict




safari_rg = Zoo("Safari Rmant Gan")
safari_rg.add_animal("Giraffe", "Monkey", "Lion", "Bear", "Baboon", "Ape", "Lizard")
safari_rg.get_animals()
print(safari_rg.sort_animals())
print(safari_rg.get_groups())

    



