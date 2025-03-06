import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import mypost from "./MyPost.module.css";
import Post from "./Post/Post";
import Preloader from '../../common/preloader/Preloader'
import { getUserProfile, getUserStatus } from "../../../redux/mainPageReducer";
import styles from "./Post/Profile.module.css";
import ProfileStatus from "./ProfileStatus";
import PostForm from "./PostForm";


export default function MyPost(props) {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.Auth.isAuth);
  const posts = useSelector((state) => state.MainPage.postData)
 
  const status = useSelector((state) => state.MainPage.status)
  const userProfileData = useSelector((state)=> state.MainPage.userProfile) 
  const {userId} = props
  
  const authUserId = useSelector((state)=> state.Auth.userId)
  console.log(authUserId)
  
  useEffect(() => {
    const currentUserId = userId || authUserId;
    
    console.log(currentUserId)
    if (currentUserId) {
      dispatch(getUserProfile(currentUserId));
      dispatch(getUserStatus(currentUserId));
     
    }
  }, [userId, authUserId, dispatch]);
   

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

<ProfileStatus authUserId={authUserId} status={status} profileId={props.userId}/>
          
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
    {isAuth && (
      <div>
        <PostForm/>
        <div className={mypost.postHave}>
          {posts.map((post) => (
            <Post key={post.id} message={post.message} id={post.id} />
          ))}
        </div>
      </div>
    )}
    </div>
  );
}













