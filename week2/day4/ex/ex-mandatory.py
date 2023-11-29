from random import randint

#1
# def display_message():
#     print("Hi im learning full-stack")

# display_message()


#2
# def favorite_book(title):
#     print(f"One of my favorite book is {title}")

# favorite_book("Life's Golden Ticket")


#3
# def describe_city(city, country="Israel"):
#     print(f"{city} is in {country}")

# describe_city("kiryat malachi", "Israel")
# describe_city("kiryat malachi") #Checking defualt value


#4
# def random_num(num):
#    a = num
#    b = randint(1, 100) # random number
#    print(a, b)
#    if a == b:
#       return "Succes"
#    else:
#       return "fail"

# print(random_num(52))



#5
# def make_shirt(size = "large", text="I love Python"):
#     if size == "medium":
#         print(f"The size of the shirt is {size} and the text is of medium")
#     elif size == "small":
#         print(f"The size of the shirt is {size} and the text is of small")
#     else:
#         print(f"The size of the shirt is {size} and the text is {text}")


# make_shirt()
# make_shirt(42, "Zara")
# make_shirt("medium") 



#6
# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# def show_magicians():
#     for m in magician_names:
#         print(m)

# def make_great():
#     for m in magician_names:
#         print(m + " The Great")

# make_great()
# show_magicians() # the list hasn't changed, the function make_great created a new list



#7
# def get_random_temp():
#     random_num = randint(-10, 40)
#     return random_num

# def main():
#     num = get_random_temp()
#     if num < 0:
#         return f"The temperature is {num} Brrr, that's freezing! Wear some extra layers today"
#     elif num >= 0 and num < 16:
#         return f"The temperature is {num} Quite chilly! Don't forget your coat"
#     elif num >= 16 and num <= 23:
#         return f"The temperature is {num} Perfect weather we have today"
#     elif num >= 24 and num <= 32:
#         return f"The temperature is {num} it's getting warmer"
#     elif num > 32 and num <= 40:
#         return f"The temperature is {num} it's very hot outsite today"
    
# print(main())




#8
# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]

# wrong_answers = []
# def star_wars_quiz():
#     score = 0
#     for q in data:
#         print(q.get("question"))
#         answer = input("Enter your answer ")
#         if answer == q.get("answer"):
#             score += 1
#             print(f"Correct your score is now {score}/6" )
#         elif answer != q.get("answer"):
#             print("Wrong answer :( ")
#             wrong_answers.append(answer)

# star_wars_quiz()
# print(f"Wrong answers: {wrong_answers}")
# if len(wrong_answers) > 3:
#     print("Maybe play again")