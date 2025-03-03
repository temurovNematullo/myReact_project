import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import mypost from "./MyPost.module.css";
import Post from "./Post/Post";
import Preloader from '../../common/preloader/Preloader'
import { addNewPost, updatePost, getUserProfile } from "../../../redux/mainPageReducer";
import styles from "./Post/Profile.module.css";


export default function MyPost(props) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.MainPage.postData);
  const newPostText = useSelector((state) => state.MainPage.newPostText);

  const {userId} = props

  useEffect(() => {
   dispatch(getUserProfile(userId))
  }, [userId,dispatch]);
   
const userProfileData = useSelector((state)=> state.MainPage.userProfile) 


  return (
    <div>
    <div className={styles.profileContainer}>
      {userProfileData ? (
        <>
          <div className={styles.profileHeader}>
            <img
              className={styles.profileImage}
              src={userProfileData.photos?.large}
              alt="Avatar"
            />
            <h2>{userProfileData.fullName}</h2>
            <p><strong>Обо мне:</strong> {userProfileData.aboutMe}</p>
          </div>

          <div className={styles.profileDetails}>
            <p><strong>Ищу работу:</strong></p>
            <p>{userProfileData.lookingForAJob ? "Да" : "Нет"}</p>

            <p><strong>Описание работы:</strong></p>
            <p>{userProfileData.lookingForAJobDescription}</p>
          </div>

          <h3>Контакты:</h3>
          {userProfileData.contacts ? (
            <div className={styles.contactsList}>
              {Object.entries(userProfileData.contacts).map(([key, value]) =>
                value ? (
                  <div key={key} className={styles.contactItem}>
                    <span><strong>{key}:</strong></span>
                    <a href={value} target="_blank" rel="noopener noreferrer">{value}</a>
                  </div>
                ) : null
              )}
            </div>
          ) : (
            <p>Контакты отсутствуют</p> // ✅ Если `contacts === null`, показываем сообщение
          )}

        </>
      ) : (
        <Preloader />
      )}
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
