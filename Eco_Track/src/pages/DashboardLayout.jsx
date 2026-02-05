import { Link, Outlet } from 'react-router-dom';
const DashboardLayout = (
    
) => {
    return (
        <div style={{padding: '1rem', color: 'Black', textAlign: 'left' }}>
            <h3>Dashboard</h3>
            <nav>
                <Link to="/summary" style={{ padding: '1rem', color: 'Black', textAlign: 'left' }}>summary</Link> |
                <Link to="/analytics" style={{ padding: '1rem', color: 'Black', textAlign: 'left' }}>analytics</Link> 
            </nav>
            <hr/>
            <Outlet />

        </div>
    )
}
export default DashboardLayout;