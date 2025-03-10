import { createSlice } from "@reduxjs/toolkit";
import {UsersAPI} from '../API/API'

const initialState = {
  userData: [],
  pageSize: 3,
  currentPage: 1,
  totalUsersCount: 0,
  isFetch: null,
  followingInProgress: [] ,
  isFetching: null
};

const userPageSlice = createSlice({
  name: "UserPage",
  initialState,
  reducers: {
    updateFollowStatus: (state, action) => {
      const user = state.userData.find(user => user.id === action.payload.userId);
      if (user) {
        user.followed = action.payload.followed;
      }
    },
    setUsers: (state, action) => {
      state.userData = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalUsersCount: (state, action) => {
      state.totalUsersCount = action.payload;
    },
    toggleIsFetch: (state, action) => {
      state.isFetch = action.payload;
    },
    toggleFollowingInProgress: (state, action) => {
      if (action.payload.isFetching) {
        state.followingInProgress.push(action.payload.userId);
      } else {
        state.followingInProgress = state.followingInProgress.filter(id => id !== action.payload.userId);
      }
    }
  },
});

// Export actions
export const { setCurrentPage, toggleIsFetch, toggleFollowingInProgress, updateFollowStatus, setUsers, setTotalUsersCount } = userPageSlice.actions;


 export const getFollowing = (user) =>{

     return async (dispatch) => {dispatch(toggleFollowingInProgress({ userId: user.id, isFetching: true }));
      if (user.followed ) {
      const result = await UsersAPI.Delete(user)
            if (result === 0) {
              dispatch(updateFollowStatus({ userId: user.id, followed: false }));
             
            }
         
      } else {
        const result = await UsersAPI.Post(user)
            if (result === 0) {
              dispatch(updateFollowStatus({ userId: user.id, followed: true }));
              
            }
            
      }
      dispatch(toggleFollowingInProgress({ userId: user.id, isFetching: false }));
    }
}

export const getUsers = (currentPage, pageSize) =>{
  return async (dispatch) => {
      dispatch(toggleIsFetch(true));
       const data = await UsersAPI.GetUsers(currentPage, pageSize)
          dispatch(toggleIsFetch(false));
          dispatch(setUsers(data.items));
          dispatch(setTotalUsersCount(data.totalCount));
        
  }
}

// Export reducer
export default userPageSlice.reducer;
