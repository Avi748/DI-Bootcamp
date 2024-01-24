import PostList from './components/PostList';
import SocialMedias from './components/Example1';
import Skills from './components/Example2';
import Experiences from './components/Example3';
import './App.css';

function App() {


const getData = async () => {
  try {
    const dataToSend = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    }
    
    const data = {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(dataToSend)
    }

    const res = await fetch("https://webhook.site/ae3d14b6-d175-48fe-977f-dad17be8b414", data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div>
      <button onClick={getData}>Post</button>
    </div>
  );
}

export default App;
