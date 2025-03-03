import { type } from "@testing-library/user-event/dist/type";
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import MainPageReducer from "./mainPageReducer";
import DialogPageReducer from "./dialogPageReducer"

let store = {
   _state: {
 

    DialogPage: {
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
    newMessageBody: " "
  },
  
    MainPage: {
    postData:[
      {
        id: 1,
        message: "Pixel art is mu life)"
      },
      {
        id: 2,
        message: "Pixel I love PIXCEL)"
      },
      {
        id: 2,
        message: "Pixel I love PIXCEL)"
      }
    ],
    newPostText: 'HI BITCH;)'
  }
},
_callSubscriber() {
},
getState(){
  return this._state;
},
subscribe (observer) {
  this._callSubscriber = (observer)
} , 

dispatch (action) {
 
  this._state.MainPage = MainPageReducer(this._state.MainPage, action)
  this._state.DialogPage = DialogPageReducer(  this._state.DialogPage, action)

        this._callSubscriber(this._state)
     }

}


 

export default store;