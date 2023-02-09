import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './componenets/pages/Main';
import Product from './componenets/pages/Product';
import StartUp from './componenets/pages/StartUp';
import Store from './componenets/pages/Store';
import Service from './componenets/pages/Service';
import Event from './componenets/pages/Event'
import Header from './componenets/layout/Header';
import Login from './componenets/pages/Login';
import Join from './componenets/pages/Join';
import Cart from './componenets/pages/Cart';
import ProductDetail from './componenets/pages/ProductDetail';

function App() {
  return (
    <div className='appWrap'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product" element={<Product />} />
          <Route path="store-search" element={<Store />} />
          <Route path="/service" element={<Service />} />
          <Route path="/startUp-info" element={<StartUp />} />
          <Route path="/event" element={<Event />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;