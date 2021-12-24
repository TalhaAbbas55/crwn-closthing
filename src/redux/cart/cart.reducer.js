import cartActionTypes from './cart.types';
const Initial_state = {
    hidden: true,
}

const cartReducer = (state = Initial_state, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
}

export default cartReducer