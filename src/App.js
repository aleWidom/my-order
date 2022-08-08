import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcome/WelcomePage";
import HomePage from "./pages/Home/HomePage"
/* import Menu from './pages/Menu/Menu';
import Order from './pages/Order/Order';  */
import Amplify from 'aws-amplify';

import awsconfig from './aws-exports';
import { TableProvider } from "./context/tables";
Amplify.configure(awsconfig);

function App() {
  return (
    <TableProvider>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/table/:id" element={<HomePage />} />
      </Routes>
    </TableProvider>
  );
}

export default App;

