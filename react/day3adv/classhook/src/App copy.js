import Display from './components/Display';
import Action from './components/Action';
import {useState, createContext} from 'react'
import './App.css';

/** 
 * useContext , createContext
 * useRef
 * useReducer
 */

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <Display count={count}/>
        <Action setCount={setCount} count={count}/>
      </header>
    </div>
  );
}

export default App;
