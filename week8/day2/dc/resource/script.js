const select = document.getElementById("select")
const emojis = document.getElementById("emoji")
const button = document.getElementById("btn").addEventListener("click", checkSubmit);


const getdata = async () => {
    try {
        const res = await fetch('http://localhost:3000/emoji')
        const data = await res.json();
        render(data)
    } catch (error) {
        
    }
}

getdata()

const render = (arr) => {
    const emoji = arr.filter((item, idx) => idx < 1).map(item => {
        item = arr[Math.floor(Math.random() * arr.length)];
        return `<div>${item.emoji}</div>`
     });
    const name = arr.map((item) =>{
        return `<option>${item.name}</option>`
    })
    emojis.innerHTML = emoji.join('')
    select.innerHTML = name.join('')
}

async function checkSubmit(){
    const v = select.value
    console.log(v)
}