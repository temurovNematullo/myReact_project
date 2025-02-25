import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postData: [
    { id: 1, message: "Pixel art is my life)" },
    { id: 2, message: "Pixel I love PIXCEL)" },
    { id: 3, message: "Pixel I love PIXCEL)" },
  ],
  newPostText: "HI BITCH;)",
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
  },
});

// Экспортируем экшены
export const { addNewPost, updatePost } = mainPageSlice.actions;

// Экспортируем редьюсер
export default mainPageSlice.reducer;
