import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaYoutube, FaInstagram, FaLinkedin, FaFacebookF } from 'react-icons/fa';

const Footer = () => (
  <footer className="w-full pt-6 pb-2 flex flex-col items-center">
    <div className="max-w-7xl w-full mx-auto rounded-3xl shadow border border-gray-200 bg-gray-50 px-2 sm:px-4 md:px-8 py-4 md:py-10 flex flex-col md:flex-row items-start gap-6 md:gap-8 text-xs md:text-base mx-[8px] lg:mx-0 relative">
      {/* Logo: absolute top left on desktop, centered on mobile/tablet */}
      <div className="w-full flex justify-center mb-4 md:mb-0 lg:w-auto lg:justify-start lg:absolute lg:top-[-32px] lg:left-[-32px] lg:z-20">
        <img
          src="/logomtg.png"
          alt="Logo"
          className="w-[140px] h-[110px] md:w-[180px] md:h-[140px] lg:w-[240px] lg:h-[200px] object-contain"
        />
      </div>
      {/* Content Columns */}
      <div className="flex flex-col md:flex-row flex-grow w-full gap-6 md:gap-8">
        {/* Head Office */}
        <div className="flex flex-col items-center md:items-start flex-1 md:px-4 mb-2 md:mb-0 lg:pl-[240px]">
          <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 text-gray-900">Head Office</h3>
          <div className="flex items-start gap-2 mb-1 md:mb-2 w-full justify-center md:justify-start">
            <FaMapMarkerAlt className="text-gray-700 mt-1" />
            <span className="text-gray-800 text-xs md:text-base leading-relaxed">686, Unique World Business Center<br/>Hamsa A Building, Al Karama, Dubai, UAE</span>
          </div>
        </div>
        {/* Contact */}
        <div className="flex flex-col items-center md:items-start flex-1 md:px-4 mb-2 md:mb-0">
          <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 text-gray-900">Contact</h3>
          <div className="flex items-center gap-2 mb-1 md:mb-2 w-full justify-center md:justify-start">
            <FaEnvelope className="text-gray-700" />
            <span className="text-gray-800 text-xs md:text-base">hr@maitriglobaleducation.com</span>
          </div>
          <div className="flex items-center gap-2 mb-1 md:mb-2 w-full justify-center md:justify-start">
            <FaPhoneAlt className="text-gray-700" />
            <span className="text-gray-800 text-xs md:text-base">UAE Tel: +971 58 588 6690</span>
          </div>
          <div className="flex items-center gap-2 mb-1 md:mb-2 w-full justify-center md:justify-start">
            <FaPhoneAlt className="text-gray-700" />
            <span className="text-gray-800 text-xs md:text-base">Italy Contacts:</span>
          </div>
          <div className="flex items-center gap-2 w-full pl-3 md:pl-6 justify-center md:justify-start">
            <span className="text-gray-800 text-xs md:text-base">Abraham: +39 331 847 6757</span>
          </div>
          <div className="flex items-center gap-2 w-full pl-3 md:pl-6 justify-center md:justify-start">
            <span className="text-gray-800 text-xs md:text-base">George: +39 351 280 9502</span>
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-end flex-1 md:px-4 mb-2 md:mb-0">
          <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 text-gray-900">Quick Links</h3>
          <ul className="mb-2 md:mb-4 text-gray-800 text-xs md:text-base space-y-1 text-center md:text-right">
            <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500 transition">About Us</a></li>
            <li><a href="#services" className="hover:text-blue-500 transition">Services</a></li>
            <li><a href="#Application" className="hover:text-blue-500 transition">Application Form</a></li>
          </ul>
          <div className="flex gap-2 md:gap-4 mt-1 md:mt-2 justify-center md:justify-end">
            <a href="#" aria-label="YouTube" className="text-gray-700 hover:text-red-500 text-lg md:text-2xl"><FaYoutube /></a>
            <a href="#" aria-label="Instagram" className="text-gray-700 hover:text-pink-500 text-lg md:text-2xl"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="text-gray-700 hover:text-blue-700 text-lg md:text-2xl"><FaLinkedin /></a>
            <a href="#" aria-label="Facebook" className="text-gray-700 hover:text-blue-600 text-lg md:text-2xl"><FaFacebookF /></a>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full text-center text-gray-500 text-xs md:text-sm mt-3 md:mt-6">All Rights Reserved © Maitri Global Consultancy L.L.C.</div>
  </footer>
);

export default Footer;