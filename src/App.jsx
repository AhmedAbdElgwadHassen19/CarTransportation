import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Slider from "./components/Slider"
import About from "./pages/About";
import CarServices from "./pages/CarServices"
import MyUs from "./pages/MyUs"
import HeroSection from "./pages/HeroSection"
import ServicesSection from "./pages/ServicesSection"
import Footer from "./pages/footer"
const App = () => {
  return (
    <>
<Router>
  <Navbar/>
  <Routes>
    <Route path="/" element={<><Slider/> <About/> <CarServices/> <MyUs/> <HeroSection/> <ServicesSection/> <Footer/></>}/>
    <Route path="/abut" element={<><HeroSection/> <CarServices/> <MyUs/> <Footer/></>}/>
    <Route path="/about-us" element={<><About/> <Footer/></>}/>
    <Route path="/count-us" element={<><HeroSection/> <ServicesSection/> <Footer/></>}/>
  </Routes>
</Router>
    </>
  )
}

export default App
