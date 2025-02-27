import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
  pageSize: 3,
  currentPage: 1,
  totalUsersCount: 0,
  isFetch: Boolean
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
    }
  },
});

// Export actions
export const { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount,  toggleIsFetch } = userPageSlice.actions;

// Export reducer
export default userPageSlice.reducer;
