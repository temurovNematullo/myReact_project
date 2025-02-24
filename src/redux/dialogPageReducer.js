const Update_New_Message_Body = 'Update_New_Message_Body'
const Send_Message = 'Send_Message'

const initialState = {
  userData:[
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
  
  messagesData:[
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

const DialogPageReducer = (state = initialState, action) =>{
    
    switch (action.type) {
      case Update_New_Message_Body:
        return {
          ...state,
          newMessageBody: action.body
        };
      case Send_Message:
        let body = state.newMessageBody;
        return {
          ...state,
          newMessageBody: '',
          messagesData: [...state.messagesData, { id: state.messagesData.length + 1, message: body }]
        };
      default:
        return state;
    }
}

export const UpdateNewMessageBodyCreator = (newMessageBody)=> ({
  type: Update_New_Message_Body,
  body: newMessageBody
})


export const SendBodyCreator = () => ({type: Send_Message})

export default DialogPageReducer