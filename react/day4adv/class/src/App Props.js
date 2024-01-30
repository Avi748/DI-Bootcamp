import {createContext, useState} from 'react'
import Counter from './components/Counter';
import './App.css';

export const AppContext = createContext();

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <Counter a={count} b={setCount}/>
      </header>
    </div>
  );
}

export default App;
