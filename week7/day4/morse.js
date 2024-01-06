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

const toJs = (jsonString) => {
    return new Promise((resolve, reject) => {
        let objMorse;
        try{
            objMorse = JSON.parse(jsonString);
        }catch(error) {
            reject("This json is not valid");
        }
        if(Object.keys(objMorse).length === 0){
            reject("This json is a empty --- ERROR in ToJs function")
        }else{
            resolve(objMorse);
        }
    });
};

const toMorse = (morseObj) => {
    return new Promise((resolve, reject) => {
        const userStr = prompt('Enter a word');
        if(!userStr){
            reject("No input provided")
            return;
        }

        const arrStr = userStr.toLowerCase().split("");
        const returnArr = arrStr.map(char => {
            if(char in morseObj) {
                return morseObj[char]
            }
            else{
                reject(`Character ${char} dosen't exist in the Morse code Json`)
            }
        })
        resolve(returnArr)
    })
}

const joinWords = (morseToHtml) => {
    return morseToHtml.map(element => `<div>${element}</div>`);
}

toJs(morse)
.then((result) => {
    return toMorse(result)
})
.then((result) => {
    return joinWords(result)
})
.then((htmlArr) => {
    document.getElementById('morse').innerHTML = htmlArr.join('')
})
.catch((error) => {
    console.log(error)
})