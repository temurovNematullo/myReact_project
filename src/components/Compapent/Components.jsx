import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import SidebarRouter from "../../components/SidebarRouter/SidebarRouter";
import styles from "./Components.module.css";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Components() {
  const isAuth = useSelector((state) => state.Auth.isAuth);
  const navigate = useNavigate();
 
    useEffect(() => {
      if (!isAuth) {
        navigate("/login"); 
      }
      
    }, [isAuth, navigate]);

  return (
    <div className={styles.sidebarAndMain}>
      <Sidebar /> 
      <div className={styles.main}>
        <SidebarRouter /> 
      </div>
    </div>
  );
}
