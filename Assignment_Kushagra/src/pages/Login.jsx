import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", "demo-token");
    navigate("/dashboard");
  };

  return (
    <main className="screen login-screen">
      <div className="card">
        <h1>EcoTrack Login</h1>
        <p>Click below to simulate login.</p>
        <button onClick={handleLogin}>Login</button>
      </div>
    </main>
  );
}

export default Login;
