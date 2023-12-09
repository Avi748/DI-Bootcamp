import anagram_checker

def menu():
    user_word = input("Enter a word ").strip()
    while anagram_checker.c1.is_valid_word(user_word):
        print(f"Your word is:{user_word}\nThis is a valid English word\nAnagrams for your word are : {anagram_checker.c1.get_anagrams(user_word)}")
        break
    else:
        print("not valid")
        

menu()