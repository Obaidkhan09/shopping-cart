
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/reuseable/NavBar';
import Cart from './components/cart/Cart';
import Home from './components/home/Home';
import NotFound from './components/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/reuseable/Footer';
import ProductDetails from './components/reuseable/ProductDetails';

function App() {
  return (
    <div className="App">
      <ToastContainer
        limit={3}
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productDetails/:productID" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
