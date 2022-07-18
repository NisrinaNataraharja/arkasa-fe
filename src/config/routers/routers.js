import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../../pages/login";
import Register from "../../pages/register";
import Forgot from "../../pages/forgot";
import MyBooking from "../../pages/mybooking";
import Profile from "../../pages/Profile";
import BookingDetail from "../../pages/BookingDetail";
import SearchResult from "../../pages/SearchResult";
import FlightDetail from "../../pages/flightDetail";
import Home from "../../pages/landing";
import Page404 from "../../pages/notFound/Page404";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/searchResult" element={<SearchResult />} />
        <Route path="/bookingDetail/:id" element={<BookingDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/mybooking" element={<MyBooking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="/flight-detail" element={<FlightDetail />} />
        {/* <Route path="/productlist" element={<ProductList/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:id" element={<DetailProduct/>}/>
        <Route path="/register" element={<Register/>}/> */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
