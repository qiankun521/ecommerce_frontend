export const loginRequest=()=>({
    type:"LOGIN_REQUEST",
})

export const loginSuccess=(username,token,success)=>({
    type:"LOGIN_SUCCESS",
    username,
    token,
    message:success
})

export const loginFailure=(error)=>({
    type:"LOGIN_FAILURE",
    message:error
})

export const logOut=()=>({
    type:"LOGOUT"
})

export const registerRequest=(username,password)=>({
    type:"REGISTER_REQUEST",
    username,
    password,
    registerWaiting:true
})

export const registerSuccess=(success)=>({
    type:"REGISTER_SUCCESS",
    message:success
})  

export const registerFailure=(error)=>({
    type:"REGISTER_FAILURE",
    message:error
})