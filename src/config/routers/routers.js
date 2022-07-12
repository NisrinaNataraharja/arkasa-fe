import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookingDetail from '../../pages/BookingDetail'
import SearchResult from '../../pages/SearchResult'

const Routers = () => {  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/searchResult" element={<SearchResult />}/>
        <Route path="/bookingDetail" element={<BookingDetail />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers