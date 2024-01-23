import React from "react";

class ErrorBoundary extends React.Component {
    constructor(){
        super();
        this.state = {
            hasError : false,
        }
    }

    componentDidCatch = (error, errorinfo) => {
        console.log(error);
        this.setState({hasError : true})
    }

    render(){
        if(this.state.hasError){
            return <>We are so sorry</>
        }
        return this.props.children;
    }
}

export default ErrorBoundary