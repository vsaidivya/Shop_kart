import React from "react";
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import Category from './Pages/Category'
import Footer from './Components/Footer/Footer'
// import Cart from "./Pages/Cart";
import Productpage from "./Components/Productpage/Productpage";
import Login from './Pages/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<Category category="men" />} />
          <Route path="/women" element={<Category category="women" />} />
          <Route path="/kids" element={<Category category="kids" />} />
          <Route path="/product/:productId" element={<Productpage />} />
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/cart" element={<Cart/>} /> */}
        </Routes>
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
