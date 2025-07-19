import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-transparent">
      <div className="container mx-auto px-5 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Welcome to Ragis Telecom and Services Pvt. Ltd
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          (<b>Formerly Ragis Technologies</b>) <br/>Your trusted partner in pioneering fiber optic technology and network infrastructure. We are committed to delivering unparalleled speed, reliability, and innovation.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white/50 p-8 rounded-lg shadow-md border border-gray-200/50">
            <h3 className="text-2xl font-semibold text-[#D9A299] mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading force in connecting communities and businesses with the infrastructure of tomorrow. We believe in building networks that are not just fast, but are also robust, scalable, and secure, forming the backbone of modern communication.
            </p>
          </div>
          <div className="bg-white/50 p-8 rounded-lg shadow-md border border-gray-200/50">
            <h3 className="text-2xl font-semibold text-[#D9A299] mb-3">Our Commitment</h3>
            <p className="text-gray-600">
              From expert fusion splicer repairs to deploying comprehensive lightning protection systems, our focus is always on quality and precision. Our certified technicians and engineers use state-of-the-art equipment to ensure every project meets the highest standards of excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;