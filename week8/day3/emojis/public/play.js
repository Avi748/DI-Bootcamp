let randomEmoji = {}

const getEmojiApi = () => {
    fetch('http://localhost:3001/emojis')
    .then(res => res.json())
    .then(emojisapi => {
        console.log(emojisapi);
        randomEmoji = emojisapi.randomEmoji
        render(emojisapi.shuffleEmojis, emojisapi.randomEmoji);
    })
}

getEmojiApi()

const render = (options, emoji) => {
    const root = document.getElementById("root")
    const html = options.map(item => {
        return item.name + " ";
    });
    root.innerHTML = `Options : ${html.join('')} Hint: ${emoji.emoji}`;
}

const guessTheEmoji = () => {
    const guess = document.getElementById("guess");
    fetch('http://localhost:3001/emojis', {
        method:'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify({guess, name:randomEmoji.name})
    })
    .then(res => res.json())
    .then(msg => {
        console.log(msg);
        document.getElementById("message").innerHTML = `<h1>${msg.message}</h1>`
    })
}
