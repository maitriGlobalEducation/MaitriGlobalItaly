import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const eligibilityPoints = [
  'Valid degree or diploma in nursing or patient care assistance',
  'Transcripts and registration certificate from the Nursing Council',
  'A valid passport',
  'Willingness to attend Italian language training',
  'Commitment to relocate and work legally in Italy',
];

const Eligibility = () => (
  <section className="w-full flex justify-center py-20" id="eligibility">
    <div className="max-w-7xl w-full mx-auto px-4 bg-white rounded-3xl shadow-2xl p-10 md:p-16 flex flex-col items-center border-t-8 border-blue-500 relative">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-500 rounded-full p-3 shadow-lg">
        <FaCheckCircle className="text-white text-4xl" />
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-8 mb-2 text-center">Eligibility Criteria</h2>
      <p className="text-lg text-gray-600 mb-8 text-center">To apply, candidates must meet the following requirements:</p>
      <ul className="mt-2 space-y-6 w-full">
        {eligibilityPoints.map((point, idx) => (
          <li key={idx} className="flex items-start gap-4 text-lg md:text-xl text-gray-800" data-aos="fade-up" data-aos-delay={idx * 100}>
            <span className="mt-1 text-blue-500"><FaCheckCircle size={28} /></span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Eligibility;