
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

  const [table, setTable] = useState('');

  const [cart, setCart] = useState([])

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome table={table} setTable={setTable} />} />
        <Route path="/table/:params" element={<Home table={table} />} />
        <Route path="/table/:params/menu" element={<Menu table={table} cart={cart} setCart={setCart} />} />
        <Route path="/table/:params/menu/order" element={<Order cart={cart} table={table} />} />
      </Routes>
    </>
  );
}

export default App;
