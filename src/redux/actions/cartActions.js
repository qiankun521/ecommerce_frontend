export const addToCart=(id,num)=>({
    type: 'ADD_TO_CART',
    payload: {
        "id":id,
        "num":num
    }
})
export const removeFromCart=(id)=>({
    type: 'REMOVE_FROM_CART',
    payload: {
        "id":id
    }
})
export const setTo=(id,num)=>({
    type: 'SET_TO',
    payload: {
        "id":id,
        "num":num
    }

})
export const clearCart=()=>({
    type: 'CLEAR_CART'
})
export const increase=(id)=>({
    type: 'INCREASE',
    payload: {
        "id":id
    }
})
export const decrease=(id)=>({
    type: 'DECREASE',
    payload: {
        "id":id
    }
})