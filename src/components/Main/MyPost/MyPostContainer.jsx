
import React from 'react';
import MyPost from './MyPost';
import { AddNewPostCreator,UpdatePostCreator } from '../../../redux/mainPageReducer';


function MyPostContainer(props) {
 debugger;
  let state = props.store.getState();

  
  let addpost = () => {
      props.store.dispatch(AddNewPostCreator());
        }

  


let changePost = (PostText) => {
  props.store.dispatch(UpdatePostCreator(PostText));

}


return <MyPost UpdatePost = {changePost}  AddNewPost = {addpost} Posts = {state.MainPage.postData}
 newPostText={state.MainPage.newPostText}/>

}

export default MyPostContainer;