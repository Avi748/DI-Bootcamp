import Display from './components/Display';
import Action from './components/Action';
import {useState, createContext} from 'react'
import './App.css';

/** 
 * useContext , createContext
 * useRef
 * useReducer
 */

export const AppContext = createContext();

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <AppContext.Provider value={{count, setCount, name:'Dan'}}>
          <Display/>
          <Action/>
        </AppContext.Provider>
      </header>
    </div>
  );
}

export default App;
