import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import SidebarRouter from "../../components/SidebarRouter/SidebarRouter";
import styles from "./Components.module.css";

export default function Components() {
  return (
    <div className={styles.sidebarAndMain}>
      <Sidebar /> 
      <div className={styles.main}>
        <SidebarRouter /> 
      </div>
    </div>
  );
}
