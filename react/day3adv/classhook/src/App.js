import {useState, useReducer} from 'react'
import './App.css';

/** 
 * useReducer
 */

const initState = {
  count : 0
}

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

const reducer = (state, action) => {
  console.log('action=> ', action);

  if(action.type === INCREMENT){
    return {...state, count : state.count + action.by}
  }
  else if (action.type === DECREMENT){
    return {...state, count : state.count - action.by}
  }
  return state

  // switch (action.type){
  //   case "increment":
  //     return {...state, count : state.count + action.by};
  //   case "decrement":
  //     return {...state, count : state.count - action.by};
  //   default:
  //     return state;
  // }
};

function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state);
  

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <button onClick={() => setCount(count - 1)}>-</button><br/>
        <h2>useReducer</h2>
        <button onClick={() => dispatch({type : INCREMENT, by:10})}>+</button>
        {state.count}
        <button onClick={() => dispatch({type : DECREMENT, by:10})}>-</button><br/>
      </header>
    </div>
  );
}

export default App;
