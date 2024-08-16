import {BrowserRouter,Route,Routes} from "react-router-dom";
import { useRoutes } from 'react-router-dom';
 import HeadP from "./components/Headpage/HeadP";
 import Prehome from "./components/Prehome/Prehome.jsx";
 import './App.css';
function App() {
   

   return (
    
      
    <> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeadP/>}/>
        <Route path="/Home" element={<Prehome/>}/>
      </Routes>
    </BrowserRouter>
    </>
    
    
)
}

export default App
