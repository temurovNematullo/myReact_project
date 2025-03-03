import { createSlice } from "@reduxjs/toolkit";
import {UsersAPI} from '../API/API'

const initialState = {
  userData: [],
  pageSize: 3,
  currentPage: 1,
  totalUsersCount: 0,
  isFetch: Boolean,
  followingInProgress: [] ,
  isFetching: null
};

const userPageSlice = createSlice({
  name: "UserPage",
  initialState,
  reducers: {
    follow: (state, action) => {
      const user = state.userData.find(user => user.id === action.payload);
      if (user) {
        user.followed = true;
      }
    },
    unfollow: (state, action) => {
      const user = state.userData.find(user => user.id === action.payload);
      if (user) {
        user.followed = false;
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
export const { setCurrentPage, toggleIsFetch, toggleFollowingInProgress, unfollow, follow, setUsers, setTotalUsersCount } = userPageSlice.actions;


 export const getFollowing = (user) =>{

     return (dispatch) => {dispatch(toggleFollowingInProgress({ userId: user.id, isFetching: true }));
      if (user.followed ) {
       UsersAPI.Delete(user)
          .then(resultCode => {
            if (resultCode === 0) {
              dispatch(unfollow(user.id));
              dispatch(toggleFollowingInProgress({ userId: user.id, isFetching: false }));
            }
          });
          
      } else {
      UsersAPI.Post(user)
          .then(resultCode  => {
            if (resultCode === 0) {
              dispatch(follow(user.id));
              dispatch(toggleFollowingInProgress({ userId: user.id, isFetching: false }));
            }
          });
      }
    }
}

export const getUsers = (currentPage, pageSize) =>{
  return (dispatch) => {
      dispatch(toggleIsFetch(true));
        UsersAPI.GetUsers(currentPage, pageSize).then(data => {
          dispatch(toggleIsFetch(false));
          
          dispatch(setUsers(data.items));
          dispatch(setTotalUsersCount(data.totalCount));
        });
  }
}

// Export reducer
export default userPageSlice.reducer;
