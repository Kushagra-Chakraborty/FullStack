import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />
      <main className="screen">
        <div className="card">
          <h1>Dashboard</h1>
          <p>Welcome to EcoTrack. Open Water Tracker from the navbar.</p>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
