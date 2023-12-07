# class Circle:
#     color = "red"

#     def __init__(self, diameter):
#         self.diameter = diameter

#     def grow(self, factor=2):
#         self.diameter = self.diameter * factor

#     def get_color(self):
#         return Circle.color

#     def change_color(self, color):
#         self.color = color
#         return self.color


# circle1 = Circle(2)
# print(circle1.color)
# circle1.change_color("blue")
# print(Circle.color)
# print(circle1.get_color())
# circle1.grow(3)
# print(circle1.diameter)


# class Currency:

#     def __init__(self, label, amount) -> None:
#         self.label = label
#         self.amount = amount

#     def __str__(self):
#         return f"{self.amount} {self.label}"
    
#     def __int__(self):
#         return int(self.amount)
    
#     def __repr__(self): #target to the developers
#         return f"{self.amount} {self.label}"
    
#     def __add__(self, other):
#         if type(other) == int:
#             return self.amount + other
        
#         elif self.label == other.label:
#             return self.amount + other.amount
        
#         else:
#             raise TypeError ("Impossible to add different labels")
        
#     def __iadd__(self, other):
#         if type(other) == int:
#             self.amount += other
#             return self
        
#         elif self.label == other.label:
#             self.amount += other.amount
#             return self
        
#         else:
#             raise TypeError ("different labels")
          


# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# # print(c1)
# # print(int(c1))
# # print(repr(c1))

# print(c1 + 5)
# print(c1 + c2)
# # print(c1 + c3) # raise error
# c1 += 5
# print(c1)




class Circle:

    def __init__(self, radius, diameter) -> None:
        self.radius = radius
        self.diameter = radius * 2

    @classmethod
    def from_radius(cls, radius):
        return cls(radius = radius, diameter = radius * 2)
    
    def area(self):
        pass

    def __str__(self):
        pass

    def __add__(self, other):
        return self.diameter + other.diameter

    def __gt__(self, other):
        pass

    def __eq__(self, other):
        pass

    def sort_circles(self, lts:list):
        lts.append(self)
        result = sorted(lts)
        return result

c1 = Circle.from_radius(10)
c2 = Circle.from_radius(5)
print(c1.diameter)

circles = [c1, c2]
s_circles = circles.sort_circles(circles)

for circle in s_circles:
    print(circles.diameter)