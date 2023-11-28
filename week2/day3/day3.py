some_list = ['Harry potter', 33, 1.7]

users = {'name' : 'Harry potter',
         'age' : 33,
         'height' : 1.7,
         'wizard' : True,
         'house' : 'Greyffindor',
         'hobbies' : ['Quidditch', 'flying cars', 'eating all favors beens'],
         'best-friends' : {'Hermione', 'Ron'},
         'family' :
         {'name' : 'Gina Weasley',
         'age' : 31,
         'height' : 1.65},
        }

# print(some_list[1]) #List

#LIST
# print(users['hobbies'][0]) #Accessing data

# SET
# print('wizard' in users) #Return ture if wizard in users

#NESTED LIST
wife = users['family']['name']
# print("wife : ", wife)

#LIST of DICTIONARIES
shirts = [
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'S',
    'price': 20
  },
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'M',
    'price': 25
  },
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'L',
    'price': 30
  },
]

# print(shirts[0]['price'])


#Modify an Entry In a Dictionary

#existing key
users['house'] = 'Slytherin'
# print(users['house'])

#add a new key value
users['pet'] = 'Hedwig'
# print(users)

# Delete an Entry in a Dictionary
del users['height']
# print(users)
# print('height' in users) # return false because the key was deleted


#METHODS
# print(users.keys())
# print(users.values())
# print(users.items())

#Update a Dictionary
member = {'name' : 'Alvo Sirius Potter',
         'age' : 5,
         'height' : 1.45}

# users.update({'family' : member}) #Remove current key and update

print(users['family'])
family = users['family']
family.update({'family' : member}) #Keep current keys and add a new key
print(users['family'])

#Updating dictionary
dict1 = {'apple': 2, 'banana': 4, 'pineapple': 3}
dict2 = {'apple': 2, 'banana': 15, 'pineapple': 3, 'grape': 5}

dict1.update(dict2)
# print(dict1)
