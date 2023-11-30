data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def star_quiz(data:dict)->dict:
    wrong_question = {}
    for dict_question in data:
        question = dict_question['question']
        right_answer = dict_question['answer']

        u_answer = input('write your answer: ')

        if u_answer is not dict_question['answer']:
            wrong_question[question] = [right_answer] #keys

    return wrong_question
    
    
# print(star_quiz(data))

user_answers = star_quiz(data) #passing data from other function

def final_leaderb(user_answers:dict)->None:

    for question in user_answers.keys():
        if question is data['question']:
            print(f'the question was : {question}\n, You answered:  {user_answers[question]}\n, And the correct answer was: {data['answer']}')


final_leaderb(user_answers) #passing data from other function