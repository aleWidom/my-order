import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome/WelcomePage";
/* import Home from "./pages/Home/Home";
import Menu from './pages/Menu/Menu';
import Order from './pages/Order/Order'; */
import Amplify from 'aws-amplify';

import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
       {/*  <Route path="/order" element={<Prueba />} /> */}
      </Routes>
    </>
  );
}

export default App;

