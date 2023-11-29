# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }

# wallet = "$300"

# def can_afford(wallet:str, items_dict:dict): #:str , #:dict just for decotionary
#     '''A function that checks in a dict of items and prices
#     if can buy. Arguments = wallet and items_dict'''
#     can_buy = []
#     #cleaning the dollar sign
#     wallet_clean = wallet.strip('$')
#     for product, price in items_dict.items():
#         #cleaning the data
#         price_clean = price.strip('$').replace(',', '')
#         #converting the str to int
#         price_clean = int(price_clean)
#         wallet_clean = int(wallet_clean)

#         #Checking what can affort
#         if price_clean > wallet_clean:
#             continue  
#         else:
#             can_buy.append(product)
#             wallet_clean -= price_clean

#     return print(f'you can buy : {can_buy} and you have {wallet_clean} dollars in your wallet')


# items_purchase = {
#   "Apple": "$4",
#   "Honey": "$3",
#   "Fan": "$14",
#   "Bananas": "$4",
#   "Pan": "$100",
#   "Spoon": "$2"
# }

# wallet = "$100" 

# can_afford(wallet, items_purchase)


def say_hello(username, language):
    if language == "EN":
        print("Hello "+username)
    elif language == "FR":
        print("Bonjour "+username)
    else:
        print("This language is not supported: " + language)

username = "Rick"
language = "FR"

# say_hello(username, language) # Variable arguments
# say_hello("Rick", "FR") # Possitional arguments
# say_hello(username="Rick", language="FR") # Keyword arguments
# say_hello("Rick", language="EN") # Mixed argument: 1st has to be positional


# Default value in arguments
# def say_hello(username, language = 'EN'): # Default argument 'EN'
#     if language == "EN":
#         print("Hello "+username)
#     elif language == "FR":
#         print("Bonjour "+username)
#     else:
#         print("This language is not supported: " + language)

# say_hello("Avi")


# Local Scope
# def number_by_three(name, day):
#   #local scope
#   sentence = 'Hello {}! Today is {}.'.format(name, day)
#   print(sentence)

# print(day) # Impossible to use the variables from the local scope in the global scope


# Global Scope
# name = 'Avi'
# def say_hi(name):
#   name = name.upper()
#   print(name)

# say_hi(name)

# def square(number:int)-> int:
#    num_square = number**2
#    return num_square

# print(square(2))

def country_info(country):
    if country == "Israel":
        population = 9364000
        capital = "Jarusalem"
    if country == "Russia":
        population = 143400000
        capital = "Moscow"
    if country == "Brazil":
        population = 214300000
        capital = "Brasilia"

    return(population, capital)

a,b = country_info("Israel")
print(f'The population is : {a} The capital is: {b}')
c = country_info("Israel")
print(f'Only population is : {c[0]}')

# def calculation(num1:int, num2:int)-> tuple:
#     add = num1 + num2
#     sub = num1 - num2

#     return add, sub

# a,b = calculation(8, 4)
# # print(a, b)

# def highest_even(li):
#     evens = []
#     for item in li:
#         if item % 2 == 0:
#             evens.append(item)
#     return max(evens)
    
# print(highest_even([2,10,3,4,8,11]))