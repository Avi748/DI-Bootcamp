
#1
# user_input = input("Enter a string").split(",")
# my_list = [char for char in sorted(user_input)]
# print(my_list)


#2
def longest_word():
    user_input = input("Enter a Sentence ").split()
    l_word = max(user_input, key = len)
    print("Longest word: ", l_word)

longest_word()
