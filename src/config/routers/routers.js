import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FlightDetail from '../../pages/flightDetail'
import Home from '../../pages/landing'
import Page404 from '../../pages/notFound/Page404'

const Routers = () => {  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/flight-detail" element={<FlightDetail />}/>
        {/* <Route path="/productlist" element={<ProductList/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:id" element={<DetailProduct/>}/>
        <Route path="/register" element={<Register/>}/> */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers