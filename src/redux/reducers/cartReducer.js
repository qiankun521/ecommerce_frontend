const initCart = {};
const cartReducer = (state = initCart, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':{
            const {id,num} = action.payload;
            const newState = {...state};
            newState[id] = parseInt(newState[id] || 0) + parseInt(num);
            return newState;
        }
        case 'REMOVE_FROM_CART':{
            const {id} = action.payload;
            const newState = {...state};
            delete newState[id];
            return newState;
        }
        case 'CLEAR_CART':{
            return initCart;
        }
        case 'INCREASE':{
            const {id} = action.payload;
            const newState = {...state};
            newState[id] = parseInt(newState[id] || 0) + 1;
            return newState;
        }
        case 'DECREASE':{
            const {id} = action.payload;
            const newState = {...state};
            newState[id] = parseInt(newState[id] || 0) - 1;
            if(newState[id] <= 0) delete newState[id];
            return newState;
        }
        case 'SET_TO':{
            const {id,num} = action.payload;
            const newState = {...state};
            newState[id] = parseInt(num);
            return newState;
        }
        default:
            return state;
    }
}
export default cartReducer;