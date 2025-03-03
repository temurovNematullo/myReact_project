import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getFollowing} from "../../../redux/userPageReducer";
import samurai from "../../../img/samurai.png";
import style from '../../Users/users.module.css';
import { NavLink} from 'react-router-dom';


const UserItem = ({ user }) => {
  const dispatch = useDispatch();
  const FollowingInProgress = useSelector((state)=> state.UserPage.followingInProgress);

  const handleFollowClick = () => { 
  dispatch(getFollowing(user));
  };

  return (
    <div className={style.UsersInfo}>
      <div className={style.userInfo}>
        <NavLink to={`/main/${user.id}`}>
          <img className={style.userImg} src={user.photos.small !== null ? user.photos.small : samurai} alt={user.name} />
        </NavLink>
        <button disabled={FollowingInProgress.some(id=>id === user.id)} className={style.userFollowButton} onClick={handleFollowClick}>
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