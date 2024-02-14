import { createSlice } from "@reduxjs/toolkit";


const initialAuthState = { token: null, isSignup: false, isLogin: false, isAuth: false}
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        isSignup(state, action) {
            state.isSignup = true;
            state.token = action.payload;
        },
        isLogin(state, action) {
            state.isAuth = true;
            state.token = action.payload;
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice;