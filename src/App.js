
import Welcome from "./pages/Welcome/Welcome";
import Home from "./pages/Home/Home";
import Menu from './pages/Menu/Menu';
import Order from './pages/Order/Order';
import { Routes, Route } from "react-router-dom";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import DataContextProvider from "./components/DataContext";

Amplify.configure(awsconfig);

function App() {
  return (
    <DataContextProvider>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/table/:params" element={<Home />} />
        <Route path="/table/:params/menu" element={<Menu />} />
        <Route path="/table/:params/menu/order" element={<Order />} />
      </Routes>
    </DataContextProvider>
  );
}

export default App;
