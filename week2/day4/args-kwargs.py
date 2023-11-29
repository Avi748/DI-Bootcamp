#args = *

def print_names(*args):
    for name in args:
        print(name)

# print_names('David')

#kwargs = **

def print_info(**info):
    print(info)

# print_info(name = "Viktor", age = 25, address = "Holon")
# print_info(address = (5,7), score = [25, 47, 899])


#args + kwargs

def gamer_info(*args, **kwargs):
    print(max(args))
    print(kwargs)

# gamer_info(150, 125, 544, 534, name = "John", lastname = "Done", age = 23)

def super_func(*args, **kwargs):
    total = 0
    for items in kwargs.values():
        total += items
    return sum(args) + total

print(super_func(1,2,3,4,5, num1=5, num2=10))