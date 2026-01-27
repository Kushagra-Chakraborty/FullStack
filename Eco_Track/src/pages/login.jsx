import {useAuth} from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const {setIsAuthenticated} = useAuth();
    const handleLogin = () => {
        setIsAuthenticated(true);
        navigate('/');
    };
    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login;
