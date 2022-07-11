import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../../pages/login";
import Register from "../../pages/register";
import Forgot from "../../pages/forgot";
import MyBooking from "../../pages/mybooking";
import Profile from "../../pages/Profile";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/mybooking" element={<MyBooking />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
