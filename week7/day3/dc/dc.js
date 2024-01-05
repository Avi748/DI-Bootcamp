//1rst Daily Challenge
// function makeAllCaps(arr){
//     return new Promise((res, rej) => {
//         if(arr.every(isString)){
//             const upper = arr.map(element => {return element.toUpperCase()})
//             res(upper)
//         }else{
//             rej("Soryy not all values are string")
//         }

//         function isString(arr) {
//             return typeof(arr) === "string"
//         }
//     })
// };

// function sortWords(arr) {
//     return new Promise((res, rej) => {
//         if (arr.length > 4){
//             res(arr.sort())
//         }else{
//             rej("Sorry the array length is not bigger than 4")
//         }
//     })
// };

// //in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, you should see in the console, 
// // the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))


//2nd Daily Challenge

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

function toJs(){
  return new Promise((res, rej) => {
    if(morse.length === 0){
      rej("Error empty object")
    }else{
    const jsonMorse = JSON.parse(morse)
      res(jsonMorse)
    }
  })
}

function toMorse(morseJS){
  return new Promise((res, rej) => {
    const sentence = prompt("enter a sentence").split("")
    res(morseJS[sentence])
  })
}


toJs()
.then((jsonMorse) => toMorse(jsonMorse))
.then((result) => {console.log(result)})
.catch((error) => {
  console.log(error)
})