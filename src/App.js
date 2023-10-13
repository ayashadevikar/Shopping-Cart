import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Dashboard from './Components/Dashboard';
import Cart from './Components/Cart.js';

function App() {
  return (
    <Router>
     <Navbar />
      
        <Routes>
             <Route path="/" element={<Dashboard />}/>
             <Route path="/cart" element={<Cart />}/>
        </Routes>
     

    </Router>
  );
}

export default App;
