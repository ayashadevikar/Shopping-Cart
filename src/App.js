import Navbar from './Components/Navbar';
import './App.css';
import Product from './Components/Product';

function App() {
  return (
    <>
      <h1 className='text-center font-bold text-6xl mt-4'>Shopping Cart</h1>
      <Navbar />
      <Product />
    </>
  );
}

export default App;
