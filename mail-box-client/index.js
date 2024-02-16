import { configureStore } from "@reduxjs/toolkit";


import authSlice from "./auth-slice";
import composeMailSlice from "./composeMail-slice";

const store = configureStore({
    reducer: {auth: authSlice.reducer, composemail: composeMailSlice.reducer}
})

export default store;