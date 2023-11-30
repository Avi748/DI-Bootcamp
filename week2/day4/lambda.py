from functools import reduce

def upper_s(string_enter):
    after_upper = []
    for string in string_enter:
        string = string.upper()
        after_upper.append(string)


my_function = lambda s: s.upper()

fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]

masp_result = map(lambda s: s.upper(), fruit)
# print(list(masp_result))
# print(dict(zip(masp_result, fruit)))


filer_object = filter(lambda s: s[0] == 'A', fruit)
# print(list(filer_object))

def add(n1,n2):

    result = n1 + n2

nums_list = [1,2,5,8,7,9,10]
reduced = reduce(lambda n1, n2: n1-n2, nums_list)
print(reduced)