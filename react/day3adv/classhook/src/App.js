import {useState, useRef} from 'react'
import './App.css';

/** 
 * useContext , createContext
 * useRef
 * useReducer
 */

function App() {
  const [count, setCount] = useState(0);

  let name = "John"
  const nameRef = useRef('Dan');
  const inputRef = useRef();
  // console.log(inputRef.current.value);

  const changeJohn = () => {
    name = "Marry"
    console.log(name);
  }

  const changeDan = () => {
    nameRef.current = "DanDan"
    console.log(nameRef);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>{count}</h2>
          <button onClick={() => {setCount(count + 1)}}>+</button>
          <div>
            <h3>{name}</h3>
            <button onClick={() => changeJohn()}>Change John</button>
          </div>
          <div>
            <h3>{nameRef.current}</h3>
            <button onClick={() => changeDan()}>Change Dan</button>
          </div>
          <div>
            <input ref={inputRef}/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
