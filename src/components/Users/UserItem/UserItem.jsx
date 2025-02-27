import React from 'react';
import { useDispatch } from "react-redux";
import { follow, unfollow} from "../../../redux/userPageReducer";
import samurai from "../../../img/samurai.png";
import style from '../../Users/users.module.css';
import { NavLink } from 'react-router-dom';


const UserItem = ({ user }) => {
  const dispatch = useDispatch();

  return (
    
    <div className={style.UsersInfo}>
    
      <div className={style.userInfo}>
         <NavLink to="/main" > <img className={style.userImg} src={user.photos.small !== null ? user.photos.small : samurai} alt={user.name} /></NavLink>
        <button 
          className={style.userFollowButton} 
          onClick={() => dispatch(user.followed ? unfollow(user.id) : follow(user.id))}
        >
          {user.followed ? "Unfollow" : "Follow"}
        </button>
      </div>
      <div className={style.userLocationList}>
        <div className={style.userInfoText}>
          <p><strong>{user.name}</strong></p>
          <p className={style.statustext}>{user.status}</p>
        </div>
        <div className={style.userInfoText}>
          <p>{user.country || "Country not "}</p>
          <p>{user.location || "Location not "}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;