
import Welcome from "./pages/Welcome/Welcome";
import Home from "./pages/Home/Home";
import Menu from './pages/Menu/Menu';
import Order from './pages/Order/Order';
import { Routes, Route } from "react-router-dom";

import React, { useState } from 'react'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import { getData } from './services/menu'
import { useEffect } from "react";


Amplify.configure(awsconfig);

function App() {

  const [table, setTable] = useState('');

  const [cart, setCart] = useState([])

/* 
  useEffect(() => {
    getData()
  }, []) */

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome table={table} setTable={setTable} />} />
        <Route path="/table/:params" element={<Home table={table} setTable={setTable} />} />
        <Route path="/table/:params/menu" element={<Menu table={table} cart={cart} setCart={setCart} />} />
        <Route path="/table/:params/menu/order" element={<Order cart={cart} table={table} />} />
      </Routes>
    </>
  );
}

export default App;
