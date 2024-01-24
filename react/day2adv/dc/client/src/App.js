import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function App(props) {
  const[hello, setHello] = useState();
  const[post, setPost] = useState();

  useEffect(() => {
    getHello()
},[])

const getHello = async () => {
  try {
      const res = await axios.get("http://localhost:3001/api/hello")
      setHello(res.data);
      console.log(res.data);
  } catch (err) {
      console.log(err);
  }
}

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:3001/api/world")
    setPost(res.data)
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}

  return (
    <div className="App">
        <h1>{hello}</h1>
        <form>
          <h2>Post to Server:</h2><br/>
          <input type="text" onChange={(e) => setPost(e.target.value)}/>
          <input type='submit' value={"Submit"} onClick={handleSubmit}></input>
          <p>{post}</p>
        </form>
    </div>
  );
}

export default App;
