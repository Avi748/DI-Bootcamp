// import logo from './logo.svg';
import './App.css';
import User from './components/User';
// import users from './users.json'
import React, {Component, useEffect, useState} from 'react';

/** inline style
 * class - external css file
 * css library
 */

/** components - function / class
 * hooks
 * lifecycle component
 * state object
 * rerender
 */

const App = () => {
  const [title, setTitle] = useState('My Title');
  const [users, setUsers] = useState();

  useEffect(() => {
    if(users)
    changeTitle()
  }, [users]) //dependency

  const changeTitle = () => {
    setTitle('My Users')
    // getUsers()
  }

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
      setUsers(data)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return(
    <div>
      <h1>{title}</h1>
      <button onClick={getUsers}>Change Title</button>
      {
        users?users.map(item => { // ? check if users have data else return :null
          return <User userinfo={item} key={item.id}/>
        }):null
      }
    </div>
  );
}

export default App;
