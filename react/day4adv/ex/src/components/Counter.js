import { useSelector, useDispatch, connect } from "react-redux";
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