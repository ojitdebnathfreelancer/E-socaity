import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photo: "",
  text: "",
  user: {},
};

const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postPhoto: (state, action) => {
      state.photo = action.payload;
    },
    postPhotoRemove: (state, action) => {
      state.photo = "";
    },
    postText: (state, action) => {
      state.text = action.payload;
    },
    postTextRemove: (state) => {
      state.text = "";
    },
    postedUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  postPhoto,
  postText,
  postPhotoRemove,
  postTextRemove,
  postedUser,
} = PostSlice.actions;

export default PostSlice.reducer;
