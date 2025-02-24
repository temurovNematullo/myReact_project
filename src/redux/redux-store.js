import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MainPageReducer from './mainPageReducer';
import DialogPageReducer from './dialogPageReducer';

const store = configureStore({
    reducer: {
      MainPage: MainPageReducer, // ✅ Должен быть объект, а не просто переменная!
      DialogPage: DialogPageReducer,
    }
  });
export default  store