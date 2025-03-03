import { createSlice } from "@reduxjs/toolkit";
import { ProfileAPI } from "../API/API";
import {toggleIsFetch} from "../redux/userPageReducer";


const initialState = {
  postData: [
    { id: 1, message: "Pixel art is my life)" },
    { id: 2, message: "Pixel I love PIXCEL)" },
    { id: 3, message: "Pixel I love PIXCEL)" },
  ],
  newPostText: "HI BITCH;)",
  userProfile: {}
};

const mainPageSlice = createSlice({
  name: "MainPage",
  initialState,
  reducers: {
    addNewPost: (state) => {
      const newPost = {
        id: state.postData.length + 1,
        message: state.newPostText,
      };
      state.postData.push(newPost); // ✅ Можно мутировать `state` благодаря `immer`
      state.newPostText = ""; // ✅ Очищаем поле после добавления поста
    },
    updatePost: (state, action) => {
      state.newPostText = action.payload; // ✅ Обновляем `newPostText`
    },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload; 
    },
  },
});

// Экспортируем экшены
export const { addNewPost, updatePost, setUserProfile } = mainPageSlice.actions;

export const getUserProfile = (userId) =>{
  return (dispatch) =>{

if (!userId) return;
    dispatch(toggleIsFetch(true));
   ProfileAPI.GetProfileUser(userId).then(data => {
      dispatch(toggleIsFetch(false));
      dispatch(setUserProfile(data));
    });
    
}
}
// Экспортируем редьюсер
export default mainPageSlice.reducer;
