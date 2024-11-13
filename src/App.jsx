import Navbar from './components/Navbar'
import Footer, { Footer2 } from './components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Coaching from './pages/Coaching'
import Shop from './pages/Shop'
import Aos from 'aos'
import 'aos/dist/aos.css';
import TrainingPrograms from './pages/TrainingPrograms'
import EachTrainingProgram from './pages/EachTrainingProgram'
import UserProfile from './pages/UserProfile'
import About from './pages/About'
import Faq from './pages/Faq'
import NotHomeNav from './components/NotHomeNav'

const App = () => {
  const location = useLocation();
  const isHomeRoute = location.pathname === '/';

  Aos.init({
    duration: 2500,
    delay: 400
  })
  return (
    <div className="app min-h-screen flex flex-col">
    {isHomeRoute?<Navbar />:<NotHomeNav/>}

      <div className="flex-grow " >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/training-programs" element={<TrainingPrograms />} />
          <Route path="/training-programs/:id" element={<EachTrainingProgram />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/about" element={<About />} />
          <Route path="/help-center" element={<Faq />} />
        </Routes>
      </div>
      <Footer2/>
      {/* <Footer /> */}
    </div>

  )
}

export default App
