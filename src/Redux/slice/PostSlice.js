import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    photo: '',
    text: ''
}

const PostSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postPhoto: (state, action) => {
            state.photo = action.payload
        },
        postPhotoRemove: (state) => {
            state.photo = '';
        },
        postText: (state, action) => {
            state.text = action.payload;
        },
        postTextRemove: (state) => {
            state.text = '';
        }
    }
});

export const { postPhoto, postText, postPhotoRemove, postTextRemove } = PostSlice.actions;

export default PostSlice.reducer;