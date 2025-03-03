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
            state.userId = action.payload.userId;
            state.email = action.payload.email;
            state.login = action.payload.login;
            state.isAuth = true;
        }
    }
})

export const {setUserData} = authSlice.actions

export const Authorization = () =>{
    return(dispatch) =>{
        AuthAPI.AuthMe().then(data=>{
            if(data.resultCode === 0){
            dispatch(setUserData(data.data));
          
            }else{
              console.log("error you don't have access");
            }});
    }
}

export default authSlice.reducer