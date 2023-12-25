let sentence = "The movie is not that bad, I like it";
let wordNot = sentence.search("not")
let wordBad = sentence.search("bad")

if (wordNot === -1){
    console.log(sentence)
}else if (wordNot < wordBad){
    console.log("bad", wordBad)
    console.log("not", wordNot)

    const firstPart = sentence.slice(0, wordNot)
    const secondPart = sentence.slice(wordBad + 3)
    console.log(firstPart + "good" + secondPart)
}else{
    console.log(sentence)
}