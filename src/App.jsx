
import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Eligibility from './components/Eligibility'
import VideoTestimonials from './components/VideoTestimonials'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from './components/Footer'
import EligibilityForm from './components/EligibilityForm'
// import AuthorizedPartners from './components/Partners'

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, [])

  const partners = [
    {
      name: "Gracetech Academy",
      logo: "https://scontent.fbho3-2.fna.fbcdn.net/v/t39.30808-1/301153170_402931885305827_2467665854078172386_n.png?stp=dst-png_s480x480",
      address: `KITEZ Building No. 51/2384-58
Thoppin Moola, Thrissur – 680004
Kerala, India`,
      phone: "+91 96055 05414",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Eligibility />

      <VideoTestimonials />

      <EligibilityForm />

      {/* <AuthorizedPartners partners={partners} /> */}
      <Footer />
    </div>
  )
}

export default App
