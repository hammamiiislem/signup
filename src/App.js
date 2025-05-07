
import Signap from './components/Signap'
import { Route, Router, Routes } from "react-router-dom";


function App() {
  
  return (
  
    <Routes>
          <Route path="/Signap" element={<Signap/>} />
    </Routes>
    
)
  
  }
  

export default App;
