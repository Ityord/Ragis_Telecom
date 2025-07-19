import React from 'react';
import { Link } from 'react-router-dom';
import AboutSection from '../components/common/AboutSection'; // 1. Import the new component

const SplicerIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#D9A299]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945" />
    </svg>
);

const HeroSection: React.FC = () => {
    return (
        <section className="relative flex items-center justify-center text-center py-40">
            <div className="relative z-10 px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 drop-shadow-md">Connecting the Future</h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8 drop-shadow-sm">
                    Providing state-of-the-art optical fiber solutions for unparalleled speed and reliability.
                </p>
                <Link
                    to="/contact"
                    className="inline-block bg-[#DCC5B2] text-white font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300 hover:bg-[#D9A299] hover:shadow-xl hover:scale-105"
                >
                    Book Service
                </Link>
            </div>
        </section>
    );
};

const RepairSection: React.FC = () => {
    return (
        <section id="repair-section" className="relative z-10 py-20 md:py-24 bg-transparent">
            <div className="container mx-auto px-5">
                <div className="bg-[#F0E4D3]/60 rounded-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="flex-shrink-0">
                        <SplicerIcon />
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Expert Repair & Maintenance</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            We provide comprehensive servicing and precision repairs for all major brands of optical fiber fusion splicers.
                            <br />
                            Our certified technicians ensure your equipment performs at its peak.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-[#D9A299] text-white font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300 hover:bg-[#DCC5B2] hover:shadow-xl hover:scale-105"
                        >
                            Book Service
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};


const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <AboutSection /> {/* 2. Add the component here */}
            <RepairSection />
        </>
    );
};

export default HomePage;