class Circle:
    color = "red"

    def __init__(self, diameter):
        self.diameter = diameter

    def grow(self, factor=2):
        self.diameter = self.diameter * factor

    def get_color(self):
        return Circle.color

    def change_color(self, color):
        self.color = color
        return self.color


circle1 = Circle(2)
print(circle1.color)
circle1.change_color("blue")
print(Circle.color)
print(circle1.get_color())
circle1.grow(3)
print(circle1.diameter)
