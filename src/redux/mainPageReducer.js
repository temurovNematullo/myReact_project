const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = { postData:[
  {
    id: 1,
    message: "Pixel art is mu life)"
  },
  {
    id: 2,
    message: "Pixel I love PIXCEL)"
  },
  {
    id: 3,
    message: "Pixel I love PIXCEL)"
  }
],
newPostText: 'HI BITCH;)'}

 const MainPageReducer = (state = initialState, action) =>{
  
    switch (action.type) {
      case ADD_POST:
      let newPost = {
        id: state.postData.length + 1,
        message: state.newPostText
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: ''
      };
      case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
      default:
      return state;
    }
    
   
}

export const AddNewPostCreator = () => ({ type: ADD_POST });


export const UpdatePostCreator = (PostText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: PostText
});


export default MainPageReducer