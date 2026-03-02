import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="navbar">
      <nav className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/water">Water Tracker</Link>
      </nav>
      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </header>
  );
}

export default Navbar;
