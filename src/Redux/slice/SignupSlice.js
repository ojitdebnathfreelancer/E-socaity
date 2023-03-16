import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        name: (state, action) => {
            state.name = action.payload
        },

        email: (state, action) => {
            state.email = action.payload
        },

        password: (state, action) => {
            state.password = action.payload
        },

        confirmPassword: (state, action) => {
            state.confirmPassword = action.payload
        }
    }
})

export const { name, email, password, confirmPassword } = SignupSlice.actions;

export default SignupSlice.reducer;