import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "../slice/LoginSlice";
import PostSlice from "../slice/PostSlice";
import SignupSlice from "../slice/SignupSlice";

const Store = configureStore({
    reducer: {
        signup: SignupSlice,
        login: LoginSlice,
        post: PostSlice,
    }
})

export default Store;