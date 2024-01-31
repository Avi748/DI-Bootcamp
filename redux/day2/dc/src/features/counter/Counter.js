import { useSelector, useDispatch } from "react-redux";
import { useState} from 'react';
import { increment, decrement , reset, ageUpAsync, ageDownAsync} from "./counterSlice"

const Counter = (props) => {
    const count = useSelector((state) => state.counter.count);
    const loading = useSelector((state) => state.counter.isLoading);
    const [count2, setCount] = useState(0)
    const dispatch = useDispatch()
    // console.log(count2);
    // console.log(loading);

    const displayLogo = () => {
        if(loading){
            return <img src={props.logo} className="App-logo" alt="logo" />
        }
    }
    return (
        <>
        {displayLogo()}
        <h2>Count: {count}</h2>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>reset</button>
        </div>
        <div>
            Amount: <input type="number" onChange={(e) => setCount(Number(e.target.value))}/>
            <button onClick={() => dispatch(ageUpAsync(count2))}>{"+ (4s)"}</button>
            <button onClick={() => dispatch(ageDownAsync(count2))}>{"- (2s)"}</button>
        </div>
        </>
    )
}

export default Counter