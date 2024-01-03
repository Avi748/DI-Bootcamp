//Exercise 1 : HTML Form
//Where will the sent data appear?
//A: the data appear in the url


//Exercise 2 : HTML Form #2
//I'm not sure why but when i change to post i get an error '405 Method Not Allowed'


//Exercise 3 : JSON Mario

const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }

const jsonMarioGame = JSON.stringify(marioGame, null, 2);
console.log(jsonMarioGame)