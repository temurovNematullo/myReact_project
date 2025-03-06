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
  userProfile: {},
  status: "HI BITCH;)"
};

const mainPageSlice = createSlice({
  name: "MainPage",
  initialState,
  reducers: {
    addNewPost: (state, action) => {
      const newPost = {
        id: state.postData.length + 1,
        message: action.payload,
      };
      state.postData.push(newPost); // ✅ Можно мутировать `state` благодаря `immer`
      state.newPostText = ""; // ✅ Очищаем поле после добавления поста
    },
    // updatePost: (state, action) => {
    //   state.newPostText = action.payload; // ✅ Обновляем `newPostText`
    // },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload; 
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { addNewPost, updatePost, setUserProfile, setStatus } = mainPageSlice.actions;

// Экспортируем редьюсер
export default mainPageSlice.reducer;
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

export const getUserStatus = (userId) => {
  return (dispatch) => {
    if (!userId) return;

    console.log(`Запрос на статус пользователя с id: ${userId}`);
    ProfileAPI.GetStatus(userId)
  .then(status => {
    console.log("✅ Ответ от сервера:", status); // Проверяем, что сервер что-то вернул
    dispatch(setStatus(status));
  })
  .catch(error => {
    console.error("❌ Ошибка при получении статуса:", error.response?.data || error.message);
  });

  };
};

export const updateUserStatus = (status) => {
  return (dispatch) => {
    ProfileAPI.UpdateStatus(status).then(response => {
      if (response.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};


