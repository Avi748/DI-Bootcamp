import {useState} from 'react'
import './App.css';

function App() {

  const [hello, setHello] = useState()
  const [greeting, setGreeting] = useState()
  const [input, setInput] = useState()

  const getHello = () => {
    fetch('http://localhost:3001/hello')
    .then(res => res.json()) //If the response is res.send change from the server.js change here to res.text()
    .then(greeting => {
      console.log(greeting);
      setHello(greeting.greeting); //if the response is res.send change to just greeting without .
    })
    .catch( error => {
      console.log(error);
    })
  }

  const getGreeting = () => {
    fetch(`http://localhost:3001/hello/${input}`)
    .then(res => res.json()) //If the response is res.send change from the server.js change here to res.text()
    .then(greeting => {
      console.log(greeting);
      setGreeting(greeting.greeting); //if the response is res.send change to just greeting without .
    })
    .catch( error => {
      console.log(error);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button onClick={getHello}>Hello</button>
          <h2>{hello}</h2>
        </p>
        <p>
          <div>
            <input onChange={(e) => setInput(e.target.value)}/>
          </div>
          <button onClick={getGreeting}>Greeting</button>
          <p>{greeting}</p>
        </p>
      </header>
    </div>
  );
}

export default App;
