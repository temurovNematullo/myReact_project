import { type } from '@testing-library/user-event/dist/type';
import samurai from '../../../img/samurai.png';
import mypost from './MyPost.module.css';
import Post from './Post/Post';
import React from 'react';



function MyPost(props) {


  let newPostText = props.newPostText; 
  
  let addpost = () => {

    if (newPostText.trim() !== "") { // Проверяем, что сообщение не пустое
      
      props.AddNewPost()
        }

  
}

let changePost = (event) => {
  let PostText = event.target.value;
  props.UpdatePost(PostText)


}

  let postElements = props.Posts.map( post => <Post message = {post.message} id = {post.id}/>)

return (
    <div>
<div className={mypost.main__title}>
<img src= {samurai}/>
<div className={mypost.UserInfo}>
<span className={mypost.main__txt}>Component 1 is the best component. 
</span>
<span className={mypost.main__txt}>Component 1 is the best component.  
</span>
</div>
</div>
<div className={mypost.AddNewPost} >

  <textarea className={mypost.textareaPost} 
  name={mypost.PostText}  onChange={changePost} 
  value={newPostText} />


  <button className={mypost.addPost_button} onClick={addpost}>Add post</button>
</div>
  <div className={mypost.postHave}>
 {postElements}
 </div>
  </div>
)
}

export default MyPost;