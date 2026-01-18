import Header from '../components/header.jsx'
import logs from '../data/logs.jsx'
import hcarbon from '../data/hcarbon.jsx'
import lcarbon from '../data/lcarbon.jsx'

const sum = logs.reduce((sum, item) => sum + item.carbon, 0);
const Dashboard = () => {
    
    return (
    <div style = {{
            backgroundColor:'#4CAF50'
        }}>
        
        <h1>{Header}</h1>
        <p>Total Carbon Footprint: {sum}</p>

        <ul style = {{backgroundColor: 'white',color: 'black'}}>
            {logs.map(log => (
                <li key={log.id}>
                {log.activity}: {log.carbon} kg CO2
                </li>
            ))}
        </ul>
        <p>High carbon emission</p>
        <ul style = {{backgroundColor:'white', color:'red'}}>
            {hcarbon.map(log=>(
                <li key={log.id}>
                    {log.activity}: {log.carbon} kg CO2 
                </li>
            ))} 
        </ul>
        <p>Low carbon emission</p>
        <ul style = {{backgroundColor:'white', color:'green'}}>
            {lcarbon.map(log=>(
                <li>
                    {log.activity}:{log.carbon} kg CO2
                </li>
            ))}
        </ul>
    </div>
)
};

export default Dashboard