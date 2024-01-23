// import logo from './logo.svg';
import './App.css';
import User from './components/User';
// import users from './users.json'
import React, {Component, useEffect, useState} from 'react'; //useState to rerender the page
import GetUsersButton from './components/GetUsersButton';
import SearchUsers from './components/SearchUsers';

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
  const [filterUsers, setfilterUsers] = useState('')

  useEffect(() => {
    // if(users)
    // changeTitle()
    getUsers();
  }, []) //dependency

  const changeTitle = () => {
    setTitle('My Users')
    // getUsers()
  }

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
      setfilterUsers(data)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const search = (value) => {
    const filter = users.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    })
    setfilterUsers(filter)
  }

  return(
    <div>
      <h1>{title}</h1>
      {/* <GetUsersButton getUserFunc = {getUsers}/> */}
      <SearchUsers search = {search}/>
      {
        users?users.map(item => { // ? check if users have data else return :null
          return <User userinfo={item} key={item.id}/>
        }):null
      }
    </div>
  );
}

export default App;
