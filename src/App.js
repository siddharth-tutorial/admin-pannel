// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes } from 'react-router';
import Table from './pages/Table';
import Billing from './pages/Billing';
import Dashboard from './pages/Dashboard';
import Sidebar from './pages/Sidebar';
import Profile from './pages/Profile';
import Signin from './pages/Signin'
import Signup from './pages/Signup'


function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Sidebar/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/table' element={<Table/>}/>
        <Route path='/billing' element={<Billing/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        </Routes>    
    </>
  );
}

export default App;
