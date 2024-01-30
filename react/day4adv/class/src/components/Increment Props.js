
const Increment = (props) => {
    return(
        <>
        <button onClick={() => {props.c( props.d + 1 )}}>+</button>
        </>
    );
}

export default Increment