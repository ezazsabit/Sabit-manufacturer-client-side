
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
import Dashboard from './Dashboard/Dashboard';
import AddaReview from './Dashboard/AddaReview';
import Myorder from './Dashboard/Myorder';
import Myprofile from './Dashboard/Myprofile';

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
        <Route path="/purchase/:id" element={<RequireAuth><Purchace /></RequireAuth>} />
        <Route path="/purchase" element={<RequireAuth><Purchace /></RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route path='/dashboard/order' element={<Myorder></Myorder>}></Route>
          <Route path='/dashboard/profile' element={<Myprofile></Myprofile>}></Route>
          <Route path='/dashboard/review' element={<AddaReview></AddaReview>}></Route>
        </Route>
     </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
