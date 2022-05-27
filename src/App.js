
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/homepage/Home';
import Navbar from './pages/homepage/Navbar';
import Purchace from './Purchasepage/Purchace';
import Error from './shared components/Error';
import Footer from './shared components/Footer';
import Signup from '../src/Authentication/Signup'
import Login from './Authentication/Login';
import RequireAuth from './shared components/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
     <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Error />} />
        
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/purchase" element={<RequireAuth><Purchace /></RequireAuth>} />
     </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
