import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchResult from '../../pages/SearchResult/index'
import BookingDetail from '../../pages/BookingDetail'
import SearchResult2 from '../../pages/SearchResult/index copy'

const Routers = () => {  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/searchResult" element={<SearchResult />}/>
        <Route path="/searchResult2" element={<SearchResult2 />}/>
        <Route path="/bookingDetail" element={<BookingDetail />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers