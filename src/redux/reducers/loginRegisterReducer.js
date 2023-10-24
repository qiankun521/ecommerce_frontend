const savedState=localStorage.getItem("loginRegisterState");//用于页面刷新后从本地存储中读取状态，只有在页面刷新时才会使用，初始状态在下面定义
const initState={logout:true,username:"",token:"",error:"",loginWaiting:false,registerWaiting:false};
const loginState=savedState?JSON.parse(savedState):initState;
const loginRegisterReducer=(state=loginState,action)=>{
    let newState;
    switch(action.type){
        case "LOGIN_REQUEST":
            newState={...state,logout:true,loginWaiting:true};
            break;
        case "LOGIN_SUCCESS":
            newState={...state,logout:false,username:action.username,token:action.token,message:action.success,loginWaiting:false};
            break;
        case "LOGIN_FAILURE":
            newState={...state,logout:true,message:action.error,loginWaiting:false};
            break;
        case "LOGOUT":
            newState=initState;
            break;
        case "REGISTER_REQUEST":
            newState={...state,registerWaiting:true};
            break;
        case "REGISTER_SUCCESS":
            newState={...state,message:action.success,registerWaiting:false};
            break;
        case "REGISTER_FAILURE":
            newState={...state,message:action.error,registerWaiting:false};
            break;
        default:
            newState=state;
            break;
    }
    localStorage.setItem("loginRegisterState",JSON.stringify(newState));
    return newState;
}

export default loginRegisterReducer;