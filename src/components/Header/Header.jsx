import {  NavLink } from 'react-router-dom';
import ghoust from '../../img/logoreact.png';
import header from './Header.module.css';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Authorization, Logout } from '../../redux/auth-reducer';

function Header() {
  const isAuth = useSelector((state) => state.Auth.isAuth);
  const login = useSelector((state) => state.Auth.login);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Authorization()); 
});

  return (
    <div className={header.header}> 
      <header className={header.App_header}>
      <div className={header.logo}>
        <img src={ghoust} alt="logo" />
      </div>
       hi btch)
       <div> 
      hi im nema wtf i learn react camn dawn btch
     </div>

     <div className={header.login}>
     <NavLink to={"/login"}> {isAuth ? login : "Login"}</NavLink>
    {isAuth && <button onClick={() => dispatch(Logout())}>Logout</button>}
      </div>
      </header>
      
    </div>
  );
}


export default Header;
