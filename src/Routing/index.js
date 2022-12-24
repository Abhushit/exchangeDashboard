import React from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Dashboard from '../Pages/Dashboard';
import AddBot from '../Pages/Dashboard/AddBot';
import Stats from '../Pages/Dashboard/Stats';
import Login from '../Pages/Login';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    var urlName = location.pathname.split("/",2).pop();
    return localStorage.getItem("token") ? (
        <>
        {location.pathname.split("/",2).pop() !== "stats" && <Navbar />}
        {children}
      </>
    ) : (
      <Navigate to="/login"></Navigate>
    );
  };

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* Dashboard */}
            <Route path="/" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
            {/* Dashboard */}
            
            {/* Bots*/}
            <Route path="/add_bot" element={<PrivateRoute> <AddBot/> </PrivateRoute>} />
            <Route path="/add_bot/:id" element={<PrivateRoute> <AddBot/> </PrivateRoute>} />
            {/* Bots*/}

            {/* Stats*/}
            <Route path="/stats/:id" element={<Stats/>} />
            {/* Stats*/}
        
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routing