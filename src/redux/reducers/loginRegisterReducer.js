const loginState={logout:true,username:"",token:"",error:"",loginWaiting:false,registerWaiting:false}
const loginRegisterReducer=(state=loginState,action)=>{
    switch(action.type){
        case "LOGIN_REQUEST":
            return {...state,logout:true,loginWaiting:true}
        case "LOGIN_SUCCESS":
            return {...state,logout:false,username:action.username,token:action.token,message:action.success,loginWaiting:false}
        case "LOGIN_FAILURE":
            return {...state,logout:true,message:action.error,loginWaiting:false}
        case "LOGOUT":
            return loginState
        case "REGISTER_REQUEST":
            return {...state,registerWaiting:true}
        case "REGISTER_SUCCESS":
            return {...state,message:action.success,registerWaiting:false}
        case "REGISTER_FAILURE":
            return {...state,message:action.error,registerWaiting:false}
        default:
            return state
    }
}

export default loginRegisterReducer;