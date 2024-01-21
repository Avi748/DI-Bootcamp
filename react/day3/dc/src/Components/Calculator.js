import React, {useState} from 'react';
import 'tachyons'

const Calculator = () => {
    const [input, setInput] = useState({
        num1: "",
        num2: "",
    });

    const [result, setResult] = useState("");

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    };

    const sum = () => {
        const {num1, num2} = input;
        setResult(Number(num1) + Number(num2));
    }

    return(
        <div className='tc bg-light-purple db br3 pa3 ma2 bw2 shadow-5'>
            <h1>Adding Two Number</h1>
            <input onChange={handleInput} name='num1' value={input.num1} type='number'></input>
            <input onChange={handleInput} name='num2' value={input.num2} type='number'></input>
            <button onClick={sum}>Add Them!</button>
            <p>result: {result}</p>
        </div>
    );
}

export default Calculator;