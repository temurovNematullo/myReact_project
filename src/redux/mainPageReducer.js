import { createSlice } from "@reduxjs/toolkit";
import { ProfileAPI } from "../API/API";
import {toggleIsFetch} from "../redux/userPageReducer";


const initialState = {
  postData: [
    { id: 1, message: "Pixel art is my life)" },
    { id: 2, message: "Pixel I love PIXCEL)" },
 
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
    deletePost: (state, action) => {
      state.postData = state.postData.filter(post => post.id !== action.payload);
    },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload; 
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    updateUserPhoto(state, action) {
      state.userProfile.photos.large = action.payload; // ✅ Обновляем фото в стейте
    }
  },
});

export const { addNewPost, updatePost, setUserProfile, setStatus, deletePost, updateUserPhoto} = mainPageSlice.actions;

// Экспортируем редьюсер
export default mainPageSlice.reducer;


export const getUserProfile = (userId) =>{
  return async (dispatch) =>{

if (!userId) return;
    dispatch(toggleIsFetch(true));
   const data = await ProfileAPI.GetProfileUser(userId)
      dispatch(toggleIsFetch(false));
      dispatch(setUserProfile(data));
  
    
}
}

export const getUserStatus = (userId) => {
  return async (dispatch) => {
    if (!userId) return;
  const status = await ProfileAPI.GetStatus(userId)
  
    
    dispatch(setStatus(status));
  }
 
};

export const updateUserStatus = (status) => {
  return async (dispatch) => {
   const response = await ProfileAPI.UpdateStatus(status)
      if (response.resultCode === 0) {
        dispatch(setStatus(status));
      }

  };
};

export const uploadProfilePhoto = (file) => async (dispatch) => {
  try {
    const data = await ProfileAPI.updatePhoto(file);
    if (data.resultCode === 0) {
      dispatch(updateUserPhoto(data.data.photos.large)); // ✅ Диспатчим новое фото
    }
  } catch (error) {
    console.error("Ошибка загрузки фото:", error);
  }
};
