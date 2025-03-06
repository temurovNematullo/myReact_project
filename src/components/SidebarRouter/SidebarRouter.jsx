import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Dialog from "../Dialogs/Dialog";
import Users from "../Users/userPage";
import LoginForm from "../Login/login";
import ProtectedRoute from "../common/ProtectedRoute/ProtectedRoute";
export default function SidebarRouter() {
  return (
    <Routes>
      <Route element={<ProtectedRoute allowed="private"/>}>
      <Route path="/main" element={<Main />} />
      <Route path="/dialog" element={<Dialog />} />
      
      </Route>
      <Route path="/main/:userId?" element={<Main />} />
      <Route path="/users" element={<Users />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/news" element={<h1>News</h1>} />
      {/* Маршрут для 404 */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}