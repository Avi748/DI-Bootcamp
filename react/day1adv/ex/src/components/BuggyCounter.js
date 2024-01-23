import React from "react";

class BuggyCounter extends React.Component {
  constructor(){
      super();
      this.state = {
          counter : 0
      }
  }

  handleClick = e => {
    this.setState(prev => ({counter : prev.counter + 1}))
  };

  render(){
    if(this.state.counter > 5){
        throw new Error('I crashed!')
    }
    return(
        <div>
      <button className="block" onClick={this.handleClick}>
        <div className="counter">{this.state.counter}</div>
      </button>
        </div>
    );
  }
}

export default BuggyCounter