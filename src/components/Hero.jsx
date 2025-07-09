import React, { useState } from 'react'

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-blue-200">
      {/* Hamburger Button */}
      <button
        className="absolute top-6 right-8 z-30 flex flex-col items-center justify-center w-10 h-10 focus:outline-none cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open menu"
      >
        <span className={`block w-8 h-1 bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-8 h-1 bg-white rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-8 h-1 bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Slide-in Menu */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white bg-opacity-95 shadow-lg z-40 flex flex-col p-8 animate-slide-in">
          <button
            className="self-end mb-8 text-2xl text-gray-700 hover:text-black focus:outline-none cursor-pointer"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <nav className="flex flex-col gap-6 text-lg font-semibold text-gray-800">
            <a href="#about" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="#services" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Our Services</a>
            <a href="#why" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Why Choose Us</a>
            <a href="#eligibility" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Eligibility Criteria</a>
            <a href="#contact" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Contact Us</a>
            <a href="#form" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Eligibility Form</a>
          </nav>
        </div>
      )}

      {/* Background Video with border for debug */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 filter brightness-25"
        src="/itlay.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay removed for debug */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10" /> */}
      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-2xl">
          Welcome to Maitri Global Consultancy LLC
        </h1>
        <p className="text-white text-xl md:text-2xl lg:text-3xl font-medium drop-shadow-2xl">
          Empowering Healthcare Careers Across Borders
        </p>
      </div>
      {/* Optional: Add keyframes for slide-in animation */}
      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  )
}

export default Hero