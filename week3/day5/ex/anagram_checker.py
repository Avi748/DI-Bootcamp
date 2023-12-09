
class AnagramChecker:

    def __init__(self) -> None:
        self.valid_word = set(open('file.txt', encoding='ascii').read().lower().split())


    def is_valid_word(self, word):
        return word in self.valid_word


    def get_anagrams(self, word):
        angrams_list = []
        for i in self.valid_word:
            if sorted(word) == sorted(i):
                angrams_list.append(i)
        return angrams_list
    

c1 = AnagramChecker()
