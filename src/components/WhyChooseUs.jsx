import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaRegClock, FaCalendarAlt, FaMapMarkerAlt, FaHandsHelping, FaLanguage } from 'react-icons/fa';

const stats = [
  {
    label: 'Job Satisfaction Ratio',
    value: 99,
    suffix: '%',
    icon: <FaRegClock size={32} className="text-orange-500" />,
    bg: 'bg-orange-50',
    color: 'text-orange-500',
    showCount: true,
    aos: 'fade-up',
  },
  {
    label: 'Years of Experience',
    value: 15,
    suffix: '+',
    icon: <FaCalendarAlt size={32} className="text-purple-500" />,
    bg: 'bg-purple-50',
    color: 'text-purple-500',
    showCount: true,
    aos: 'fade-up',
  },
  {
    label: 'Based in Dubai',
    icon: <FaMapMarkerAlt size={32} className="text-green-400" />,
    bg: 'bg-green-50',
    color: 'text-green-400',
    showCount: false,
    aos: 'fade-up',
  },
  {
    label: 'Support from application to arrival',
    icon: <FaHandsHelping size={32} className="text-blue-400" />,
    bg: 'bg-blue-50',
    color: 'text-blue-400',
    showCount: false,
    aos: 'fade-up',
  },
  {
    label: 'Language assistance led by native level instructors',
    icon: <FaLanguage size={32} className="text-teal-400" />,
    bg: 'bg-teal-50',
    color: 'text-teal-400',
    showCount: false,
    aos: 'fade-up',
  },
];

const WhyChooseUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="w-full py-16 bg-white flex flex-col items-center" id="why-choose-us" ref={ref} data-aos="fade-up">
      <div className="max-w-7xl w-full mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div data-aos="fade-right">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
          <ul className="list-disc list-outside pl-6 space-y-2 text-base text-gray-800 mb-8">
            <li>Licensed HR consultancy based in Dubai</li>
            <li>Backed by 15+ years of experience in Italy and India through Maitri Global Education</li>
            <li>Direct network of employers and healthcare providers in Italy</li>
            <li>Full-cycle support from application to arrival</li>
            <li>Italian language training led by native-level instructors</li>
            <li>Transparent and ethical processes, guided by experienced professionals</li>
          </ul>
          <a href="#eligibility-form" className="mt-2 px-2 py-3 bg-green-400 hover:bg-green-500 text-white font-semibold rounded-full flex w-45 justify-center items-center gap-2 transition group">
            Let's Connect <span className="inline-block transition-transform duration-300 rotate-[-45deg] group-hover:rotate-0">→</span>
          </a>
        </div>
        {/* Right Side */}
        <div className="grid grid-cols-2 gap-6">
          {/* Top Row */}
          <div className="col-span-1 row-span-1 flex flex-col items-center justify-center rounded-2xl bg-orange-50 p-6 shadow-sm" data-aos={stats[0].aos}>
            <div className="mb-2">{stats[0].icon}</div>
            <div className="text-4xl font-bold text-orange-500">
              {inView && <CountUp end={stats[0].value} duration={2} suffix={stats[0].suffix} />}
            </div>
            <div className="text-base font-semibold text-gray-800 text-center mt-1">{stats[0].label}</div>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col items-center justify-center rounded-2xl bg-purple-50 p-6 shadow-sm" data-aos={stats[1].aos}>
            <div className="mb-2">{stats[1].icon}</div>
            <div className="text-4xl font-bold text-purple-500">
              {inView && <CountUp end={stats[1].value} duration={2} suffix={stats[1].suffix} />}
            </div>
            <div className="text-base font-semibold text-gray-800 text-center mt-1">{stats[1].label}</div>
          </div>
          {/* Bottom Row */}
          <div className="col-span-1 row-span-1 flex flex-col items-center justify-center rounded-2xl bg-green-50 p-6 shadow-sm" data-aos={stats[2].aos}>
            <div className="mb-2">{stats[2].icon}</div>
            <div className="text-lg font-semibold text-green-400 text-center mt-1">{stats[2].label}</div>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col items-center justify-center rounded-2xl bg-blue-50 p-6 shadow-sm" data-aos={stats[3].aos}>
            <div className="mb-2">{stats[3].icon}</div>
            <div className="text-lg font-semibold text-blue-400 text-center mt-1">{stats[3].label}</div>
          </div>
          <div className="col-span-2 flex flex-col items-center justify-center rounded-2xl bg-teal-50 p-6 shadow-sm mt-2" data-aos={stats[4].aos}>
            <div className="mb-2">{stats[4].icon}</div>
            <div className="text-lg font-semibold text-teal-400 text-center mt-1">{stats[4].label}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;