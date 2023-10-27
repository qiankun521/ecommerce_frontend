import cartReducer from "./cartReducer";
import loginRegisterReducer from "./loginRegisterReducer";
import personalReducer from "./personalReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cart: cartReducer,
    loginRegister: loginRegisterReducer,
    personal: personalReducer,
});
export default rootReducer;