/*eslint-disable*/
import {
   Routes,
  Route,
} from 'react-router-dom';
import Qoute from './routes/qoute';
import Home from './routes/home';
import Calculator from './routes/calculator';
import Nav from './routes/navbar';
import './App.css';


export default function App() {
  return (
    
     <div>
     <Nav />
     <Routes>
      
      <Route path="qoute" element={<Qoute />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />

      <Route path="Calculator" element={<Calculator />} />
    
  </Routes>
     </div>
      
  )
}
