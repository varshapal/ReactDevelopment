import { createSlice } from "@reduxjs/toolkit";

const initialComposeMailState = { to: '', sub: '', msg: ''}
const composeMailSlice = createSlice({
    name: 'sendmail',
    initialState: initialComposeMailState,
    reducers: {
        composeMail(state, action) {
            state.to = action.payload.to;
            state.sub = action.payload.sub;
            state.msg = action.payload.msg
            
        }
    }
})


export const composemailActions = composeMailSlice.actions;

export default composeMailSlice;