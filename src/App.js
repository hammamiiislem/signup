
import Signap from './components/Signap'
import Login from './components/login';
import { Route, Router, Routes } from "react-router-dom";


function App() {
  
  return (
  
    <Routes>
          <Route path="/Signap" element={<Signap/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
    </Routes>
    
)
  
  }
  


export default App;

