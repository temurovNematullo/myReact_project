import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: [
    {
      id: 1,
      name: "Nema",
      avatar: "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
    },
    {
      id: 2,
      name: "SharkY",
      avatar: "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
    },
    {
      id: 3,
      name: "SharkYpIXel",
      avatar: "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
    },
    {
      id: 4,
      name: "NemaSharkY",
      avatar: "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
    }
  ],
  messagesData: [
    {
      id: 1,
      message: "Hi"
    },
    {
      id: 2,
      message: "How are you?"
    },
    {
      id: 3,
      message: "I'm fine"
    }
  ],
  newMessageBody: "Hi kurwa"
};

const dialogPageSlice = createSlice({
  name: 'dialogPage',
  initialState,
  reducers: {
    updateNewMessageBody: (state, action) => {
      state.newMessageBody = action.payload;
    },
    sendMessage: (state) => {
      const newMessage = {
        id: state.messagesData.length + 1,
        message: state.newMessageBody
      };
      state.messagesData.push(newMessage);
      state.newMessageBody = '';
    }
  }
});

export const { updateNewMessageBody, sendMessage } = dialogPageSlice.actions;

export default dialogPageSlice.reducer;
