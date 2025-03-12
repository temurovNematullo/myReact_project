import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from "./MyPost/Post/Profile.module.css";
import { useSelector, useDispatch} from "react-redux";
import { UploadUserProfile } from '../../redux/mainPageReducer';

const UserContacts = (props) => {
    const userProfileData = useSelector((state) => state.MainPage.userProfile);
    const dispatch = useDispatch();
    const isOwner= props.isOwner;
    console.log("isOwner", isOwner);
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
          <div className={styles.profileContainerContacts}>
              {!editMode ? (
            <div>
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
                  {isOwner && (
                <button onClick={() => setEditMode(true)}>Редактировать контакты</button>
                  )}
              </div>
                ) : (
              <p>Контакты отсутствуют</p> //  Если `contacts === null`, показываем сообщение
                )}
            </div>
              ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Редактирование контактов:</h3>
                <div className={styles.contactsList}>
              {Object.entries(userProfileData.contacts).map(([key, value]) => (
                  <div key={key} className={styles.contactItem}>
                <label><strong>{key}:</strong></label>
                
                <input
                    {...register(`contacts.${key}`)}
                    defaultValue={value}
                    type="text"
                    placeholder={`${key}`}
                />
                  </div>
              ))}
                </div>
                <button type="submit">Сохранить</button>
                <button type="button" onClick={() => setEditMode(false)}>Отмена</button>
            </form>
              )}
          </div>
            );
      
};

export default UserContacts;