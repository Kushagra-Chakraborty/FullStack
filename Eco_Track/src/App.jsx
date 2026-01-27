// import './App.css'
// import Dashboard from './pages/dashboard'
import Header from './components/header'
import DashboardLayout from './pages/DashboardLayout'
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Viewlogs from './pages/Viewlogs.jsx';
import Login from './pages/login.jsx';
// import Logout from './pages/logout.jsx';
import Summary from './pages/summary.jsx';
import Analytics from './pages/analytics.jsx';
import ProtectedRoutes from './Routes/ProtectedRoutes.jsx';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header Title="Eco Track : Experiment 2 "/>
      <Routes>
        <Route path= "login" element={<Login/>}/>
        <Route path= "/" element=
        {
        <ProtectedRoutes>
          <DashboardLayout />
        </ProtectedRoutes>
        }
        
      >
        {/* <Route path="logout" element={<Logout/>}/> */}
        <Route index element={<DashboardLayout/>}/>
        <Route path="Summary" element={<Summary/>}/>
        <Route path="Analytics" element={<Analytics/>}/>

        <Route path="logs" element={<Viewlogs/>}>
        
        </Route>
        </Route>
      </Routes>
    
  </BrowserRouter>
    </div>
  )
}

export default App
