import React from 'react'

const AboutUs = () => (
  <>
    <div className="w-full h-6 bg-green-600"></div>
    <section id="about" className="w-full min-h-0 bg-white flex flex-col items-center mt-[45px] mb-[45px] mx-4 lg:mx-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-stretch px-0 lg:px-0 m-0">
        {/* Left: Image */}
        <div className="lg:w-1/2 w-full flex items-center justify-center lg:mb-0 m-0 p-0" data-aos="fade-right">
          <img src="/aboutus.jpg" alt="About Us" className="max-w-full max-h-[400px] w-auto h-auto object-contain rounded-xl shadow-md mx-auto" />
        </div>
        {/* Right: Heading and Text Content */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center m-0 p-0 lg:pl-8 lg:pr-12" data-aos="fade-left">
          <h2 className="text-5xl md:text-7xl font-bold text-black text-left w-full mb-6">About Us</h2>
          <p className="text-lg md:text-xl text-black font-normal m-0 p-0">
            Maitri Global Consultancy LLC is a Dubai-based HR consultancy authorized to recruit qualified <span className="font-bold">nurses</span> and <span className="font-bold">assistant nurses</span> to Italy. We specialize in international placements with a strong focus on ethical recruitment, transparency, and complete candidate support. Partnering with our parent organization, <span className="font-bold">Maitri Global Education</span>—a trusted name since 2009 in international education and recruitment based in Florence, Italy—we deliver seamless end-to-end services for aspiring healthcare professionals.
          </p>
          <hr className="border-gray-400 m-0 p-0 my-4" />
          <div className="m-0 p-0">
            <p className="text-lg md:text-xl text-black font-bold m-0 p-0">Bridging Talent with Opportunity</p>
            <p className="text-lg md:text-xl text-black font-normal m-0 p-0">
              Operating from Dubai, Maitri Global Consultancy LLC recruits skilled nurses and assistant nurses from India and the GCC to Italy. We are a subsidiary of <span className="font-bold">Maitri Global Education</span>, based in Florence, Italy, which has been working in international admissions and healthcare recruitment since 2009.<br/>
              Our strong collaboration with the Italian team ensures that candidates not only secure job opportunities in Italy but also receive full <span className="font-bold">legal, linguistic, and settlement support</span> in the country through our Italian partners.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className="w-full h-6 bg-red-600"></div>
  </>
)

export default AboutUs