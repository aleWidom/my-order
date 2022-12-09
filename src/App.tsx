import { Routes, Route } from "react-router-dom";
import HomePage from './pages/Home/HomePage'
import OrderPage from './pages/Order/OrderPage'
import { TableProvider } from "./context/tables";
import { OrderProvider } from "./context/order";
import { SearchProvider } from "./context/search";

import './index.css'

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


//TODO CAMBIAR HOME A PARAMETRIZADA

function App() {
  //TODO AL PATH HOME HAY QUE HACER PARAMETRIZADO
  return (
    <TableProvider>
      <OrderProvider>
        <SearchProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </SearchProvider>
      </OrderProvider>
    </TableProvider>
  );
}

export default App;

