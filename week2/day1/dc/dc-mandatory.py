my_input = input("Please enter a string of at least 10 characters long ")

if len(my_input) < 10:
    print("String not long enough")
elif len(my_input) > 10:
    print("String too long")
else:
    print("Perfect string")
    for i in range(len(my_input)):
        print(my_input[:i+1])

    

