import React, {useState} from 'react';
import App, { carinfo} from '../App.js';
import Garage from './Garage.js';

// class Car extends React.Component {
//     // constructor(){
//     //     super();
//     // }
//     render(){
//         return(
//             <div>
//                 <h1>This cars is {carinfo.name} {carinfo.model}</h1>
//             </div>
//         );
//     }
// }

const Car = () => {
    const [color] = useState("blue");
    return (
        <div>
            <h1>This cars is {color} {carinfo.name} {carinfo.model}</h1>
            <Garage size="small"/>
        </div>
    );
}

export default Car