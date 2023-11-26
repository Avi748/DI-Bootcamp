#GETTING STARTED

#STRINGS

# print('Hello World in Python')

# print('PYTHON is fun'.lower())

# print('hello world in HTML'.replace('HTML','Python')) #This method get argument

# #2ND VALUE TYPE: NUMBERS
# #A) Integers: values not decimal

# a = 5
# b = 3

# print(type(a))

# #B) Floats:
# 5.5
# 2.77

# print(5 + 7)
# print(13 // 2)
# print(15 % 2)

# my_age = '29'
# answer = my_age + 123879
# print(answer)

# str_age = int(my_age)
# print(type(my_age))

# my_age_f = str_age + 123879
# print(my_age_f)

# print('1th', 5 is '5')
# print('2th', 5 is not '5')
# print('3th', 5 is '5' and 3 == 3)
# print('4th', 5 is '5' and 3 != 3)
# print('5th', 5 is '5' or 3 != 3)
# print('6th', 5 is '5' or 3 == 3)

# EX1

cars = 100 #The amount of cars
space_in_a_car = 4.0 #The amount of space inside the cars
drivers = 30 #The amount of drivers
passengers = 90 #The amount of passengers
cars_not_driven = cars - drivers #Calculate the numbers of cars that not been driven 
cars_driven = drivers #The numbers of cars that have been driven is equale to the numbers of drivers
carpool_capacity = cars_driven * space_in_a_car #Calculate the 
average_passengers_per_car = passengers / cars_driven


# print("There are", cars, "cars available.")
# print("There are only", drivers, "drivers available.")
# print("There will be", cars_not_driven, "empty cars today.")
# print("We can transport", carpool_capacity, "people today.")
# print("We have", passengers, "to carpool today.")
# print("We need to put about", average_passengers_per_car,"in each car.")

# user_name = input('give me your name: ')
# user_age = int(input('give me your age: '))
# in_years = user_age * 5

# print(in_years)

age = int(input('How old are you?' ))
print(f"You are {age} years old")

if age > 18:
    print("You are an adult")