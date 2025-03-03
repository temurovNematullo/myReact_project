import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage, getUsers } from "../../redux/userPageReducer";
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
  dispatch(getUsers(currentPage, pageSize))
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