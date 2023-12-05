class MyClass:

    def __init__(self, val) -> None:
        self.val = self.filterInt(val)

    @staticmethod
    def filterInt(value):
        if not isinstance(value, int):
            raise TypeError
        else:
            return value


# a = MyClass(5)
# print(a.val)

# b = MyClass("100")
# print(b.value)



class AtmAccount:
    avaliable_acc_num = 2000

    def __init__(self, holder) -> None:
        self.__holder = holder #private
        self.__account_num = AtmAccount.avaliable_acc_num
        self.__balance = 0
        AtmAccount.avaliable_acc_num += 1

    @property #Give direct access to private attribute
    def balance(self):
        return self.__balance
    
    @balance.setter
    def balance(self, amount):
        self.__balance = amount

    def deposite(self, amount):
        AtmAccount.validate_amount(amount)
        self.__balance += amount
        return self.balance
    
    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError("Insuficient balance")
        else:
            self.balance -= amount

    @staticmethod #a function that need to be used just inside the class, uselly to do mats in attributes, to check values
    def validate_amount(amount):
        if amount <= 0:
            raise ValueError("Can't be negative or zero")
        else:
            return amount
        
    @classmethod 
    def get_next_acc_num(cls): #cls = self. of the class
        if cls.avaliable_acc_num > 2000:
            cls.avaliable_acc_num += 1000
        return cls.avaliable_acc_num
        


account1 = AtmAccount("Avi")
account2 = AtmAccount("John")
account3 = AtmAccount("Levi")

# print(account1._AtmAccount__account_num)
# print(account2._AtmAccount__account_num)
# print(account3._AtmAccount__account_num)

# print(account1.__holder) #Give an Error
# print(account1._AtmAccount__holder) #Succsefully display the information

account1.deposite(200)
# print(account1._AtmAccount__balance)
# account1.withdraw(50)
# print(account1.balance)

# print(AtmAccount.avaliable_acc_num)
print(AtmAccount.get_next_acc_num())