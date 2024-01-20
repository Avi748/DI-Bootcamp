import './App.css';
import React,{useState,} from 'react';
import 'tachyons'
// import Car from './Components/Car.js'
// export const carinfo = {name: "Ford", model: "Mustang"};
// import Events from './Components/Events';
// import Phone from './Components/Phone';
// import Color from './Components/Color';


function App() {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])

  const handleIncrement = (lname) => () => {
    const new_languages = languages.map((lang) => {
      if(lang.name === lname){
        lang.votes = lang.votes + 1;
      }
      return lang
    })
    setLanguages(new_languages)
  };

  return (
    <div className="App">
      <ul>
        {languages.map((lang) => (
          <div className="tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
            <p>{lang.votes}</p>
            <p>{lang.name}</p>
            <button onClick={handleIncrement(lang.name)}>Click Here</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
