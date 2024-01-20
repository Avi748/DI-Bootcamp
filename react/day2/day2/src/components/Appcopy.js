// import logo from './logo.svg';
import './App.css';
import User from './components/User';
// import users from './users.json'
import React from 'react';

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

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'My state Title Robots',
      users:[]
    }
    console.log('constructor');
  }

  changeTitle = () => {
    this.setState({title:'My Users'})
    // console.log(this.title);
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      this.setState({users:data})
    })
    .catch((error) => {
      console.log(error);
    })
  }

  componentDidMount = () =>{
    console.log('componentDidMount');
  }

  componentDidUpdate = () => {
    console.log('componentDidUpdate');
  }

  render(){
    console.log('render');
      return (
        <div>
          <h1>{this.state.title}</h1>
          <button onClick={this.changeTitle}>Change Title</button>
          <br/>
            {
              this.state.users.map((item, index) => {
                return <User userinfo={item} key={index}/>
              })
            }
        </div>
      );
    }
}

// function App() {
//   return (
//     <div>
//         {
//           users.map((item, index) => {
//             return <User userinfo={item} key={index}/>
//           })
//         }
//     </div>
//   );
// }

export default App;
