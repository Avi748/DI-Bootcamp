#1
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# x = zip(keys, values)
# print(dict(x))


#2
# price = 0
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# if family['rick'] in range(3,12):
#     price += 10
# elif family['rick'] > 12:
#     price+= 15
# else:
#     print('Ticket is free')

# if family['beth'] in range(3,12):
#     price += 10
# elif family['beth'] > 12:
#     price+= 15
# else:
#     print('Ticket is free')

# if family['morty'] in range(3,12):
#     price += 10
# elif family['morty'] > 12:
#     price+= 15
# else:
#     print('Ticket is free')

# if family['summer'] in range(3,12):
#     price += 10
# elif family['summer'] > 12:
#     price+= 15
# else:
#     print('Ticket is free')

# print(f'Total price for the whole family is {price}$')



#3
# brand = {'name' : 'Zaza',
#          'creation_date' : 1975,
#          'creator_name' : 'Amancio Ortega Gaona',
#          'type_of_clothes' : ['men', 'women', 'children', 'home'],
#          'international_competitors' : ['Gap', 'H&M', 'Benetton'],
#          'number_stores' : 7000,
#          'major_color' :
#          {'France' : 'blue',
#          'Spain' : 'red',
#          'US' : 'pink, green'},
#         }

#Change the number of stores to 2.
# print(brand['number_stores'])
# print(brand.update({'number_stores': 2}))
# print(brand['number_stores'])

#Add a key called country_creation with a value of Spain.
# brand["country_creation"] = 'Spain'
# print(brand)

#Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
# print(brand['international_competitors'])
# if 'international_competitors' in brand.keys():
#     brand.update({'international_competitors' : 'Desigual'}) 
#     print(brand['international_competitors'])

#Delete the information about the date of creation.
# del brand['creation_date']
# print(brand)

#Print the last international competitor.
# print(brand['international_competitors'][-1])

#Print the major clothes colors in the US.
# print(brand['major_color']['US'])

#Print the amount of key value pairs (ie. length of the dictionary).
# print("Length of dictionary:", len(brand))

#Print the keys of the dictionary.
# print(brand.keys())


# more_on_zaza = {'creation_date' : 1975,
#                 'number_stores' : 10 000, 
# }

# brand.update(more_on_zaza)
# print(brand['number_stores'])


#4
# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

# nums = range(0, 5)

# disney_users_A = {users: nums for users, nums in zip(users, nums)}
# print(disney_users_A)

# disney_users_B = {users: nums for users, nums in zip(nums, users)}
# print(disney_users_B)

# disney_users_C = {users: nums for users, nums in zip(sorted(users), nums)}
# print(disney_users_C)
