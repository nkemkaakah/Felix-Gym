import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Coaching from './pages/Coaching'
import Shop from './pages/Shop'
import Aos from 'aos'
import 'aos/dist/aos.css';
import TrainingPrograms from './pages/TrainingPrograms'
import EachTrainingProgram from './pages/EachTrainingProgram'
import UserProfile from './pages/UserProfile'

const App = () => {

  Aos.init({
    duration: 2500,
    delay: 400
  })
  return (
    <div className="app min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/training-programs" element={<TrainingPrograms />} />
          <Route path="/training-programs:id" element={<EachTrainingProgram />} />
          <Route path="/profile:id" element={<UserProfile />} />
        </Routes>
      </div>

      <Footer />
    </div>

  )
}

export default App