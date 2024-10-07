import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Coaching from './pages/Coaching'
import Shop from './pages/Shop'
import Aos from 'aos'
import 'aos/dist/aos.css';

const App = () => {

  Aos.init({
    duration:2500,
    delay:400
  })
  return (
    <div className="app">
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      
      <Footer />
     
    </div>
  )
}

export default App