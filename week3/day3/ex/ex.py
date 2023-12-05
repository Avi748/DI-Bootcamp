import random
import string
import datetime
from faker import Faker

#1
# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     def __str__(self) -> str:
#         return f"{self.amount} {self.currency}"

#     def __int__(self):
#         return self.amount
    
#     def __repr__(self) -> str:
#         return f"{self.amount} {self.currency}"
                

# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# print(str(c1))
# print(int(c1))
# print(repr(c1))
# print(c1.amount + 5)
# print(c1.amount + c2.amount)
# print(c1)
# c1.amount += 5
# print(c1)
# c1.amount += c2.amount
# print(c1)

# if c1.currency != c3.currency:
#     raise TypeError("Cannot add between Currency type <dollar> and <shekel>")
# else:
#     print(c1.amount + c3.amount)



#3
# def generate_random_string(length):
#     letters = string.ascii_letters
#     random_string = ''.join(random.choice(letters) for i in range(length))
#     return random_string
 
# random_string = generate_random_string(5)
# print(random_string)



#4
# def current_time():
#     now = datetime.date.today()
#     return f"The current date is {now}"

# print(current_time())



# #5
# def time_left():
#     now = datetime.datetime.now()
#     january = datetime.datetime(2024, 1, 1, 9, 30, 00)
    
#     time = january - now 
#     print(f"Time left: {time} hours")

# time_left()


# #6
# def time_pass(year, month, day):
#     now = datetime.datetime.now()
#     year = datetime.datetime(year, month, day, 00, 00, 00)

#     time = now - year
#     minutes = time.total_seconds() / 60
#     print(f"{minutes} Minutes has passed since the day you were born")

# time_pass(1995, 9, 19)



#7
users = []
def fake_users(**kwargs):
    users.append(kwargs)
    return users

fake = Faker()
print(fake_users(name = fake.name(), address = fake.address(), language_code = fake.language_code()))