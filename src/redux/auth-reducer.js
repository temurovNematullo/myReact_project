 import { createSlice } from "@reduxjs/toolkit";
 import { AuthAPI } from "../API/API";

 const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: null
 }
  
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setUserData(state, action) {
            state.userId = action.payload.id;
            state.email = action.payload.email;
            state.login = action.payload.login;
            state.isAuth = action.payload.isAuth;
        }
    }
})

export const {setUserData} = authSlice.actions

export const Authorization = () => {
    return async (dispatch) => {
        const data = await AuthAPI.AuthMe();
        if (data.resultCode === 0) {
            dispatch(setUserData({ ...data.data, isAuth: true }));
            
        } else {
            console.log("error you don't have access");
        }
    };
}

export const Login = (email, password, rememberMe, setError, navigate) => {
    return async (dispatch) => {
        try {
            const data = await AuthAPI.Login(email, password, rememberMe);
            if (data.resultCode === 0) {
                await dispatch(Authorization());
                navigate("/main");
            } else if (data.resultCode === 1) {
                setError("_error", { type: "server", message: "Неверный логин или пароль" });
            } else if (data.resultCode === 10) {
                setError("_error", { type: "server", message: "СЛИШКОМ МНОГО НЕВЕРНЫХ ПОПЫТОК ПРОЙДИ CAPTCH" });
            }
            console.log("CODE", data.resultCode);
        } catch (error) {
            console.error("Login request failed:", error);
        }
    };
}

export const Logout = () =>{
    return async (dispatch) =>{
      const data = await AuthAPI.Logout()
            console.log("Logout response:", data);
            if (data.resultCode === 0){
                dispatch(setUserData({ userId: null, email: null, login: null, isAuth: false }));
                console.log("Logout successful, isAuth should be false");
            }else {
                console.log("Logout failed:", data); // ❌ Если не 0, увидим причину
            }
    }
}

export default authSlice.reducer