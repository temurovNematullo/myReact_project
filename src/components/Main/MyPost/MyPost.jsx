import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import samurai from "../../../img/samurai.png";
import mypost from "./MyPost.module.css";
import Post from "./Post/Post";
import axios from "axios";
import Preloader from '../../common/preloader/Preloader'
import { addNewPost, updatePost, setUserProfile } from "../../../redux/mainPageReducer";
import { toggleIsFetch } from "../../../redux/userPageReducer";




export default function MyPost() {
  const dispatch = useDispatch();
  // Получаем данные из Redux
  const posts = useSelector((state) => state.MainPage.postData);
  const newPostText = useSelector((state) => state.MainPage.newPostText);

  useEffect(() => {
    dispatch(toggleIsFetch(true));
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
      dispatch(toggleIsFetch(false));
      dispatch(setUserProfile(response.data));
    });
  }, [dispatch]);
   
const userProfileData = useSelector((state)=> state.MainPage.userProfile) 


  return (
    <div>
       <div>
    {userProfileData ? (
      <>
        <h2>{userProfileData.fullName}</h2>
        <p>{userProfileData.aboutMe}</p>
        <img src={userProfileData.photos?.small} alt="Avatar" />
      </>
    ) : (
      <Preloader/>
    )}
  </div>
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
