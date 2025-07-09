import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Eligibility from './components/Eligibility'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from './components/Footer'
import EligibilityForm from './components/EligibilityForm'

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Eligibility /> 
      <EligibilityForm />
      <Footer />  
    </div>
  )
}

export default App
