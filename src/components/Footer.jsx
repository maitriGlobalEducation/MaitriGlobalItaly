import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaYoutube, FaInstagram, FaLinkedin, FaFacebookF } from 'react-icons/fa';

const Footer = () => (
  <footer className="w-full pt-12 pb-4 flex flex-col items-center">
    <div className="max-w-7xl w-full mx-auto rounded-3xl shadow border border-gray-200 bg-gray-50 px-4 md:px-6 py-8 md:py-12 flex flex-col md:flex-row md:justify-between items-start gap-8 md:gap-0">
      {/* Logo */}
      <div className="flex flex-col items-center md:items-start flex-1 mb-8 md:mb-0 md:px-8">
        <div className="w-44 h-16 flex items-center justify-center mb-2">
          {/* Logo Image */}
          <img src="/logomtg.jpg" alt="Logo" className="h-full object-contain" />
        </div>
      </div>
      {/* Head Office */}
      <div className="flex flex-col items-center md:items-start flex-1 mb-8 md:mb-0 md:px-8">
        <h3 className="text-2xl font-bold mb-3 text-gray-900">Head Office</h3>
        <div className="flex items-start gap-2 mb-2 w-full">
          <FaMapMarkerAlt className="text-gray-700 mt-1" />
          <span className="text-gray-800 text-base leading-relaxed">686, Unique World Business Center<br/>Hamsa A Building, Al Karama, Dubai, UAE</span>
        </div>
      </div>
      {/* Contact */}
      <div className="flex flex-col items-center md:items-start flex-1 mb-8 md:mb-0 md:px-8">
        <h3 className="text-2xl font-bold mb-3 text-gray-900">Contact</h3>
        <div className="flex items-center gap-2 mb-2 w-full">
          <FaEnvelope className="text-gray-700" />
          <span className="text-gray-800 text-base">hr@maitriglobaleducation.com</span>
        </div>
        <div className="flex items-center gap-2 mb-2 w-full">
          <FaPhoneAlt className="text-gray-700" />
          <span className="text-gray-800 text-base">UAE Tel: +971 58 588 6690</span>
        </div>
        <div className="flex items-center gap-2 mb-2 w-full">
          <FaPhoneAlt className="text-gray-700" />
          <span className="text-gray-800 text-base">Italy Contacts:</span>
        </div>
        <div className="flex items-center gap-2 w-full pl-6">
          <span className="text-gray-800 text-base">Abraham: +39 331 847 6757</span>
        </div>
        <div className="flex items-center gap-2 w-full pl-6">
          <span className="text-gray-800 text-base">George: +39 351 280 9502</span>
        </div>
      </div>
      {/* Quick Links */}
      <div className="flex flex-col items-center md:items-end flex-1 md:px-8">
        <h3 className="text-2xl font-bold mb-3 text-gray-900">Quick Links</h3>
        <ul className="mb-4 text-gray-800 text-base space-y-1 text-right">
          <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500 transition">About Us</a></li>
          <li><a href="#services" className="hover:text-blue-500 transition">Services</a></li>
          <li><a href="#Application" className="hover:text-blue-500 transition">Application Form</a></li>
        </ul>
        <div className="flex gap-4 mt-2">
          <a href="#" aria-label="YouTube" className="text-gray-700 hover:text-red-500 text-2xl"><FaYoutube /></a>
          <a href="#" aria-label="Instagram" className="text-gray-700 hover:text-pink-500 text-2xl"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn" className="text-gray-700 hover:text-blue-700 text-2xl"><FaLinkedin /></a>
          <a href="#" aria-label="Facebook" className="text-gray-700 hover:text-blue-600 text-2xl"><FaFacebookF /></a>
        </div>
      </div>
    </div>
    <div className="w-full text-center text-gray-500 text-sm mt-6">Copyright © Maitri Global Consultancy L.L.C.</div>
  </footer>
);

export default Footer;