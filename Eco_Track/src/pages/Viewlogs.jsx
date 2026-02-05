import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchlogs } from '../store/logslice';
const Viewlogs = () => {
    const dispatch = useDispatch();
    const {data,status,error} = useSelector((state)=>state.logs)
    
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchlogs());
        }
        }, [status,dispatch]);

        if (status === 'loading'){
            return <p>Loading logs O.O </p>
        }
        if (status === 'failed'){
            return <p>Failed to load logs T_T {error}</p>
        }


    return (
        <div>
            <h2>Climate logs (redux) </h2>
            <ul>
                {data.map((log) => (
                    <p key={log.id}>
                    {log.activity}: {log.carbon} kg CO2
                    </p>
                ))}
            </ul>
        </div>
    )
}
export default Viewlogs;