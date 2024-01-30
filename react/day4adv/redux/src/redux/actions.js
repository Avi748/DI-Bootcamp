import { INCREMENT , DECREMENT} from "./reducers";

export const increment = (value, txt) => {
    return{
        type: INCREMENT,
        payload: value,
        text: txt
    };
};

export const decrement = (value, txt) => {
    return{
        type: DECREMENT,
        payload: value,
        text: txt
    };
};