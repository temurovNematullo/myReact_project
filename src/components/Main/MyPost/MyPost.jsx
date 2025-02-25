import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewPost, updatePost } from "../../../redux/mainPageReducer";
import samurai from "../../../img/samurai.png";
import mypost from "./MyPost.module.css";
import Post from "./Post/Post";

export default function MyPost() {
  const dispatch = useDispatch();
  
  // Получаем данные из Redux
  const posts = useSelector((state) => state.MainPage.postData);
  const newPostText = useSelector((state) => state.MainPage.newPostText);

  return (
    <div>
      <div className={mypost.main__title}>
        <img src={samurai} />
        <div className={mypost.UserInfo}>
          <span className={mypost.main__txt}>Component 1 is the best component.</span>
          <span className={mypost.main__txt}>Component 1 is the best component.</span>
        </div>
      </div>
      <div className={mypost.AddNewPost}>
        <textarea
          className={mypost.textareaPost}
          value={newPostText}
          onChange={(event) => dispatch(updatePost(event.target.value))}
        />
        <button
          className={mypost.addPost_button}
          onClick={() => newPostText.trim() !== "" && dispatch(addNewPost())}
        >
          Add post
        </button>
      </div>
      <div className={mypost.postHave}>
        {posts.map((post) => (
          <Post key={post.id} message={post.message} id={post.id} />
        ))}
      </div>
    </div>
  );
}
