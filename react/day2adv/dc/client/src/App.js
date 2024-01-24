import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const[hello, setHello] = useState();
  const[post, setPost] = useState();
  const[input, setInput] = useState();

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
    const res = await axios.get(`http://localhost:3001/api/world/${input}`)
    setPost(res.data.message)
    // console.log(res.data);
} catch (err) {
    console.log(err);
}
}

  return (
    <div className="App">
        <h1>{hello}</h1>
        <form>
          <h2>Post to Server:</h2><br/>
            <input onChange={(e) => setInput(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
          <p>{post}</p>
        </form>
    </div>
  );
}

export default App;
