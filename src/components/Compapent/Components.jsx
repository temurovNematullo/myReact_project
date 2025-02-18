import React from 'react';
import Dialog from '../Dialogs/Dialog';
import Main from '../Main/Main';
import comp from './Components.module.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Components() {
  return (
    <BrowserRouter>
      <div className={comp.sidebarAndMain}>
        {/* Сайдбар с навигацией */}
        <ul className={comp.sidebar}>
          <li className={`${comp.sidebarItem} ${comp.active}`}>
            <Link to="/main" activeClassName={comp.activeLink}>Main</Link>
          </li>
          <li className={comp.sidebarItem}>
            <Link to="/dialog">Dialog</Link>
          </li>
          <li className={comp.sidebarItem}>
            <Link to="/news">News</Link>
          </li>
          <li className={comp.sidebarItem}>
            <Link to="/clips">Clips</Link>
          </li>
        </ul>

        {/* Основная область с маршрутами */}
        <div className={comp.main}>
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/dialog" element={<Dialog />} />
            <Route path="/news" element={<h1>News Page</h1>} />
            <Route path="/clips" element={<h1>Clips Page</h1>} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} /> {/* Для несуществующих маршрутов */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Components;
