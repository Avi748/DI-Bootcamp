import Increment from "./Increment";

const Counter = (props) => {
    return(
        <>
        Count: {props.a}<Increment c = {props.b} d = {props.a}/>
        </>
    );
}

export default Counter