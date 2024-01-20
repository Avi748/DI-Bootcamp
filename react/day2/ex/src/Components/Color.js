import React, {useState, useEffect} from "react";

const Color = () => {
    const [color, setColor] = useState("red");

    const changeColor = () => {
        setColor("blue");
    }

    useEffect(() => {
        if(color)
        alert("useEffect reached")
        setColor("yello")
    },[]) //dependency
    
    return (
        <div>
            <h1>My Favorite Color is {color}</h1>
            <button
                type="button"
                onClick={changeColor}
            >Change color</button>
        </div>
    )
}

export default Color