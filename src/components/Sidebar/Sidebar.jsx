import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css"; // Стили вынесем в Sidebar.module.css

const Sidebar = () => {
  return (
    <ul className={styles.sidebar}>
      <li>
        <NavLink to="/main" className={({ isActive }) => (isActive ? styles.active : "")}>
          Main
        </NavLink>
      </li>
      <li>
        <NavLink to="/dialog" className={({ isActive }) => (isActive ? styles.active : "")}>
          Dialog
        </NavLink>
      </li>
      <li>
        <NavLink to="/news" className={({ isActive }) => (isActive ? styles.active : "")}>
          News
        </NavLink>
      </li>
      <li>
        <NavLink to="/users" className={({ isActive }) => (isActive ? styles.active : "")}>
          Users
        </NavLink>
      </li>
    </ul>
  );
};

export default Sidebar;
