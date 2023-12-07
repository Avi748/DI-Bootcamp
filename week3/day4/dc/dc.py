import re
import os
from collections import Counter

dir_path = os.path.dirname(os.path.realpath(__file__))

class Text:
    def __init__(self, text_str) -> None:
        self.text_str = text_str


    @classmethod
    def from_file(cls, text_file):
        with open(f"{dir_path}\\{text_file}", mode="r") as f:
            text_file = f.read()
            return Text(text_file)

    
    def frequency(self, word):
        self.text_str = self.text_str.lower()
        list_words = self.text_str.split()
        for word in list_words:
            re.sub('[^a-zA-Z0-9]', '', word)
        frequency = list_words.count(word)
        return f"The frequency of {word} is {frequency}"


    def most_common(self):
        self.text_str = self.text_str.lower()
        list_words = self.text_str.split()
        c_obj = Counter(list_words)
        most_common = c_obj.most_common(1)
        word, times = most_common[0]
        return f"The most common word is: {word} it appear {times}"



    def unique_word(self):
        self.text_str = self.text_str.lower()
        list_words = self.text_str.split()
        for i, word in enumerate(list_words):
            list_words[i] = re.sub('[^a-zA-Z0-9]', '', word)
        unique = set(list_words)
        return f"Most unique word is {unique}"
    


text1 = Text("A good book would sometimes cost as much as a good house.")
# print(text1.frequency("house"))
# print(text1.most_common())
# print(text1.unique_word())

text2 = Text.from_file("the_stranger.txt")
print(text2.unique_word())