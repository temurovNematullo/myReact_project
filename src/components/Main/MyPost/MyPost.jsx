import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useEffect } from "react";
import mypost from "./MyPost.module.css";
import Post from "./Post/Post";
import Preloader from '../../common/preloader/Preloader'
import { getUserProfile, getUserStatus } from "../../../redux/mainPageReducer";
import styles from "./Post/Profile.module.css";
import ProfileStatus from "./ProfileStatus";
import PostForm from "./PostForm";
import ProfilePhotoUploader from "../ProfilePhotoUploader"
import UserContacts from "../UserContacts";

 function MyPost({userId, authUserId}) {
  console.log("Ререндер MyPosts")
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.Auth.isAuth)
  const status = useSelector((state) => state.MainPage.status)
  const posts = useSelector((state) => state.MainPage.postData, shallowEqual);
  const userProfileData = useSelector((state) => state.MainPage.userProfile, shallowEqual);
 
 
  
  useEffect(() => {
    const currentUserId = userId || authUserId;

    if (currentUserId) {
      dispatch(getUserProfile(currentUserId));
      dispatch(getUserStatus(currentUserId));
     
    }
  }, [userId, authUserId]);
   

  return (
    <div>
      
    <div className={styles.profileContainer}>
      {userProfileData ? (
        <>
          <div className={styles.profileHeader}>
            <ProfilePhotoUploader/>
            <h2>{userProfileData.fullName}</h2>
            <p><strong>Обо мне:</strong> {userProfileData.aboutMe}</p>
          </div>

          <div className={styles.profileDetails}>
            <p><strong>Ищу работу:</strong></p>
            <p>{userProfileData.lookingForAJob ? "Да" : "Нет"}</p>

            <p><strong>Описание работы:</strong></p>
            <p>{userProfileData.lookingForAJobDescription}</p>
          </div>

<ProfileStatus authUserId={authUserId} status={status} profileId={userId}/>
        <UserContacts/>
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


export default React.memo(MyPost)










