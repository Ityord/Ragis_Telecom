import React from 'react';
import missionImage from '../asssets/mission.png'; // Make sure you have this image

const AboutPage: React.FC = () => {
  return (
    // The main container is transparent to let the global background show through
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-5">
        
        {/* --- Main Heading --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Engineering the Backbone of Modern Communication
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Ragis Telecom and Services Pvt. Ltd, we provide the critical components and expert services that power the networks of tomorrow.
          </p>
        </div>
        
        {/* --- Who We Are Section --- */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <div className="bg-white/60 p-8 rounded-lg shadow-lg border border-gray-200/50">
            <h2 className="text-2xl font-semibold text-[#D9A299] mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              <b>Ragis Telecom and Services Pvt. Ltd </b> is a premier provider of comprehensive fiber optic, network infrastructure solutions, manufacturer and distributor of fiber optic equipment based in Ambernath, Thane, Maharashtra, India. Formerly, it was known as Ragis Technologies, established in 2019, the company was specialized in providing essential tools for the telecommunications and fiber optics industry. From the foundational cables and passive components to the sophisticated testing equipment required for deployment, we are a one-stop shop for all your networking needs.
            </p>
            <br />
            <p className="text-gray-700 leading-relaxed">
              Our expertise extends beyond supply. We are technical specialists, offering expert repair and maintenance for essential equipment like fusion splicers, ensuring your operations always run at peak efficiency.
            </p>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <img src={missionImage} alt="Team working on fiber optic infrastructure" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* --- Our Commitment Section --- */}
        <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Commitment to Quality and Safety</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              We understand that a network is only as strong as its weakest link. That’s why we are deeply committed to not only providing high-quality components but also ensuring the long-term reliability and safety of your infrastructure.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-white/60 p-8 rounded-lg shadow-md border border-gray-200/50">
                    <h3 className="text-xl font-semibold text-[#D9A299] mb-3">Precision and Performance</h3>
                    <p className="text-gray-700">
                        Our range of OTDR testers, power meters, and splicers empowers technicians to build and maintain networks with absolute precision. We believe in providing tools that guarantee performance.
                    </p>
                </div>
                <div className="bg-white/60 p-8 rounded-lg shadow-md border border-gray-200/50">
                    <h3 className="text-xl font-semibold text-[#D9A299] mb-3">Infrastructure Protection</h3>
                    <p className="text-gray-700">
                        Our portfolio of lightning arresters and surge protectors demonstrates our commitment to safeguarding your critical assets from environmental threats, ensuring uptime and operational continuity.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;