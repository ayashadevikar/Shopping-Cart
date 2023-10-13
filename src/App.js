import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Dashboard from './Components/Dashboard';
import ProductCart from './Components/ProductCart';

function App() {
  return (
    <Router>
     <Navbar />
      
        <Routes>
             <Route path="/" element={<Dashboard />}/>
             <Route path="/productcart" element={<ProductCart />}/>
        </Routes>
     

    </Router>
  );
}

export default App;
