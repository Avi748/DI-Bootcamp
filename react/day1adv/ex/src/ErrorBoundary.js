import React from "react";

class ErrorBoundary extends React.Component {
    constructor(){
        super();
        this.state = {
            hasError : null,
            error : "",
            errorinfo : ""
        }
    }

    componentDidCatch = (error, errorinfo) => {
        this.setState({
            hasError : true,
            error : error,
            errorinfo : errorinfo
        })
    }

    render(){
        if(this.state.hasError){
            return(
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorinfo.componentStack}
                </details>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary