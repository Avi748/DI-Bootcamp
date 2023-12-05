def divide(x,y):
    try:
        result = x/y

    except TypeError:
        print("one of the arguments is not int")

    except ZeroDivisionError:
        print("Can't divide by zero")

    else:
        return result


print(divide(5, 0))

divide('e', 0)

print(divide(8, 2))
