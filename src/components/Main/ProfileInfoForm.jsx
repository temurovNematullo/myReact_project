import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { UploadUserProfile} from '../../redux/mainPageReducer';
import styles from '../Main/MyPost/Post/Profile.module.css';
import mypost from "../Main/MyPost/MyPost.module.css";
const ProfileInfoForm = ({ userProfileData, isOwner }) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: userProfileData
    });

    const onSubmit = (data) => {
        console.log("Отправка данных:", data);
        dispatch(UploadUserProfile(data));
        
        setEditMode(false);
    };

    return (
        <div>
            {!editMode ? (
                <div>
                    <div className={styles.profileHeader}>
                        <h2>{userProfileData.fullName}</h2>
                        <p><strong>Обо мне:</strong> {userProfileData.aboutMe}</p>
                    </div>
                    <div className={styles.profileDetails}>
                        <p><strong>Ищу работу:</strong> {userProfileData.lookingForAJob ? "Да" : "Нет"}</p>
                        <p><strong>Описание работы:</strong> {userProfileData.lookingForAJobDescription}</p>
                      
                    </div>
                    {isOwner && (
                    <button className={styles.profilePhotoUpload} onClick={() => setEditMode(true)}>Редактировать</button>
                )}
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.profileHeader}>
                        <h2>
                            <input className={mypost.textareaPost} {...register('fullName', { required: true })} defaultValue={userProfileData.fullName} />
                            {errors.fullName && <span>Обязательное поле</span>}
                        </h2>
                        <p>
                            <strong>Обо мне:</strong>
                            <textarea className={mypost.textareaPost} {...register('aboutMe', { required: true })} defaultValue={userProfileData.aboutMe} />
                            {errors.aboutMe && <span>Обязательное поле</span>}
                        </p>
                    </div>

                    <div className={styles.profileDetails}>
                        <p><strong>Ищу работу:</strong></p>
                        <p>
                            <input type="checkbox" {...register('lookingForAJob')} defaultChecked={userProfileData.lookingForAJob} />
                        </p>

                        <p><strong>Описание работы:</strong></p>
                        <p>
                            <textarea className={mypost.textareaPost} {...register('lookingForAJobDescription', { required: true })} defaultValue={userProfileData.lookingForAJobDescription} />
                            {errors.lookingForAJobDescription && <span>Обязательное поле</span>}
                        </p>
                    </div>

                    <button className={styles.profilePhotoUpload} type="submit">Сохранить</button>
                    <button className={styles.profilePhotoUpload} type="button" onClick={() => setEditMode(false)}>Отмена</button>
                </form>
            )}
        </div>
    );
};

export default ProfileInfoForm;
