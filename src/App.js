
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/homepage/Home';
import Navbar from './pages/homepage/Navbar';
import Purchace from './Purchasepage/Purchace';
import Error from './shared components/Error';
import Footer from './shared components/Footer';
import Signup from '../src/Authentication/Signup'
import Login from './Authentication/Login';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
     <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path="/purchase" element={<Purchace />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
     </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
