import cartReducer from "./cartReducer";
import loginRegisterReducer from "./loginRegisterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cart: cartReducer,
    loginRegister: loginRegisterReducer
});
export default rootReducer;