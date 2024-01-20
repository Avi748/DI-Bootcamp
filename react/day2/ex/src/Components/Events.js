import React, {useState} from "react";

const Events = () => {
    const clickMe = () => {
        alert("I was clicked");
    }
    const handleKeyDown = (e) => {
        if(e.key !== "Enter") return;
        console.log(e.target.value);
        alert(`The Enter Key was pressed, your input is: ${e.target.value}`);
    }

    const [isToggleOn, setToggle] = useState(true);
    const handleClick = () => {
        setToggle(!isToggleOn);
      };

    return(
        <div>
            <h1>Click to Alert</h1>
            <button onClick={clickMe}>Alert</button>
            <input type="text" onKeyDown={handleKeyDown}/>
            <button onClick={handleClick}>{isToggleOn? "ON" : "OFF"}</button>
        </div>
    );
}

export default Events