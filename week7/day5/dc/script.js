const div = document.getElementById("convert");
const from = document.getElementById("from");
const to = document.getElementById("to");
const input = document.getElementById("amount")
const button = document.getElementById("btn").addEventListener("click", convert);

async function getCurrencies(){
    try{
    const url = "https://v6.exchangerate-api.com/v6/95e2fc90a21651da58185c8b/codes";
    const response = await fetch(url, {
        method:"GET"
      });
    const data = await response.json();
    console.log(data)
    addCurrencies(data.supported_codes)

    }catch(error){
        console.log(error)
    }
}

function addCurrencies(codes){
    const entries = Object.entries(codes)

    for(const entry of entries){
        const [index, [code, name]] = entry
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");
        option1.innerText = `${code} - ${name}`;
        option1.value = code;
        // console.log(option1)

        option2.innerText = `${code} - ${name}`;
        option2.value = code;

        from.appendChild(option1);
        to.appendChild(option2);
    }
}

async function convert(){
    const currency1 = from.value
    console.log(currency1)
    const currency2 = to.value
    console.log(currency2)
    const url = `https://v6.exchangerate-api.com/v6/95e2fc90a21651da58185c8b/pair/${currency1}/${currency2}`
    try{
    const response = await fetch(url);
    const data = await response.json()
    const rate = data.conversion_rate;
    const armount = Number(input.value);
    const total = armount * rate;
    console.log(total)

    const p = document.createElement("p")
    p.innerText = `${total} ${currency2}`
    div.appendChild(p)
    }catch(error){
        console.log(error);
    }
}

getCurrencies()