import { combineReducers } from "redux";
import productReducer from "./reducer";

const rootReducer = combineReducers({
    data: productReducer,
})

export default rootReducer;
