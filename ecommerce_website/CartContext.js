import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
    products: [],
    cartCount: 0,
    cartItems: [],
}
const cartReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartCount: state.cartCount + 1,
                
                // cartItems: [...state.cartItems, {...action.payload, id: generateId() }],
            };

        case 'ADD_TO_CART_MODAL':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        
            default:
                return state;
    }
};

const generateId = () => {
    return Math.random().toString(36).substring(7);
}

const CartProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, initialState);


const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART'});
}

const addToCartModal = (product) => {
    dispatch({type: 'ADD_TO_CART_MODAL', payload: product})
}

return (
    <CartContext.Provider value={{ products: cartState.products, cartCount: cartState.cartCount, addToCart, addToCartModal, cartItems: cartState.cartItems}}>
        {children}
    </CartContext.Provider>
)
};

// const useCartContext = () => {
//     return useContext(CartContext);
// };

export { CartProvider, CartContext };