import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/Welcome/WelcomePage";
import HomePage from "./pages/Home/HomePage"
/* import Menu from './pages/Menu/Menu';
import Order from './pages/Order/Order';  */
import Amplify from 'aws-amplify';

import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/table/:id" element={<HomePage />} />
      </Routes>
  );
}

export default App;

