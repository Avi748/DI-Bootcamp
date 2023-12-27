const button = document.getElementById("lib-button")
button.addEventListener("click", click)

function click(e){
    e.preventDefault()
    const noun = document.getElementById("noun").value
    const adjective = document.getElementById("adjective").value
    const person = document.getElementById("person").value
    const verb = document.getElementById("verb").value
    const place = document.getElementById("place").value

    if(noun == "" || adjective == ""|| person == "" || verb == "" || place == "")
    return 
    const story = writeStory(noun, adjective, person, verb, place)
    console.log("story", story)
}

function writeStory(noun, adjective, person, verb, place){
    return `Today i saw ${adjective} ${noun} walking down the street, The next day i meet up with ${person} at ${place} He/she ${verb}`
}