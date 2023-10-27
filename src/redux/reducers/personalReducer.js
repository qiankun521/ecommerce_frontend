const savedState = JSON.parse(localStorage.getItem('personalState'));
const username = JSON.parse(localStorage.getItem('loginRegisterState')).username;
const initState = savedState ? savedState : {username:username,nickname:"",address:"",contact:"",message:"",personalWaiting:false};
const personalReducer = (state = initState, action) => {
    let newState;
    switch (action.type) {
        case "PROFILE_REQUEST":
            newState = {...state, personalWaiting: true};
            break;
        case "PROFILE_SUCCESS":
            newState = {...state, nickname:action.nickname,address:action.address,contact:action.contact,message: action.message, personalWaiting: false};
            break;
        case "PROFILE_FAILURE":
            newState = {...state, message: action.message, personalWaiting: false};
            break;
        default:
            newState = state;
            break;
    }
    localStorage.setItem('personalState', JSON.stringify(newState));
    return newState;
};
export default personalReducer;