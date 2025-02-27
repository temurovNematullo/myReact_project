import { configureStore } from "@reduxjs/toolkit";
import MainPageReducer from './mainPageReducer';
import DialogPageReducer from './dialogPageReducer';
import UserPageReducer from './userPageReducer'
const store = configureStore({
    reducer: {
      MainPage: MainPageReducer, // ✅ Должен быть объект, а не просто переменная!
      DialogPage: DialogPageReducer,
      UserPage: UserPageReducer
    }
  });
export default  store