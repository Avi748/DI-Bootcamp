import Counter from './features/counter/Counter'
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Counter logo={logo}/>
      </header>
    </div>
  );
}

export default App;
