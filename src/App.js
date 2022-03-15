
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Menu from './pages/Menu';
import Order from './pages/Order';
import { Routes, Route } from "react-router-dom";

import React, { useState } from 'react'
import Amplify from 'aws-amplify'


import awsExports from "./aws-exports";
Amplify.configure(awsExports);


function App() {

  const [tableNumber, setTableNumber] = useState('');

  const [cart, setCart] = useState([])

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome tableNumber={tableNumber} setTableNumber={setTableNumber} />} />
        <Route path="/table/:params" element={<Home tableNumber={tableNumber} />} />
        <Route path="/table/:params/menu" element={<Menu tableNumber={tableNumber} cart={cart} setCart={setCart} />} />
        <Route path="/table/:params/menu/order" element={<Order cart={cart} tableNumber={tableNumber} />} />
      </Routes>
    </>
  );
}

export default App;
