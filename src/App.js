
import Signap from './components/Signap'
import Login from './components/login';
import Dashboard from './components/dashboard';
import { Route, Router, Routes } from "react-router-dom";


function App() {
  
  return (
  
    <Routes>
          <Route path="/Signap" element={<Signap/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
    
)
  
  }
  


export default App;

