import {createContext, useState, useReducer, useRef} from 'react'
import Counter from './components/Counter';
import './App.css';

//useContext
export const AppContext = createContext();


//useReducer
// const initialState = {count : 0}

// const reducerFunction = (state, action) => {
//   if(action.a === "increment"){
//     return {...state, count : state.count + 1}
//   }
//   else if(action.b === "decrement"){
//     return {...state, count : state.count - 1}
//   }
//   return {...state}
// }



function App() {

//useRef
  const divRef = useRef();
  const inputRef = useRef();
  const name = useRef('Dan')
  const [count, setCount] = useState(0)

  const handleClick = () => {
    console.log(divRef.current);
    divRef.current.style.backgroundColor = "white"
    divRef.current.style.color = "black"
    console.log(inputRef.current.value);
    name.current = "Anne"
    console.log(name.current);
  }

  // const [count, setCount] = useState(0)
  // const [state, dispatch] = useReducer(reducerFunction, initialState)

  return (
    <div className="App">
      <header className="App-header" ref={divRef}>

        <h1>useRef</h1>
        <input ref={inputRef}/><br/>
        <button onClick={handleClick}>click</button>
        <h2>{name.current}</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>

        {/* <h1>useReducer</h1> */}
        {/* <button onClick={() => dispatch({a : "increment"})}>+</button>
        Count: {state.count}
        <button onClick={() => dispatch({b : "decrement"})}>-</button> */}

        {/* <h1>useState</h1> */}
        {/* <button onClick={() => setCount(count + 1)}>+</button> */}
        {/* <p>Count: {count}</p> */}
        {/* <button onClick={() => setCount(count - 1)}>-</button> */}

        {/* <h1>useContext</h1> */}
        {/* <AppContext.Provider value={{count, setCount}}>
        <Counter/>
        </AppContext.Provider> */}
      </header>
    </div>
  );
}

export default App;
