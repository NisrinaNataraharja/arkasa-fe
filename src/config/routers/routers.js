import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page404 from '../../pages/notFound/Page404'
import Home from '../../pages/landing'

const Routers = () => {  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
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