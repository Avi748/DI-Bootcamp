matrix_list = [
    ["7", "i", "i"],
    ["T", "s", "x"],
    ["h", "%", "?"],
    ["i", "", "#"],
    ["s", "M", ""],
    ["$", "a", ""],
    ["#", "t", "%"],
    ["^", "r", "!"]
]

for row in range(8):
    for col in range(3):
        if matrix_list[0][2] == "i" and matrix_list[1][2] == "x" and matrix_list[2][2] == "?":
            matrix_list[0][2] = "3"
            matrix_list[1][2] = "i"
            matrix_list[2][2] = "x"
        print(matrix_list[row][col], end=" ")
    print()