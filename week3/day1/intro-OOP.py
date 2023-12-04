from datetime import date

# dianas_dog: Dog()

# dianas_dog.name = 'Lieto'
# print(dianas_dog.name)



# class Dog():
#     def __init__(self, name, color):
#         print("an object was created")
#         self.name = name
#         self.color = color

#     def bark(self):
#         print(f'{self.name} barks ! WAF')

#     def walk(self, distance:int):
#         print(f'{self.name} walks {distance} km')

#     def rename(self, new_name):
#         self.name = new_name
#         return self.name


# alex_dog = Dog("Rex", "Beign")
# print(alex_dog.name, alex_dog.color)
# # print(alex_dog.__dict__)

# john_dog = Dog("Fluffy", "White")
# john_dog.bark()

# alex_dog.walk(10)
# john_dog.rename("Korn")
# print(john_dog.name)

# dianas_dog = Dog("Lieto", "brown and white")

# all_dogs = [alex_dog.name, john_dog.name, dianas_dog.name]
# print(all_dogs)

# all_dogs = [alex_dog, john_dog, dianas_dog]
# for dog in all_dogs:
#     print(dog.name)


class bankAccount:
    def __init__(self, account_number, balance = 0) -> None:
        self.account_number = account_number
        self.balance = balance
        self.transaction = []

    def view_balance(self):
        print(f'Balance for {self.account_number} is ${self.balance}')
        self.transaction.append("view_balance")

    def deposit(self, dep_amount):
        if dep_amount <= 0:
            print("invalid amount")
        elif dep_amount < 50:
            print("minimal deposit is 100")
        else:
            self.balance += dep_amount
            self.view_balance()
            self.transaction.append("deposit")


    def withdraw(self, w_amount):
        if w_amount > self.balance:
            print("insufficient amount")
        else:
            self.balance -= w_amount
            self.view_balance()
            self.transaction.append("withdraw")
    
    def view_transaction(self):
        print("\n".join(self.transaction))



account1 = bankAccount(1234567, 500)
account1.view_balance()

account1.deposit(300)

account1.withdraw(100)
account1.view_balance()

account1.view_transaction()