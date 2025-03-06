import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ allowed }) => {
 const isAuth = useSelector((state)=> state.Auth.isAuth)
 
 if(allowed === "private" && !isAuth){
    return <Navigate to="/login" replace/>
 }
 return <Outlet/>
}

export default ProtectedRoute;
