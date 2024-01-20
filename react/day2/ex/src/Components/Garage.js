import React from "react";

class Garage extends React.Component {
    render(){
        return(
            <p>Who lives in my {this.props.size} Garage?</p>
        );
    }
}

export default Garage