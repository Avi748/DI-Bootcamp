import './App.css';
// import {useState} from 'react'
import Counter from './components/Counter';
import Parent from './components/Parent';
import Child from './components/Child';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Parent auth="user">
          <Child/>
          <Counter/>
        </Parent> */}
        <ErrorBoundary>
          <Counter/>
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
