import math

class Circle():
    def __init__(self, radius, diameter): #JULIANA: add here also the d so you still can create using both values
        self.radius = radius
        self.diameter = diameter

    #JULIANA: You need to be able to create a circle either from d or r. 
    #For that you have some options: create an if statement in your innit or use a decorator.

    # def diameter(self):
    #     return self.radius*2

    @classmethod
    def from_radius(cls, radius):
        return cls(radius = radius, diameter = radius *2)
    
    @classmethod
    def from_diameter(cls, diameter):
        return cls(radius = diameter /2 , diameter = diameter)

    
    def __str__(self) -> str:
        return f"Circle radius is : {self.radius}, Circle diameter is : {self.diameter}"#JULIANA: You had a problem here because you added () after an attribut. We use () when calling methods, not in attributes
    
    def __add__(self, other):
        return self.radius + other.radius
    
    def __eq__(self, other): #compare two circles and see if there are equal
        return self.radius == other.radius
    
    def __gt__(self, other): #compare two circles to see which is bigger
        return self.radius > other.radius

    def area(self):
        return self.radius**2*math.pi

    #JULIANA: Conceptually, the following method is not a classmethod and is not needed, you can add a circle to a list normally.
    # @classmethod
    # def add_to_list(cls, *args):
    #     c_list = []
    #     c_list.append(sorted(args))
    #     return c_list

    #JULIANA: To sort the circles you can use this:    
    def sort_circles(self, lts:list):
        lts.append(self)
        result = sorted(lts, key=lambda circle: circle.radius)
        return result


# c1 = Circle(8)
# c2 = Circle(4)

#JULIANA: now that you have the classmethods you have 3 options to create the objects:
c1 = Circle.from_diameter(100)
c2 = Circle.from_radius(25)
c3 = Circle(10,5)


#JULIANA: The idea of the dunder methods is not to call them, they will be called automatically behind the cortain.
#What you did here (explicit calling them) will work but it is not the concept.
print(c1.__eq__(c2)) 
print(str(c1))
print(str(c2))
print(c1.__add__(c2))
print(c1.__eq__(c2)) 
print(c1.__gt__(c2))

# That's how you should use them:
print('JULIANAS DUNDERS CALLING: \n')
print(c1 == c2)
print(c1)
print(c2)
print(c1 + c2)
print(c1 == c2)
print(c1 > c2)

print(c1.area())

# print(Circle.add_to_list(c1.radius, c2.radius))
sorted_circles = c1.sort_circles([c2,c3])
for circle in sorted_circles:
    print('d = ' , circle.diameter)
