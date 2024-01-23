import './App.css';
import {useState} from 'react'

function App() {
  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [destination, setDestination] = useState('');

  const [checked, setChecked] = useState({
    box1: false,
    box2: false,
    box3: false
  });

  const handleChange = (e) => {
    setChecked((prevState) => ({ ...prevState, [e.target.name]: e.target.checked}));
    console.log(e.target.checked? "Yes" : "No");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input name='fname' type="text" placeholder='First Name' value={fname} onChange={(e) => setFirstName(e.target.value)}/><br/>
          <input name='lname' type="text" placeholder='Last Name' value={lname} onChange={(e) => setLastName(e.target.value)}/><br/>
          <input name='age' type="text" placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)}/><br/>
          <input name='gender' type="radio" value={"male"} checked={gender === "male"} onChange={(e) => setGender(e.target.value)}/>Male<br/>
          <input name='gender' type="radio" value={"female"} checked={gender === "female"} onChange={(e) => setGender(e.target.value)}/>Female<br/>

          <p>Select your destination</p>
          <select name='destination' value={destination} onChange={(e) => setDestination(e.target.value)}>
            <option value={""}>-- Please Choose a destination --</option>
            <option value={"Thailand"}>Thailand</option>
            <option value={"Japan"}>Japan</option>
            <option value={"Brazil"}>Brazil</option>
          </select><br/>
          
          <p>Dietary restrictions</p>
          <input name='box1' type='checkbox' checked={checked.box1} onChange={handleChange}/>Nuts free<br/>
          <input name='box2' type='checkbox' checked={checked.box2} onChange={handleChange}/>Lacthose free<br/>
          <input name='box3' type='checkbox' checked={checked.box3} onChange={handleChange}/>Vegan<br/>
          <input type="submit" value="send"/>
        </form>
      </header>
      <div>
        <h2>Entered Information</h2>
        <p> Your name: {fname} {lname}</p>
        <p> Your Age: {age}</p>
        <p> Your Gender: {gender}</p>
        <p>Your Destination: {destination}</p>
        <p>{"**Nut free: " + checked.box1}</p>
        <p>{"**Lacthose free: " + checked.box2}</p>
        <p>{"**Vegan meal: " + checked.box3}</p>
      </div>
    </div>
  );
}

export default App;