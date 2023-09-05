import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Dashboard from './Components/Dashboard';
import Cart from './Components/Cart';

function App() {
  return (
    <Router>
     <Navbar />
      {/* <h1 className='text-center font-bold text-6xl mt-4'>Shopping Cart</h1> */}
        <Routes>
             <Route path="/" element={<Dashboard />}/>
             <Route path="/cart" element={<Cart />}/>
        </Routes>
     

    </Router>
  );
}

export default App;
