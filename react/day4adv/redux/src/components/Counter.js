import { Connect, useSelector, useDispatch, connect } from "react-redux";
import { increment , decrement} from "../redux/actions";

const Counter = (props) => {

    // const count = useSelector((state) => state.new_counter.count)
    // const text = useSelector((state) => state.new_counter.text)

    const {count, text} = useSelector((state) => state.new_counter)
    const dispatch = useDispatch();

    console.log(props);
    return(
        <>
        <div>
        <h2>Count: {count}</h2>
        <p>{text}</p>
        <button onClick={() => dispatch(increment(1, "Increment by 1"))}>+</button>
        <button onClick={() => dispatch(decrement(10, "Decrement by 10"))}>-</button>
        </div>
        </>
    );
}

export default connect()(Counter);

// const Counter = (props) => {
//     console.log(props);
//     return(
//         <>
//         <div>
//         <h2>Count: {props.myCount}</h2>
//         <p>{props.text}</p>
//         <button onClick={() => props.setNewCount(10)}>+</button>
//         <button onClick={() => props.dec(1)}>-</button>
//         </div>
//         </>
//     );
// }

// const Counter = (props) => {
//     console.log(props);
//     return(
//         <>
//         <div>
//         <h2>Count: {props.myCount}</h2>
//         <p>{props.text}</p>
//         <button onClick={() => props.setNewCount(10)}>+</button>
//         <button onClick={() => props.dec(1)}>-</button>
//         </div>
//         </>
//     );
// }

// const mapStateToProps = (state) => {
//     console.log('storeState => ', state);
//     return {
//         myCount : state.new_counter.count,
//         text : state.new_counter.text
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setNewCount: (value) => dispatch(increment(value, "Increment by " + value)),
//         dec: (value) => dispatch(decrement(value, "Decrement by " + value))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);