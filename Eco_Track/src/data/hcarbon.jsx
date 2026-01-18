import logs from './logs.jsx';
const hcarbon = logs.filter(log => log.carbon >= 4);
export default hcarbon;