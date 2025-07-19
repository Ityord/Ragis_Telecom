import React from 'react';

const WhatsAppWidget: React.FC = () => {
  return (
    <a
      href="https://wa.me/+917219582302"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      // Updated classes for the green background and a new hover glow effect
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        {/* This SVG path represents the phone icon inside the WhatsApp logo */}
        <path d="M15.4,13.2c-0.3-0.2-1.8-0.9-2.1-1s-0.5-0.2-0.7,0.2s-0.8,1-1,1.2s-0.3,0.2-0.6,0.1c-0.3-0.1-1.2-0.4-2.3-1.4 c-0.8-0.8-1.4-1.8-1.6-2.1c-0.2-0.3,0-0.5,0.1-0.6s0.3-0.3,0.4-0.5s0.2-0.3,0.3-0.5s0.1-0.4,0-0.6c-0.1-0.2-0.7-1.7-0.9-2.3 c-0.2-0.6-0.5-0.5-0.7-0.5h-0.6c-0.2,0-0.6,0.1-0.9,0.4s-1.1,1.1-1.1,2.6s1.1,3,1.3,3.2s2.2,3.4,5.4,4.8c3.2,1.4,3.2,0.9,3.8,0.9 c0.6,0,1.8-0.8,2.1-1.5s0.3-1.3,0.2-1.5C16.2,13.9,15.7,13.4,15.4,13.2z" />
        <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8 s8,3.6,8,8S16.4,20,12,20z" />
      </svg>
    </a>
  );
};

export default WhatsAppWidget;