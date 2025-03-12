import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadProfilePhoto } from "../../redux/mainPageReducer";
import samurai from "../../img/samurai.png";
import styles from "./MyPost/Post/Profile.module.css";

const ProfilePhotoUploader = () => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const userPhoto = useSelector((state) => state.MainPage.userProfile.photos?.large);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      dispatch(uploadProfilePhoto(selectedFile));
      setSelectedFile(null);
    }
  };

  return (
    <div className={styles.profileContainer}>
      <img className={styles.profileImage} src={userPhoto || samurai} alt="Profile" />
      <input className={styles.profileInput} id="file-upload" type="file" onChange={handleFileChange} accept="image/*" />
      <label for="file-upload" className={styles.profilePhotoUpload}>Заменить</label>
      <button className={styles.profilePhotoUpload}  onClick={handleUpload} disabled={!selectedFile}>
        Загрузить
      </button>
    </div>
  );
};

export default ProfilePhotoUploader;
