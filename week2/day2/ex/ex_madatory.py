#1
# my_fav_numbers = {1,3,5,7,9}
# print(my_fav_numbers)
# my_fav_numbers.add(11)
# my_fav_numbers.add(13)
# print(my_fav_numbers)
# my_fav_numbers.remove(13)
# print(my_fav_numbers)

# friend_fav_numbers = {2,4,6,8}
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)


#2
#Yes it's possible by converting the tuple in a list, add another integers and convert back
# tuple_num = (1, 2, 3)
# print(tuple_num)
# tuple_num_list = list(tuple_num)
# tuple_num_list.append(4)
# tuple_num = tuple(tuple_num_list)
# print(tuple_num)

#3
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# print(basket)
# basket[0] = "Apples"
# basket[-1] = "Kiwi"
# print(basket)

# count = 0
# for i in basket:
#     if i == 'Apples':
#         print(i)
#         count += 1
# print(count)

# basket.clear() #empty the basket
# print(basket)


#4
#A float is a floating-point number, which means it is a number that has a decimal place for exmple 1.0, 1.1,
#Unlike integer(int) wich stores integral values that is whole numbers for exmple 1,2,3,4

# f_list = []
# for i in range(1, 8):
#     i = float(0.5 + i)
#     f_list.append(i)
# print(f_list)
    


#5
# n_list = []
# for i in range(1, 21):
#     n_list.append(i)

# print(n_list)

# for i in range(1, len(n_list), 2):
#     print(n_list[i])



#6
# user_name = input('What is your name ')
# while user_name != 'avi':
#     user_name = input('try again ')
#     if user_name == 'avi':
#         print('Hello avi')
#         break



#7
# fruit_list = []
# user_input = list(input('What is your favorite fruits ').split())
# fruit_list.append(list(user_input))
# print(fruit_list)


#8
# topping = 0
# while True:
#     user_input = input('Enter which topping would you like on your pizza type quit to stop ')
#     if user_input != 'quit':
#         print("The " +user_input+ " topping has been added to your pizza.")
#         topping+=2.5
#     else:
#         sum = topping + 10
#         print(f'The pizza will cost you {sum}')
#         break


#9
# age = input("How old are you?")
# age = int(age)
# price = 0

# if age < 3:
#     print('You dont need to pay')
# elif age >= 3 and age <= 12:
#     print('You need to pay 10$')
#     price += 10
# elif age > 12:
#     print('You need to pay 15$')
#     price += 15




#10
# finished_sandwiches = []
# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
# i = "Pastrami sandwich"

# while i in sandwich_orders:
#     sandwich_orders.remove(i)

# while sandwich_orders:
#     current_sandwich = sandwich_orders.pop()
#     finished_sandwiches.append(current_sandwich)

# for i in finished_sandwiches:
#     print("I made a " + i)









