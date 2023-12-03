board = ["-", "-", "-",
         "-", "-", "-",
         "-", "-", "-"]

#global variables
player = "X"
winner = None
gameRunning = True


def display_board(board):
    print("TIC TAC TOE")
    print("*******************")
    print(f'*  {board[0]}  |  {board[1]}  |  {board[2]}  *')
    print("* --------------- *")
    print(f'*  {board[3]}  |  {board[4]}  |  {board[5]}  *')
    print("* --------------- *")
    print(f'*  {board[6]}  |  {board[7]}  |  {board[8]}  *')
    print("*******************")


def player_input(board):
    global player
    user_input = int(input("Enter a number between 1 - 9: "))
    if user_input >= 1 and user_input <= 9 and board[user_input - 1] == "-":
        board[user_input - 1] = player
        if player == "X":
            print("Player O turn")
            player = "O"
        elif player == "O":
            print("Player X turn")
            player = "X"
            
    elif player == "X" or player == "O" and board[user_input - 1] != "-":
        print("player already took that spot")
    
    if user_input < 1 or user_input > 9:
        print("Please choose a number between 1 - 9: ")   


def check_horizontal(board):
    global winner
    if board[0] == board[1] == board[2] and board[0] != "-":
        winner = board[0]
        return True
    elif board[3] == board[4] == board[5] and board[3] != "-":
        winner = board[3]
        return True
    elif board[6] == board[7] == board[8] and board[6] != "-":
        winner = board[6]
        return True
    
def check_vertical(board):
    global winner
    if board[0] == board[3] == board[6] and board[0] != "-":
        winner = board[0]
        return True
    elif board[1] == board[4] == board[7] and board[1] != "-":
        winner = board[1]
        return True
    elif board[2] == board[5] == board[8] and board[2] != "-":
        winner = board[2]
        return True    

def check_diagonal(board):
    global winner
    if board[0] == board[4] == board[8] and board[0] != "-":
        winner = board[0]
        return True
    elif board[2] == board[4] == board[6] and board[2] != "-":
        winner = board[2]
        return True


def check_tie(board):
    global gameRunning
    if "-" not in board:
        display_board(board)
        print("It's a tie")
        gameRunning = False

def check_win():
    global gameRunning
    if check_horizontal(board) or check_vertical(board) or check_diagonal(board):
        display_board(board)
        print(f"The winner is player :  {winner}")
        gameRunning = False


def play():
    while gameRunning:
        display_board(board)
        player_input(board)
        check_tie(board)
        check_win()
    print("Thank You for playing")
        
play()