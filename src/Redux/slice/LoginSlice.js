import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email: '',
    password: ''
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logEmail: (state, action) => {
            state.email = action.payload
        },

        logPassword: (state, actoin) => {
            state.password = actoin.payload
        }
    }
});

export const { logEmail, logPassword } = loginSlice.actions;

export default loginSlice.reducer;