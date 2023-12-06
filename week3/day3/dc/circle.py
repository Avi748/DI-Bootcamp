import math

class Circle():
    def __init__(self, radius):
        self.radius = radius

    def diameter(self):
        return self.radius*2
    
    def __str__(self) -> str:
        return f"Circle radius is : {self.radius}, Circle diameter is : {self.diameter()}"
    
    def __add__(self, other):
        return self.radius + other.radius
    
    def __eq__(self, other): #compare two circles and see if there are equal
        return self.radius == other.radius
    
    def __gt__(self, other): #compare two circles to see which is bigger
        return self.radius > other.radius

    def area(self):
        return self.radius**2*math.pi

    @classmethod
    def add_to_list(cls, *args):
        c_list = []
        c_list.append(sorted(args))
        return c_list


c1 = Circle(8)
c2 = Circle(4)

print(str(c1))
print(str(c2))

print(c1.__add__(c2))
print(c1.__eq__(c2))
print(c1.__gt__(c2))

print(c1.area())

print(Circle.add_to_list(c1.radius, c2.radius))
