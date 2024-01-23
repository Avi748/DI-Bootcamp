import './App.css';
import {useState} from 'react'

function App() {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [userName, setUserName] = useState();
  // const [numbers, setNumbers] = useState();
  // const [yesno, setYesNo] = useState(false);

  const [inputs, setInputs] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password, userName, numbers, yesno);
    console.log(inputs);
  }

  const handleInputs = (e) => {
    const value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value;
    const name = e.target.name;
    setInputs({...inputs, [name]:value})
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          Email: <input name='email' type="email" onChange={(e) => handleInputs(e)}/><br/>
          First Name: <input name='fname' type="text" onChange={(e) => handleInputs(e)}/><br/>
          Password: <input name='password' type="password" onChange={(e) => handleInputs(e)}/><br/>
          User Name: <input name='username' type="text" onChange={(e) => handleInputs(e)}/><br/>
          <select name='numbers' onChange={(e) => handleInputs(e)}>
            <option value="-1">Choose a number</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select><br/>
          Yes/No: <input name='yesno' type='checkbox' onChange={(e) => handleInputs(e)}/><br/>
          <input type="submit" value="send"/>
        </form>
      </header>
    </div>
  );
}

export default App;
