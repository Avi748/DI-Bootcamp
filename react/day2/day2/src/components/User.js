// import { userstyle } from "./styling";
import './User.css'
// import Button from 'react-bootstrap/Button';

import React from 'react';


const User = (props) => {
    // console.log(props);
    const {name, email, id, username} = props.userinfo
    return (
        <div className='tc bg-light-green br3 ma2 dib bw2 grow shadow-5'>
            <img src={`https://robohash.org/${id}?size=150x150`} alt="" />
            <h2>{name}</h2>
            <h3>{email}</h3>
            <h4>{username}</h4>
        </div>
    );
}

/** Class component*/
// class User extends React.Component {
//     constructor(){
//         super();
//     }
//     render(){
//         const {name, email, id, username} = this.props.userinfo;
//     return (
//         <div className=''>
//             <img src={`https://robohash.org/${id}?size=150x150`} alt="" />
//             <h2>{name}</h2>
//             <h3>{email}</h3>
//             <h4>{username}</h4>
//         </div>
//         ); 
//     }
// }

export default User;