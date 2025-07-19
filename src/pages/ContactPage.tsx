import React from 'react';

const ContactPage: React.FC = () => {
  // Styles for the glass effect
  const glassEffectStyle = {
    backgroundColor: 'rgba(240, 228, 211, 0.6)', // #F0E4D3 with 60% opacity
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)', // For Safari support
  };

  return (
    // The inline style with the background color has been removed from this div 👇
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Contact Us
        </h1>
        <div className="flex flex-col items-center gap-12">
          {/* Contact Information Card with Glass Effect */}
          <div
            style={glassEffectStyle}
            className="p-8 rounded-lg shadow-lg w-full max-w-2xl transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-white border-opacity-20"
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-8 text-center text-lg">
              We are here to help you. Reach out to us for any queries or support.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-600 mr-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <p className="text-gray-700 font-medium">
                  #604, B2, Synergy Tower, Ambernath East, Maharashtra, India
                </p>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-600 mr-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <p className="text-gray-700 font-medium">sales@ragassolutions.com</p>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-600 mr-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0119 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <p className="text-gray-700 font-medium">+91 7709612301, +91 7219582302</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;