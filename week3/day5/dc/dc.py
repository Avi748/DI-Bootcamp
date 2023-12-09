from random import shuffle
 

class Card:
    global suit, value
    suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    value = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
 
    def __init__(self):
        pass
 

class Deck:
    def __init__(self):
        Card.__init__(self)
        self.card_deck = []
        for s in suit:
            for v in value:
                self.card_deck.append((v)+" "+"of"+" "+s)
                
    def shuffle(self):
        if len(self.card_deck) > 52:
            print("cannot shuffle the cards")
        else:
            shuffle(self.card_deck)
            return self.card_deck
 
    def deal(self):
        if len(self.card_deck) == 0:
            return "No more cards left"
        else:
            remove_card = self.card_deck.pop()
            return f"The card {remove_card} has been dealt"
            
 
card_object = Card()
deck_object = Deck()

# print(deck_object.card_deck)
print(deck_object.shuffle())

# print(deck_object.card_deck)
# print(deck_object.deal())
# print(deck_object.card_deck)
