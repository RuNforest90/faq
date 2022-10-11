board = list(range(1,10))

#создание поля для игры
def draw_board(board): # название функция
    print("." * 13)
    for i in range(3): # функция
        print("|", board[0+i*3], "|", board[1+i*3], "|", board[2+i*3], "|")
        print("." * 13)

#ведение числа для хода и проверки
def take_input(player_token): #функция
    valid = False
    while not valid: #тело-цикл, пока проверяймое условие истинное
        player_answer = input("куда поставим(X)" + player_token)
        try:
            player_answer = int(player_answer) #ведение числа
        except:
            print("нет такого варианта! вы уверены в этом?")
            continue #пропускает часть цикла
        if player_answer >=1 and player_answer <=9: #логическое сравнение (условие)
            if(str(board[player_answer-1]) not in "XO"): #логическое сравнение (условие)
                board[player_answer-1] = player_token
                valid = True #верное значение
            else:
                print("Чумба ты че киберпсих?")
        else:
            print("введите number от 1 до 9!!!")

# комбинации
def check_win(board): #функция
    win_coo = (0,1,2), (3,4,5), (6,7,8), (0,3,6), (1,4,7), (2,5,8), (0,4,8), (2,4,6)
    for each in win_coo:
        if board[each[0]] == board[each[1]] == board[each[2]]:
            return board[each[0]]
    return False
    
# кто выйграл
def main(board):
    count = 0
    win = False
    while not win:
        draw_board(board) 
        if count % 2 == 0: # если четное то выйграл X
            take_input("X") 
        else: # если нечетное то выйграл O
            take_input("O") 
        count +=1

        if count >4: 
            thy = check_win(board)

            if thy:
                print(thy, "Вы победили")
                win = True
                break
        if count ==9:
            print("ничья")
            break
draw_board(board) #стартовое слово
main(board) #старт
