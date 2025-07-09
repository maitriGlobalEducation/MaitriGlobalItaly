import React from 'react'

const AboutUs = () => (
  <section id="about" className="w-full min-h-screen bg-white flex flex-col justify-center items-center py-16">
    <div className="container mx-auto flex flex-col lg:flex-row items-stretch px-4 lg:px-12">
      {/* Left: Large Heading */}
      <div className="lg:w-1/2 w-full flex items-center justify-center mb-12 lg:mb-0" data-aos="fade-right">
        <h2 className="text-6xl md:text-8xl font-bold text-black text-left w-full lg:w-auto">About Us</h2>
      </div>
      {/* Right: Text Content */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center" data-aos="fade-left">
        <p className="text-lg md:text-xl text-black font-normal mb-6">
          Maitri Global Consultancy LLC is a Dubai-based HR consultancy authorized to recruit qualified <span className="font-bold">nurses</span> and <span className="font-bold">assistant nurses</span> to Italy. We specialize in international placements with a strong focus on ethical recruitment, transparency, and complete candidate support. Partnering with our parent organization, <span className="font-bold">Maitri Global Education</span>—a trusted name since 2009 in international education and recruitment based in Florence, Italy—we deliver seamless end-to-end services for aspiring healthcare professionals.
        </p>
        <hr className="border-gray-400 mb-6" />
        <div>
          <p className="text-lg md:text-xl text-black font-bold mb-2">Bridging Talent with Opportunity</p>
          <p className="text-lg md:text-xl text-black font-normal">
            Operating from Dubai, Maitri Global Consultancy LLC recruits skilled nurses and assistant nurses from India and the GCC to Italy. We are a subsidiary of <span className="font-bold">Maitri Global Education</span>, based in Florence, Italy, which has been working in international admissions and healthcare recruitment since 2009.<br/>
            Our strong collaboration with the Italian team ensures that candidates not only secure job opportunities in Italy but also receive full <span className="font-bold">legal, linguistic, and settlement support</span> in the country through our Italian partners.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default AboutUs