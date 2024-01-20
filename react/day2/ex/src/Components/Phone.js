import React, {useState} from "react";

const Phone = () => {
    const [brand] = useState("Samsung");
    const [model] = useState("Galaxy S20");
    const [color, setColor] = useState("black");
    const [year] = useState(2020);

    const changeColor = () => {
        setColor("blue");
    }
    
    return (
        <div>
            <h1>My Phone is a {brand}</h1>
            <p>it is a {color} {model} from {year}</p>
            <button
                type="button"
                onClick={changeColor}
            >Change color</button>
        </div>
    )
}

export default Phone