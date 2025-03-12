import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../common/ProtectedRoute/ProtectedRoute";
import Preloader from "../common/preloader/Preloader";

const Main = lazy(() => import("../Main/Main"))
const Dialog = lazy(() => import("../Dialogs/Dialog"))
const Users = lazy(() => import("../Users/userPage"))
const LoginForm = lazy(() => import("../Login/login"))

export default function SidebarRouter() {
  return (
    <Suspense fallback={<Preloader/>}>
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
    </Suspense>
  );
}