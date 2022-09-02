import { Routes, Route } from "react-router-dom";
import MenuPage from './pages/Menu/MenuPage'

import { TableProvider } from "./context/tables";
import { OrderProvider } from "./context/order";

import './index.css'

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
      <TableProvider>
      <OrderProvider>
        <Routes>
          <Route path="/table/:id/menu" element={<MenuPage/>} />
{/*            <Route path="/table/:id/menu" element={<MenuPage/>} /> */}
        </Routes>
      </OrderProvider>
    </TableProvider>
  );
}

export default App;

