import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = (children) => {
    const {isAuthenticated} = useAuth();
    if (!isAuthenticated){
        return <Navigate to='/login' replace />
    }
    return <Outlet />;
}
export default ProtectedRoutes;