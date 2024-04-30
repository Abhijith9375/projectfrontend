import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import SpecialOrders from './components/SpecialOrders';
import Home1 from './components/Home1';
import Promotion from './components/Promotion';
import Special from './components/Special';
import Dashboard from './components/Dashboard';
import Payment from './components/Payment';
import Pay from './components/Pay';
import FakeNavbar from './components/FakeNavbar';
import Fakehome from './components/Fakehome';
import Admin from './components/Admin';
import Adminlogin from './components/Adminlogin';
import Adhome from './components/Adhome';
import Add from './components/Add';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><FakeNavbar/><Fakehome/></>} />
        <Route path="/home" element={<><Navbar /><Home1 /></>} />
        <Route path="/Signup" element={<><FakeNavbar/><Signup /></>} />
        <Route path="/Login" element={<><FakeNavbar/><Login /></>} />
        <Route path="/dashboard" element={<><Navbar /><SpecialOrders/></>} />
        <Route path="/pro" element={<><Navbar /><Promotion/></>} />
        <Route path="/special" element={<><Navbar/><Special/></>} />
        <Route path="/order" element={<><Navbar/><SpecialOrders/></>} />
        <Route path="/payment" element={<><Navbar/><Payment/></>} />
        <Route path="/pay" element={<><Navbar/><Pay/></>} />
        <Route path="/adminlog" element={<><FakeNavbar/><Adminlogin/></>} />
        <Route path="/admin" element={<><Navbar/><Admin/></>} />
        <Route path="/add" element={<><Add/></>} />
        <Route path="/addd" element={<><Adhome/></>} />
      </Routes>
    </div>
  );
}

export default App;
