# import random

# my_input = input("Please enter a string of at least 10 characters long ")

# if len(my_input) < 10:
#     print("String not long enough")
# elif len(my_input) > 10:
#     print("String too long")
# else:
#     print("Perfect string")
#     loop_char = ''
#     for i in my_input:
#         loop_char += i
#         print(loop_char)

# user_1 = list(loop_char)
# random.shuffle(user_1)

# shuffled_str = ''.join(user_1)
# print(shuffled_str)


#LISTS
f_name = "Harry Potter"
age = 33
heigh = 1.70
wizard = True
profession = 'Teacher'
house = 'Grifyndor'


users_a = [f_name, age, heigh, wizard, profession, house] 
users_b = list(f_name) #list constructor
users_c = ['Harry Potter', 33, 1.7, True]
new_user = ['Ron Weasley', 34, 1.8, True]

# print(users_a[1:-1:2])


#METHODS
# wife = "Gina Weasly"
# users_a.append(wife) # Add an element to the list
# print(users_a[1])

# users_c.remove('Harry Potter')
# users_c.pop(1) #pop remove by index number in the list
# print(users_c)


#ADDING LISTS
#A) +
# print(users_c + new_user)

#B) append()
# users_c.append(new_user)
# print(users_c)

#C) extend()
# users_c.extend([new_user])

#D) insert
# users_c.insert(0, 'Harmione Granger')
# print(users_c)

#E) copy list
# new_user = users_a[:]
# new_user = users_a.copy





#TUPLES
passwords1 = ('some_pass', 'other_pass')
passwords2 = ('3th_pass', '4th_pass')
passwords3 = passwords1 + passwords2
# print(passwords3)

#Unpacking tupples
# a,b,c,d = (2,4,6,8)
# print(a)
# print(b)
# print(c)
# print(d)



#STRINGS - a sequence of chars ONLY
# some_str = "Python"
# print(some_str[1:4], some_str[:3]) #Range


# num = [7,4,6,8]
# print(sum(num))
# print(sorted(num)) #sorted create a new list wich is sorted

# num.sort() #sort() changes the list itself
# print(num)


#SETS
my_set = set()
my_set2 = {60, 14, 'Morty'}
some_set = {1,3,5,7}

my_set.add('Rick')
my_set.add('Morty')
my_set.add('Rick')

print(my_set2)

inter = my_set.intersection(my_set2) #intersection what both lists have in common
print(inter)

dif = my_set.difference(my_set2)
print(dif)

print(my_set.union(my_set2)) #combain both sets