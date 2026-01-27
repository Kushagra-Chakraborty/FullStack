import logs from '../data/logs.jsx';

const Viewlogs = () => {
    return (
        <div>
            <h2>Experiment Logs</h2>
            <ul>
                {logs.map((log, index) => (
                    <p key={log.id}>
                    {log.activity}: {log.carbon} kg CO2
                    </p>
                ))}
            </ul>
        </div>
    )
}
export default Viewlogs;