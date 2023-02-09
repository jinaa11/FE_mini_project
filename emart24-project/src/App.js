import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './componenets/pages/Main';
import Product from './componenets/pages/Product';
import StartUp from './componenets/pages/StartUp';
import Store from './componenets/pages/Store';
import Service from './componenets/pages/Service';

function App() {
  return (
    <div className='appWrap'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="store-search" element={<Store/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/startUp" element={<StartUp/>}/>
          <Route path="/store" element={<Store/>}/>
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;