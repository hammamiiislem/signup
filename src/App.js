
import Signap from './components/Signap'
import Login from './components/login';
import Profile from './components/profile';
import Dashboard from './components/dashboard';
import { Route, Router, Routes } from "react-router-dom";


function App() {
  
  return (
  
    <Routes>
          <Route path="/Signap" element={<Signap/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
    </Routes>
    
)
  
  }
  


export default App;

