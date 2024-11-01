import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Routes';
import Finddoctor from './UI_Pages/components/FindDoctos';
import Mybookings from './UI_Pages/components/MyBookings';



function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/find-doctors" element={<Finddoctor />} />
      <Route path="/my-bookings" element={<Mybookings/>} />

    </Routes>
  </Router>
  )
}

export default App

