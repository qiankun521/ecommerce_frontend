import cartReducer from "./cartReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cart: cartReducer
    //TODO 可能有多个reducer
});
export default rootReducer;