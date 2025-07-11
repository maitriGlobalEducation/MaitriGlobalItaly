import React, { useRef, useEffect, useState } from 'react'
import { FaBriefcaseMedical, FaFileAlt, FaPassport, FaHospitalUser, FaChalkboardTeacher, FaHandsHelping } from 'react-icons/fa'

const services = [
  {
    title: 'Candidate Screening & Documentation',
    desc: 'Verification of education, transcripts, Nursing Council registration, and passport',
    icon: <FaBriefcaseMedical size={32} className="text-white" />,
    color: 'bg-red-500',
  },
  {
    title: 'Document Legalization',
    desc: 'Guidance and support for notarization, apostille, embassy submissions, and more',
    icon: <FaFileAlt size={32} className="text-white" />,
    color: 'bg-red-500',
  },
  {
    title: 'Visa Assistance',
    desc: 'Full visa process support, including VFS appointments and consular coordination',
    icon: <FaPassport size={32} className="text-white" />,
    color: 'bg-red-500',
  },
  {
    title: 'Job Matching & Employer Procurement',
    desc: 'Placement in hospitals, elder care homes (RSAs), and private clinics in Italy',
    icon: <FaHospitalUser size={32} className="text-white" />,
    color: 'bg-red-500',
  },
  {
    title: 'Language Formation',
    desc: 'Online training by certified Italian experts based in Italy\nOffline classroom courses in India delivered through our authorized training partners',
    icon: <FaChalkboardTeacher size={32} className="text-white" />,
    color: 'bg-red-500',
  },
  {
    title: 'Support in Italy',
    desc: 'Through Maitri Global Education, we offer onboarding assistance, initial accommodation help, and legal support if needed',
    icon: <FaHandsHelping size={32} className="text-white" />,
    color: 'bg-red-500',
  },
]

const iconMap = [
  FaBriefcaseMedical,
  FaFileAlt,
  FaPassport,
  FaHospitalUser,
  FaChalkboardTeacher,
  FaHandsHelping,
];

const Services = () => {
  const buttonRef = useRef(null);
  const [bgHeight, setBgHeight] = useState();
  const containerRef = useRef(null);

  useEffect(() => {
    function updateBgHeight() {
      if (buttonRef.current && containerRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        // Height from top of container to 20px below button
        const height = buttonRect.bottom - containerRect.top + 20;
        setBgHeight(height);
      }
    }
    updateBgHeight();
    window.addEventListener('resize', updateBgHeight);
    return () => window.removeEventListener('resize', updateBgHeight);
  }, []);

  return (
    <section
      id="services"
      className="w-full min-h-screen bg-white flex flex-col items-center py-16 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background image with lower opacity, cut off after eligibility button */}
      <div
        className="absolute left-0 top-0 w-full z-0"
        style={{
          height: bgHeight ? `${bgHeight}px` : '100%',
          overflow: 'hidden',
          transition: 'height 0.3s',
        }}
      >
        <div style={{ backgroundImage: 'url(/servicebg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.8, filter: 'brightness(0.3)', width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-black/40 z-0" style={{ pointerEvents: 'none' }}></div>
      </div>
      <div className="max-w-6xl w-full mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-white drop-shadow-lg">Our Services</h2>
        <p className="text-center text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white drop-shadow">
          Recruitment of Nurses and Assistant Nurses to Italy<br />
          We specialize in placing qualified healthcare professionals into Italy's growing healthcare sector.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = iconMap[idx];
            return (
              <div
                key={idx}
                className="group flex flex-row items-center rounded-3xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 bg-white/90 overflow-hidden h-full border border-black-300 transform p-6"
              >
                <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-red-500 mr-6 flex-shrink-0 transition-all duration-300 group-hover:bg-transparent`}>
                  <Icon size={32} className="text-white transition-all duration-300 group-hover:text-red-500" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-lg md:text-xl text-black mb-1">{service.title}</h3>
                  <p className="text-black text-sm md:text-base leading-snug">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Centered Button Below Services Grid */}
        <div className="flex justify-center mt-10">
          <a
            href="#eligibility"
            className="px-8 py-3 bg-red-500 text-white rounded-full shadow-lg text-lg font-semibold hover:bg-red-600 transition-all duration-200"
            ref={buttonRef}
          >
            Check Eligibility
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services