import React from 'react';
import styles from "./MyPost/Post/Profile.module.css";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
const UserContacts = () => {
    const userProfileData = useSelector((state) => state.MainPage.userProfile, shallowEqual);

    return (
        <div className={styles.profileContainerContacts}>
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
            <p>Контакты отсутствуют</p> //  Если `contacts === null`, показываем сообщение
          )}
        </div>
    );
};

export default UserContacts;