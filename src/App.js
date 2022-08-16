import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcome/WelcomePage";
import HomePage from "./pages/Home/HomePage"
import MenuPage from './pages/Menu/MenuPage'
import OrderPage from './pages/Order/OrderPage'
import Amplify from 'aws-amplify';

import awsconfig from './aws-exports';
import { TableProvider } from "./context/tables";
import { OrderProvider } from "./context/order";
Amplify.configure(awsconfig);

function App() {
  return (
    <TableProvider>
      <OrderProvider>
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/table/:id" element={<HomePage/>} />
          <Route path="/table/:id/menu" element={<MenuPage/>} />
          <Route path="/table/:id/menu/order" element={<OrderPage/>} />
        </Routes>
      </OrderProvider>
    </TableProvider>
  );
}

export default App;

