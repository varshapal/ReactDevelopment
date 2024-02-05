import { createSlice } from "@reduxjs/toolkit";

const initialuiState = { showCart: false}
const uiSlice = createSlice({
    name: 'ui',
    initialState: initialuiState,
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart;
        }
    }
})



export const uiActions = uiSlice.actions;

export default uiSlice;