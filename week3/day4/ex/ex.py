import random

def get_words_from_file():
    with open("sowpods.txt", mode="r") as ex_1:
        return ex_1.read().split()


def get_random_sentence(length):
    random_list =  [word for word in get_words_from_file() if len(word) == length + 1]
    choice = random.sample(random_list, length)
    sentence = "".join(choice).lower()
    return sentence

def main():
    user_input = int(input("Hello, this program will print you a random sentence with a given length of your choice, \n Enter a value between 2~20 "))
    if user_input >= 2 and user_input <=20:
        print(get_random_sentence(user_input))
    else:
        raise ValueError("Please enter a number between 2~20")


# print(get_words_from_file())
main()