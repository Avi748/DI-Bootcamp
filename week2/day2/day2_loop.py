students = ['Lior', 'Sveta', 'Estee', 'David']

# #regular for loop
# for each_student in students:
#     if each_student is 'Sveta':
#         print('Happy b-day Sveta')
#     else:
#         print(f'Hello {each_student}')


# for loop + range
# for i in range(10):
#     print(i)

# some_l = list(range(1,11))
# print(some_l)

# print(sum(some_l))

# result = 0
# for i in some_l:
#     result+= i

# print(result)



#While loop
# count = 1
# while count < 5:
#     print('Python')
#     count+=1

# user_str = input('Give me a word with 10 chars ')
# while len(user_str) != 10:
#     user_str = input('try again ')
#     if user_str == 'quit':
#         print('Thanks for playing')
#         break
# else:
#     print('Perfect word')


for i,j in enumerate(students):
    if i == 2:
        print(j)