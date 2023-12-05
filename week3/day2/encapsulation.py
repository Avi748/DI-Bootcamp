
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
        self.__balance += amount
        return self.balance
    
    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError("Insuficient balance")
        else:
            self.balance -= amount


account1 = AtmAccount("Avi")
account2 = AtmAccount("John")
account3 = AtmAccount("Levi")

# print(account1._AtmAccount__account_num)
# print(account2._AtmAccount__account_num)
# print(account3._AtmAccount__account_num)

# print(account1.__holder) #Give an Error
print(account1._AtmAccount__holder) #Succsefully display the information

account1.deposite(200)
# print(account1._AtmAccount__balance)
account1.withdraw(50)

print(account1.balance)