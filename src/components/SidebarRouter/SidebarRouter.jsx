import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Dialog from "../Dialogs/Dialog";
import Users from "../Users/userPage";

export default function SidebarRouter() {
  return (
    <Routes>
      {/* Основной маршрут с опциональным userId */}
      <Route path="/main/:userId?" element={<Main />} />

      {/* Другие маршруты */}
      <Route path="/dialog" element={<Dialog />} />
      <Route path="/news" element={<h1>News</h1>} />
      <Route path="/users" element={<Users />} />

      {/* Маршрут для 404 */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}