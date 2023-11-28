#A. For Loops And Dictionaries
# my_books = {
#   "title": "Harry Potter",
#   "author": "JK Rowling",
# }

# for key, value in my_books.items():
#     print(f'the {key} is {value}')


# students = ['Lior', 'Sveta', 'Estee', 'David']

# for i,j in enumerate(students): #unpacks the tuples
#     print(i, j)

# for name in enumerate(students): #output = tuples 
#     print(name)


#ZIP

# hobbies = ['dance', 'paint', 'cars', 'soccer']

# for item in zip(students, hobbies):
#     print(item)
# for item in zip(hobbies, students):
#     print(item)

# print(dict(zip(students, hobbies)))

# for i in range(1, 6): # loop 5 times
#     print(i)
# else:
#     print("finished")

# count = 0
# while count <= 5:
#     print(count)
#     count += 1
# else:
#     print('count is more than 5')

for letter in 'Leonardo Da Vinci':
    if letter == 'o':
        continue
    else:
        print(letter, end='') # dont execute for 'o' letter

# The List Comprehension Way
# some_nums = []

# for num in range(11):
#     some_nums.append(num)
# print(some_nums)

some_str = [char for char in 'hello']
            #append(num) for num in range of 0-10
some_nums1 = [num for num in range(11)]
            #append(num) for num in range of *2
some_nums2 = [num for num in range(11) if num %2 == 0]
print(some_str)
