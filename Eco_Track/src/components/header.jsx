import { Link } from 'react-router-dom';
// import {handlelogout} from '../pages/logout';
import { useNavigate } from "react-router-dom";
import {useAuth} from "../context/AuthContext";
const handleLogout = () => {
    const navigate = useNavigate();
    const {setIsAuthenticated} = useAuth();
    setIsAuthenticated(false);
    navigate('/');
};
const Header = ({Title}) => {
    return (
        <header style={{ backgroundColor: '#4CAF50', padding: '1rem', color: 'white', textAlign: 'center' }}>
            <h2>{Title}</h2>
            <nav>
                <Link to="/" style={{ backgroundColor: '#4CAF50', padding: '1rem', color: 'white', textAlign: 'center' }}>Dashboard</Link>
                <Link to="/logs" style={{ backgroundColor: '#4CAF50', padding: '1rem', color: 'white', textAlign: 'center' }}>Logs</Link>
                <Link to="/login" style={{ backgroundColor: '#4CAF50', padding: '1rem', color: 'white', textAlign: 'center' }}>Login</Link>
                <button onClick={handleLogout}>Logout</button>           
                 </nav>
        </header>
    )
}

export default Header;