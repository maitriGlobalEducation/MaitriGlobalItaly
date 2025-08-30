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
import AuthorizedPartners from './components/Partners'

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, [])

  const partners = [
    {
      name: "Gracetech Academy",
      logo: "https://scontent.fbho3-2.fna.fbcdn.net/v/t39.30808-1/301153170_402931885305827_2467665854078172386_n.png?stp=dst-png_s480x480&_nc_cat=105&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=p9PgcasQkugQ7kNvwFihveh&_nc_oc=Adl5rLmefpSrsoHCOSDfCMYf9HtX_ViQRHLGA100kuOpPYZUdpvUnnIW6Xnt4T8g3tmtcuhucSTJShCe0ATjVJv7&_nc_zt=24&_nc_ht=scontent.fbho3-2.fna&_nc_gid=jqL70j6t9uObLMc0kz-W6g&oh=00_AfVzFceVxWDGQ8IkAHY3OaTrt1tWrMEUSz1cH4ugbYs5JA&oe=68B8A95D", // replace with real logo
      address: `KITEZ Building No. 51/2384-58
Thoppin Moola, Thrissur – 680004
Kerala, India`,
      phone: "+91 96055 05414",
    },
    // Add more partners here later
  ];

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Eligibility /> 
      <EligibilityForm />
      <AuthorizedPartners partners={partners} />
      <Footer />  
    </div>
  )
}

export default App
