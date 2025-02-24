import React from 'react';
import Main from '../Main/Main';
import comp from './Components.module.css';
import { Routes, Route, Link } from 'react-router-dom';
import {  useLocation } from 'react-router-dom';
import DialogContainer from '../Dialogs/DialogContainer';

function Components(props) {

  


  const location = useLocation(); // Получаем текущий путь
  return (
   
      <div className={comp.sidebarAndMain}>
      <ul className={comp.sidebar}>
      <li
        className={`${comp.sidebarItem} ${
          location.pathname === '/main' ? comp.active : ''
        }`}
      >
        <Link to="/main">Main</Link>
      </li>
      <li
        className={`${comp.sidebarItem} ${
          location.pathname === '/dialog' ? comp.active : ''
        }`}
      >
        <Link to="/dialog">Dialog</Link>
      </li>
      <li
        className={`${comp.sidebarItem} ${
          location.pathname === '/news' ? comp.active : ''
        }`}
      >
        <Link to="/news">News</Link>
      </li>
      <li
        className={`${comp.sidebarItem} ${
          location.pathname === '/clips' ? comp.active : ''
        }`}
      >
        <Link to="/clips">Clips</Link>
      </li>
    </ul>

        {/* Основная область с маршрутами */}
        <div className={comp.main}>
          
          <Routes>
          <Route path="/main" element={<Main store = {props.store}  />} />
          
          <Route path="/dialog" element={<DialogContainer store = {props.store} />} />
            <Route path="/news" element={<h1>News Page</h1>} />
            <Route path="/clips" element={<h1>Clips Page</h1>} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} /> 
          </Routes>
        </div>
      </div>

  );
}

export default Components;
