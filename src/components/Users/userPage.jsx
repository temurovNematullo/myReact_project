import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetch } from "../../redux/userPageReducer";
import axios from 'axios';
import UserItem from '../Users/UserItem/UserItem';
import Pagination from '../Users/Pagination/Pagination';
import Preloader from '../common/preloader/Preloader';


export default function Users() {
  const users = useSelector((state) => state.UserPage.userData);
  const currentPage = useSelector((state) => state.UserPage.currentPage);
  const totalUsersCount = useSelector((state) => state.UserPage.totalUsersCount);
  const pageSize = useSelector((state) => state.UserPage.pageSize);
  const isFetch = useSelector((state) => state.UserPage.isFetch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleIsFetch(true));
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`).then(response => {
      dispatch(toggleIsFetch(false));
      dispatch(setUsers(response.data.items));
      dispatch(setTotalUsersCount(response.data.totalCount));
    });
  }, [currentPage, pageSize, dispatch]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= Math.ceil(totalUsersCount / pageSize)) {
      dispatch(setCurrentPage(page));
    }
  };

  return (
    <div> 
      {isFetch ? <Preloader/>: null }
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
      <Pagination 
        currentPage={currentPage} 
        totalPages={Math.ceil(totalUsersCount / pageSize)} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
}